"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data = [
  {
    id: "1",
    name: "Product A",
    price: "$299.99",
    stock: 45,
    status: "In Stock",
  },
  {
    id: "2",
    name: "Product B",
    price: "$199.99",
    stock: 12,
    status: "Low Stock",
  },
  {
    id: "3",
    name: "Product C",
    price: "$499.99",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "4",
    name: "Product D",
    price: "$399.99",
    stock: 23,
    status: "In Stock",
  },
]

export function DataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.stock}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
} 