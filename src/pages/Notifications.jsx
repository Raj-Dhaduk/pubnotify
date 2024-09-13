import { useState } from "react";
import { Button } from "./../components/ui/Button";
import { Input } from "./../components/ui/Input";
import { Textarea } from "./../components/ui/textarea";
import { Select } from "./../components/ui/select";
import { Switch } from "./../components/ui/switch";
import { Label } from "./../components/ui/lable";
import logo from "../../public/logo.svg";

import { RadioGroup, RadioGroupItem } from "./../components/ui/radio-group";

import { Checkbox } from "./../components/ui/checkbox";
import { ChevronDown, AlertCircle, Bell } from "lucide-react";

export default function SendNotification() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [notificationType, setNotificationType] = useState("broadcast");

  return (
    <div className="bg-gray-100  dark:bg-gray-800 min-h-[150vh] ">
      <main className="container mx-auto px-4 py-8 bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-6">Send Notification</h1>

        <div className="bg-white  dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left column - Form */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <Label htmlFor="select-user">Select User</Label>
                <Select id="select-user">
                  <option>Justin jhonson (17)</option>
                </Select>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-4">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-2">
                    <AlertCircle size={16} />
                  </span>
                  Message <ChevronDown className="inline-block ml-2" />
                </h2>

                <div className="mb-4">
                  <Label htmlFor="landing-page">Landing Page URL *</Label>
                  <Input id="landing-page" placeholder="Page URL" />
                </div>

                <div className="mb-4">
                  <Label htmlFor="campaign-name">Campaign Name *</Label>
                  <Input id="campaign-name" placeholder="Dummy Text" />
                  <div className="text-right text-sm text-gray-500">
                    0 / 100
                  </div>
                </div>

                <div className="mb-4">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    placeholder="Page URL"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-red-500"
                  />
                  <div className="text-right text-sm text-gray-500">
                    0 / 100
                  </div>
                  <p className="text-red-500 text-sm mt-1">
                    Error will be shown like this
                  </p>
                </div>

                <div className="mb-4">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="This is the Message we are going to add here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className="text-right text-sm text-gray-500">
                    0 / 100
                  </div>
                </div>

                <div className="mb-4">
                  <Label htmlFor="banner-image">Banner Image *</Label>
                  <Input id="banner-image" placeholder="Dummy Text" />
                </div>

                <div className="mb-4">
                  <Label htmlFor="icon">Icon</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="icon"
                      placeholder="Page URL"
                      className="flex-grow"
                    />
                    <Button variant="secondary">Reset</Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Set as default</p>
                </div>

                <div className="mb-4 ">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="cta-switch">CTA's</Label>
                    <Switch
                      className="bg-white dark:border-white-800   "
                      id="cta-switch "
                    />
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="flex space-x-2">
                      <Input placeholder="Title" className="w-1/2" />
                      <Input placeholder="Landing URL" className="w-1/2" />
                    </div>
                  </div>
                  <div className="mt-2 flex space-x-2">
                    <Button
                      variant="outline"
                      className="flex-grow bg-green-50 text-green-600 border-green-200"
                    >
                      + Add Another
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-grow bg-red-50 text-red-600 border-red-200"
                    >
                      Delete button
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-4">
                <h2 className="text-lg font-semibold mb-4">Advanced</h2>
                {["Badge", "UTM", "Badge", "Badge", "Badge", "Badge"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b last:border-b-0"
                    >
                      <span>{item}</span>
                      {item === "UTM" ? (
                        <Switch />
                      ) : (
                        <span className="text-gray-400">Badge</span>
                      )}
                    </div>
                  )
                )}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-4">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                    2
                  </span>
                  Filter
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="broadcast" />
                    <label htmlFor="broadcast">
                      Broadcast (All Subscriber)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="particular-segment" />
                    <label htmlFor="particular-segment">
                      Send to Particular Segment
                    </label>
                  </div>
                  <Select>
                    <option>abc.com</option>
                  </Select>
                  {[...Array(5)].map((_, index) => (
                    <Select key={index}>
                      <option>Chrome on windows 11</option>
                    </Select>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-4">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                    3
                  </span>
                  Timing
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="send-immediately" />
                    <label htmlFor="send-immediately">Send Immediately</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="schedule" />
                    <label htmlFor="schedule">Schedule</label>
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      type="date"
                      className="w-1/3"
                      defaultValue="8/23/2023"
                    />
                    <Input
                      type="time"
                      className="w-1/3"
                      defaultValue="7:28 PM"
                    />
                    <Select className="w-1/3">
                      <option>UTC +05:30</option>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="default"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Send
                </Button>
                <Button variant="outline" className="text-red-500">
                  Cancel
                </Button>
              </div>
            </div>

            {/* Right column - Preview */}
            <div>
              <div className="mb-4">
                <Label>Message</Label>
                <div className="flex items-center space-x-2 mt-2">
                  <RadioGroup
                    defaultValue="broadcast"
                    onValueChange={setNotificationType}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="broadcast" id="broadcast" />
                      <Label htmlFor="broadcast">Broadcast</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unicast" id="unicast" />
                      <Label htmlFor="unicast">Unicast</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="multicast" id="multicast" />
                      <Label htmlFor="multicast">Multicast</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="mb-4">
                <Select>
                  <option>Chrome on Windows 11</option>
                </Select>
              </div>

              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg?height=20&width=20"
                      alt="Chrome icon"
                      className="mr-2"
                    />
                    <span>Google Chrome</span>
                  </div>
                  <button className="text-gray-400 hover:text-white">×</button>
                </div>
                <div className="flex items-start space-x-2">
                  <Bell className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">
                      {title || "Notification title here"}
                    </h3>
                    <p className="text-sm">
                      {message || "Notification message here"}
                    </p>
                    <p className="text-xs text-gray-400">example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
