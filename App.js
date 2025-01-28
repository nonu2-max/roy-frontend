import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-800 text-white flex flex-col items-center py-4">
          <h1 className="text-2xl font-bold mb-6">ROY</h1>
          <nav className="flex flex-col w-full px-4">
            <Link className="py-2 px-4 hover:bg-gray-600 rounded" to="/dashboard">
              Dashboard
            </Link>
            <Link className="py-2 px-4 hover:bg-gray-600 rounded" to="/materials">
              Materials
            </Link>
            <Link className="py-2 px-4 hover:bg-gray-600 rounded" to="/social">
              Social
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 bg-gray-100 p-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <p>Welcome to your student dashboard. Here you can track your progress.</p>
    </div>
  );
}

function Materials() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Materials</h2>
      <p>Here you can find educational materials and assignments.</p>
    </div>
  );
}

function Social() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Social</h2>
      <p>Connect with other students and mentors here.</p>
    </div>
  );
}

export default App;
