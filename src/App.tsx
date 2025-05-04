import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import StaffDirectory from './pages/StaffDirectory';
import ITRequest from './pages/ITRequest';
import Tickets from './pages/Tickets';
import TodoList from './pages/TodoList';
import './App.css';
import brrLogo from './assets/brr-logo.png'; // BRR Media logo for sidebar branding

// --------------------
// Type Definitions
// --------------------

/**
 * TicketStatus
 * Enum for ticket status values.
 */
export type TicketStatus = "Open" | "In Progress" | "Resolved";

/**
 * Ticket
 * Type for an IT support ticket.
 */
export type Ticket = {
  id: number;
  issueType: string;
  description: string;
  status: TicketStatus;
  createdAt: string;
  fileName?: string;
};

/**
 * Todo
 * Type for a to-do list item.
 */
export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// --------------------
// App Component
// --------------------

/**
 * App
 * Root component for the BRR Media dashboard.
 * Manages global state for tickets and todos, and sets up routing and sidebar navigation.
 */
function App() {
  // State for tickets and todos (staff is mock data elsewhere)
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  /**
   * Adds a new ticket to the tickets state.
   * Called by the ITRequest form on successful submission.
   */
  const addTicket = (ticket: Omit<Ticket, "id" | "status" | "createdAt">) => {
    setTickets((prev) => [
      {
        id: Date.now(),
        status: "Open",
        createdAt: new Date().toISOString(),
        ...ticket,
      },
      ...prev,
    ]);
  };

  return (
    <Router>
      <div className="app-layout">
        {/* Sidebar with logo and navigation */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <img src={brrLogo} alt="BRR Media Logo" className="brr-logo-img" />
          </div>
          <nav className="sidebar-nav">
            <Link to="/">Dashboard</Link>
            <Link to="/staff">Staff Directory</Link>
            <Link to="/it-request">IT Request</Link>
            <Link to="/tickets">Tickets</Link>
            <Link to="/todo">To-Do List</Link>
          </nav>
        </aside>
        {/* Main content area with routed pages */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard tickets={tickets} todos={todos} />} />
            <Route path="/staff" element={<StaffDirectory />} />
            <Route path="/it-request" element={<ITRequest addTicket={addTicket} />} />
            <Route path="/tickets" element={<Tickets tickets={tickets} />} />
            <Route path="/todo" element={<TodoList todos={todos} setTodos={setTodos} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 