import React from "react";
import { Button } from "./../components/ui/Button";
import { Input } from "./../components/ui/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./../components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./../components/ui/Avatar";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Plus,
  Search,
} from "lucide-react";
import logo from "./../../public/logo.svg";

const campaignData = [
  {
    name: "Here we gonna add...",
    status: "Sent",
    lastSent: "Date and Time",
    filter: "Sent",
    sent: 22,
    clicked: 3,
    ctr: "13.63%",
  },
  {
    name: "Here we gonna add...",
    status: "Sent",
    lastSent: "Date and Time",
    filter: "Sent",
    sent: 22,
    clicked: 3,
    ctr: "13.63%",
  },
  {
    name: "Here we gonna add...",
    status: "Sent",
    lastSent: "Date and Time",
    filter: "Sent",
    sent: 22,
    clicked: 3,
    ctr: "13.63%",
  },
  {
    name: "Here we gonna add...",
    status: "Sent",
    lastSent: "Date and Time",
    filter: "Sent",
    sent: 22,
    clicked: 3,
    ctr: "13.63%",
  },
  {
    name: "Here we gonna add...",
    status: "Sent",
    lastSent: "Date and Time",
    filter: "Sent",
    sent: 22,
    clicked: 3,
    ctr: "13.63%",
  },
  {
    name: "Here we gonna add...",
    status: "Sent",
    lastSent: "Date and Time",
    filter: "Sent",
    sent: 22,
    clicked: 3,
    ctr: "13.63%",
  },
  {
    name: "Here we gonna add...",
    status: "Sent",
    lastSent: "Date and Time",
    filter: "Sent",
    sent: 22,
    clicked: 3,
    ctr: "13.63%",
  },
  {
    name: "Here we gonna add...",
    status: "Sent",
    lastSent: "Date and Time",
    filter: "Sent",
    sent: 22,
    clicked: 3,
    ctr: "13.63%",
  },
];

export default function CampaignReports() {
  return (
    <div className="bg-white-100  dark:bg-gray-800 min-h-screen">
      <header className="bg-white dark:bg-gray-800 border-b  px-4 py-2 flex justify-between items-center"></header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Campaign Reports</h1>

        <div className=" rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
          <div className="mb-4 relative">
            <Input type="text" placeholder="Filter" className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Sent</TableHead>
                <TableHead>Filter</TableHead>
                <TableHead>Sent</TableHead>
                <TableHead>Clicked</TableHead>
                <TableHead>CTR</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaignData.map((campaign, index) => (
                <TableRow key={index}>
                  <TableCell>{campaign.name}</TableCell>
                  <TableCell>{campaign.status}</TableCell>
                  <TableCell>{campaign.lastSent}</TableCell>
                  <TableCell>{campaign.filter}</TableCell>
                  <TableCell>{campaign.sent}</TableCell>
                  <TableCell>{campaign.clicked}</TableCell>
                  <TableCell>{campaign.ctr}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">1-8 of 33</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Items per page:</span>
              <select className="border rounded p-1 text-sm">
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
