import React, { useState, useEffect } from "react";
import { Ticket } from "../App";
import TicketRow from "../components/TicketRow";

/**
 * Props for the Tickets component.
 * - tickets: Array of IT tickets to display.
 */
type TicketsProps = {
  tickets: Ticket[];
};

/**
 * Tickets
 * Displays a list of submitted IT tickets in a table.
 * Includes filtering by status, sorting by date, loading/empty states, and responsive design.
 */
const Tickets: React.FC<TicketsProps> = ({ tickets }) => {
  // State for filtering, sorting, and loading
  const [filter, setFilter] = useState<"All" | Ticket["status"]>("All");
  const [sortNewest, setSortNewest] = useState(true);
  const [loading, setLoading] = useState(true);

  // Simulate async loading when tickets change
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800); // 0.8s loading
    return () => clearTimeout(timeout);
  }, [tickets]);

  // Filter tickets by status
  const filteredTickets =
    filter === "All"
      ? tickets
      : tickets.filter((t) => t.status === filter);

  // Sort tickets by date (newest or oldest first)
  const sortedTickets = [...filteredTickets].sort((a, b) =>
    sortNewest
      ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  return (
    <div className="tickets-card">
      {/* Page title */}
      <h1 className="tickets-title">My IT Tickets</h1>
      {/* Controls for filtering and sorting */}
      <div className="tickets-controls">
        <label>
          Filter by status:{" "}
          <select value={filter} onChange={(e) => setFilter(e.target.value as "All" | Ticket["status"])}>
            <option value="All">All</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </label>
        <button onClick={() => setSortNewest((s) => !s)}>
          Sort: {sortNewest ? "Newest First" : "Oldest First"}
        </button>
      </div>
      {/* Loading, empty, or table view */}
      {loading ? (
        <div className="tickets-loading">
          <span className="spinner" /> Loading tickets...
        </div>
      ) : sortedTickets.length === 0 ? (
        <div className="tickets-empty">
          <span role="img" aria-label="No tickets" style={{ fontSize: "2rem" }}>📭</span>
          <div>No tickets found. Submit an IT request to get started!</div>
        </div>
      ) : (
        <table className="tickets-table">
          <thead>
            <tr>
              <th>Issue Type</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {sortedTickets.map((ticket) => (
              <TicketRow key={ticket.id} ticket={ticket} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Tickets;