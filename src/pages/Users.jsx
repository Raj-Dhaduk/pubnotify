import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  CheckCircle,
  XCircle,
  Download,
  Send,
  Edit,
  Trash2,
} from "lucide-react";

const userData = [
  {
    id: 1,
    name: "First and last",
    status: "active",
    totalTokens: 22,
    noOfDomains: 22,
  },
  {
    id: 2,
    name: "First and last",
    status: "inactive",
    totalTokens: 22,
    noOfDomains: 22,
  },
  {
    id: 3,
    name: "First and last",
    status: "active",
    totalTokens: 22,
    noOfDomains: 22,
  },
  {
    id: 4,
    name: "First and last",
    status: "active",
    totalTokens: 22,
    noOfDomains: 22,
  },
  {
    id: 5,
    name: "First and last",
    status: "active",
    totalTokens: 22,
    noOfDomains: 22,
  },
];

export default function Users() {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [filter, setFilter] = useState("");

  return (
    <div className="bg-white-100  dark:bg-gray-800 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white-100  dark:bg-gray-800  rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Users</h1>

        <div className="mb-4 relative">
          <Input
            type="text"
            placeholder="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Tokens</TableHead>
              <TableHead>No. of Domains</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id.toString().padStart(2, "0")}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  {user.status === "active" ? (
                    <CheckCircle className="text-green-500" />
                  ) : (
                    <XCircle className="text-red-500" />
                  )}
                </TableCell>
                <TableCell>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {user.totalTokens}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {user.noOfDomains}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4 text-blue-500" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Send className="h-4 w-4 text-blue-500" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-500">1-5 of 20</span>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Items per page:</span>
            <select
              className="border rounded p-1 text-sm bg-white dark:bg-gray-800"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
