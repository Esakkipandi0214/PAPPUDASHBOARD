"use client"

import { useEffect, useState } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { User, getUsers } from "@/lib/users"
import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from 'lucide-react'
import Layout from "@/components/LayoutComponent/Layout"
// Edit and Delete handlers moved before the columns definition
const handleEdit = (user: User) => {
  console.log("Edit user:", user)
}

const handleDelete = (user: User) => {
  console.log("Delete user:", user)
}

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <span className="font-medium text-gray-800">{row.getValue("name")}</span>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="text-sm text-blue-600 underline">{row.getValue("email")}</span>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <span className="px-2 py-1 rounded-md text-white bg-green-500">
        {row.getValue("role")}
      </span>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original
      return (
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200"
            onClick={() => handleEdit(user)}
            aria-label={`Edit ${user.name}`}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-red-100 text-red-800 border-red-300 hover:bg-red-200"
            onClick={() => handleDelete(user)}
            aria-label={`Delete ${user.name}`}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      )
    },
  },
]

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers()
      setUsers(fetchedUsers)
    }
    fetchUsers()
  }, [])

  return (
    <Layout>
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">User Management</h1>
      <div className="shadow-lg border border-gray-200 rounded-lg bg-white">
        <DataTable columns={columns} data={users} />
      </div>
    </div>
    </Layout>
  )
}
