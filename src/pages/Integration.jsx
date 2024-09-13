import React, { useState } from "react";
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
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Plus,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";

const domainData = [
  { id: 1, name: "Domain", actions: ["Edit", "Delete"] },
  { id: 2, name: "Domain", actions: ["Edit", "Delete"] },
  { id: 3, name: "Domain", actions: ["Edit", "Delete"] },
  { id: 4, name: "Domain", actions: ["Edit", "Delete"] },
  { id: 5, name: "Domain", actions: ["Edit", "Delete"] },
];

export default function Integration() {
  const [domain, setDomain] = useState("");

  return (
    <div className="bg-gray-100  dark:bg-gray-800 min-h-screen">
      <main className="container mx-auto px-4 py-8 bg-gray-100  dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-6">Integration</h1>

        <div className="space-y-6 bg-gray-100  dark:bg-gray-800">
          {/* Add Domain Section */}
          <div className="bg-white  dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-2">
                <AlertCircle size={16} />
              </span>
              Add Domain <ChevronDown className="ml-2" />
            </h2>
            <div className="flex space-x-2">
              <Input
                placeholder="e.g. yourdomain.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-grow"
              />
              <Button>Submit</Button>
            </div>
          </div>

          {/* Setup Section */}
          <div className="bg-gray-100  dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                2
              </span>
              Setup <ChevronDown className="ml-2" />
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">
                  Step 1: Download zip & add files to the root directory
                </p>
                <Button variant="outline" className="mt-2">
                  Download ZIP
                </Button>
              </div>
              <div>
                <p className="font-semibold">
                  Step 2: Copy & paste this code before {"</head>"} tag on
                  website pages
                </p>
                <div className="bg-gray-100  dark:bg-gray-800  p-2 rounded mt-2 flex justify-between items-center">
                  <code className="text-sm">
                    {
                      '<script data-cfasync="false" src="https://pushnotifications.com/script.js?id=12345"></script>'
                    }
                  </code>
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-green-100 border-l-4 border-green-500 p-4 flex items-start">
                <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-green-700">Recommended</p>
                  <p className="text-sm text-green-600">
                    Once you have installed pubnotify on your website, use the
                    Verify button to validate the setup.
                  </p>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                Verify Setup
              </Button>
              <div>
                <p className="font-semibold">Other ways to install:</p>
                <div className="flex space-x-4 mt-2">
                  <img src="/public/AMP.svg" alt="AMP" className="h-30 w-30" />
                  <img
                    src="/public/wordpress.svg"
                    alt="WordPress"
                    className="h-30 w-30"
                  />
                  <img
                    src="/public/shopify.svg"
                    alt="Shopify"
                    className="h-30 w-30"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Domains Section */}
          <div className="bg-white   dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                3
              </span>
              Domains <ChevronDown className="ml-2" />
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">S No.</TableHead>
                  <TableHead>Domain Name</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {domainData.map((domain) => (
                  <TableRow key={domain.id}>
                    <TableCell>{domain.id}</TableCell>
                    <TableCell>{domain.name}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {domain.actions.map((action, index) => (
                          <Button key={index} variant="outline" size="sm">
                            {action}
                          </Button>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">1-5 of 5</div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Items per page:</span>
                <select className="border rounded p-1 text-sm bg-white  dark:bg-gray-800">
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
        </div>
      </main>
    </div>
  );
}
