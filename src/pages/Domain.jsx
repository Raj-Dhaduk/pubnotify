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
} from "lucide-react";

const domainData = [
  { id: 1, name: "First and last", totalTokens: 22, approvedOn: "22 Jun 2023" },
  { id: 2, name: "First and last", totalTokens: 22, approvedOn: "22 Jun 2023" },
  { id: 3, name: "First and last", totalTokens: 22, approvedOn: "22 Jun 2023" },
  { id: 4, name: "First and last", totalTokens: 22, approvedOn: "22 Jun 2023" },
  { id: 5, name: "First and last", totalTokens: 22, approvedOn: "22 Jun 2023" },
];

export default function Domains() {
  const [itemsPerPage, setItemsPerPage] = useState(5);

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Domains</h1>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S No.</TableHead>
              <TableHead>Domain Name</TableHead>
              <TableHead>Total Tokens</TableHead>
              <TableHead>Approved on</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {domainData.map((domain) => (
              <TableRow key={domain.id}>
                <TableCell>{domain.id.toString().padStart(2, "0")}</TableCell>
                <TableCell>{domain.name}</TableCell>
                <TableCell>{domain.totalTokens}</TableCell>
                <TableCell>{domain.approvedOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4 flex items-center justify-between ">
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
