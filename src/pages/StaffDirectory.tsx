import React, { useEffect, useState } from "react";
import { staffList, StaffMember } from "../data/staff";
import Card from "../components/Card";

/**
 * StaffDirectory
 * Displays a list of staff members in card format.
 * Simulates async data fetching and shows loading/empty states.
 * Bonus: Shows Google Workspace-like info (last login, drive storage, device type).
 */
const StaffDirectory: React.FC = () => {
  // State for staff data and loading status
  const [staff, setStaff] = useState<StaffMember[] | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate async fetch of staff data
  useEffect(() => {
    setTimeout(() => {
      setStaff(staffList);
      setLoading(false);
    }, 1200); // Simulate API delay
  }, []);

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="staff-loading">
        <span className="spinner" /> Loading staff...
      </div>
    );
  }

  // Show message if no staff found
  if (!staff || staff.length === 0) {
    return <div>No staff found.</div>;
  }

  return (
    <div className="staff-directory-container">
      {/* Page title */}
      <h1 className="staff-directory-title">Staff Directory</h1>
      {/* Staff cards */}
      <div className="staff-directory-cards">
        {staff.map((member) => (
          <Card key={member.id} className="staff-card">
            {/* Staff member details */}
            <h2 style={{ margin: 0 }}>{member.name}</h2>
            <p><strong>Role:</strong> {member.role}</p>
            <p><strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a></p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={member.status === "active" ? "status-active" : "status-inactive"}>
                {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
              </span>
            </p>
            {/* Bonus fields */}
            <p><strong>Last Login:</strong> {member.lastLogin || "—"}</p>
            <p><strong>Drive Storage Used:</strong> {member.driveStorageUsed || "—"}</p>
            <p><strong>Device Type:</strong> {member.deviceType || "—"}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StaffDirectory;