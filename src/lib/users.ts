export type User = {
    id: string
    name: string
    email: string
    role: string
    status: "Active" | "Inactive"
  }
  
  export const users: User[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "User",
      status: "Inactive",
    },
    // Add more mock users as needed
  ]
  
  export async function getUsers(): Promise<User[]> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return users
  }
  
  