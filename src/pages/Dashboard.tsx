import React, { useEffect, useState } from "react";
import { Ticket } from "../App";
import { FaTicketAlt, FaClipboardList, FaCheckCircle, FaRegSmileBeam, FaRocket, FaLightbulb, FaHandPeace } from "react-icons/fa";
import brrLogo from '../assets/brr-logo.png'; // BRR Media logo for branding

/**
 * Type for a to-do item.
 */
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

/**
 * Props for the Dashboard component.
 * - tickets: Array of IT tickets for summary stats.
 * - todos: Array of to-dos for summary stats.
 */
type DashboardProps = {
  tickets: Ticket[];
  todos: Todo[];
};

/**
 * Array of rotating motivational/helpful messages for the dashboard footer.
 * Each message includes an icon and text.
 */
const messages = [
  { text: "You're doing great! 🚀", icon: <FaRocket /> },
  { text: "Remember to take breaks and stay hydrated! 💧", icon: <FaRegSmileBeam /> },
  { text: "Tip: Double-check your tickets for updates.", icon: <FaLightbulb /> },
  { text: "Need help? Submit an IT request anytime.", icon: <FaHandPeace /> },
];

/**
 * Dashboard
 * Displays a welcome banner, quick summary cards (open tickets, pending to-dos, latest ticket),
 * and a dynamic, rotating motivational message at the bottom.
 */
const Dashboard: React.FC<DashboardProps> = ({ tickets, todos }) => {
  // Calculate summary stats
  const openTickets = tickets.filter((t) => t.status === "Open").length;
  const pendingTodos = todos.filter((t) => !t.completed).length;
  const latestTicket = tickets[0]; // Assuming newest is first

  // State for rotating dashboard messages
  const [msgIndex, setMsgIndex] = useState(0);

  // Rotate the dashboard message every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Welcome banner with inline logo */}
      <h1 className="dashboard-title dashboard-title-centered">
        Welcome to the{" "}
        <img src={brrLogo} alt="BRR Media Logo" className="dashboard-inline-logo" />
        dashboard!
      </h1>
      {/* Summary cards for quick stats */}
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <FaTicketAlt className="dashboard-icon" />
          <h2>Open IT Tickets</h2>
          <p className="dashboard-number">{openTickets}</p>
        </div>
        <div className="dashboard-card">
          <FaClipboardList className="dashboard-icon" />
          <h2>Pending To-Dos</h2>
          <p className="dashboard-number">{pendingTodos}</p>
        </div>
        <div className="dashboard-card">
          <FaCheckCircle className="dashboard-icon" />
          <h2>Latest Ticket</h2>
          <p>
            {latestTicket
              ? `#${latestTicket.id} - ${latestTicket.status}`
              : "No tickets yet"}
          </p>
        </div>
      </div>
      {/* Rotating motivational/helpful message */}
      <div className="dashboard-welcome">
        <span className="dashboard-welcome-icon">{messages[msgIndex].icon}</span>
        <span>{messages[msgIndex].text}</span>
      </div>
    </div>
  );
};

export default Dashboard;