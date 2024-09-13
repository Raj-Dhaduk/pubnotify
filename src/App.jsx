import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Button } from "./components/ui/Button";
import { ThemeProvider } from "next-themes";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";
import Integration from "./pages/Integration";
import Domain from "./pages/Domain";
import Users from "./pages/Users";
import { Menu } from "lucide-react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {sidebarOpen && <Sidebar />}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/integration" element={<Integration />} />
                <Route path="/domain" element={<Domain />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </main>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="fixed bottom-4 left-4 z-50 bg-white dark:bg-gray-800 rounded-full shadow-lg"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </Router>
    </ThemeProvider>
  );
}
