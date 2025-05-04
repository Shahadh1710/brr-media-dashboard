import React from "react";
import { Ticket } from "../App";
import { FaCircle } from "react-icons/fa";

/**
 * Maps ticket status to a color for visual cues.
 */
const statusColors: Record<Ticket["status"], string> = {
  Open: "#b71c1c",          // Red for open tickets
  "In Progress": "#d4af37", // Gold for in-progress tickets
  Resolved: "#388e3c",      // Green for resolved tickets
};

/**
 * Props for the TicketRow component.
 * - ticket: The ticket object to display in the row.
 */
type TicketRowProps = {
  ticket: Ticket;
};

/**
 * TicketRow
 * Renders a single row in the tickets table, showing issue type, status (with color and icon),
 * created date, and file name (if any).
 */
const TicketRow: React.FC<TicketRowProps> = ({ ticket }) => (
  <tr>
    <td>{ticket.issueType}</td>
    <td>
      <span
        style={{
          color: "#fff",
          background: statusColors[ticket.status],
          padding: "0.3em 0.8em",
          borderRadius: "1em",
          fontWeight: "bold",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5em",
        }}
      >
        <FaCircle style={{ fontSize: "0.7em" }} />
        {ticket.status}
      </span>
    </td>
    <td>{new Date(ticket.createdAt).toLocaleString()}</td>
    <td>{ticket.fileName || "—"}</td>
  </tr>
);

export default TicketRow;