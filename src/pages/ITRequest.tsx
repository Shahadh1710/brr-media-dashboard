import React, { useState } from "react";
import { Ticket } from "../App";
import { FaHeadset } from "react-icons/fa";
import FormField from "../components/FormField";

/**
 * Props for the ITRequest component.
 * - addTicket: Function to add a new ticket to the global state.
 */
type ITRequestProps = {
  addTicket: (ticket: Omit<Ticket, "id" | "status" | "createdAt">) => void;
};

/**
 * List of possible issue types for the dropdown.
 */
const issueTypes = [
  "Hardware Problem",
  "Software Issue",
  "Network Trouble",
  "Account Access",
  "Other",
];

/**
 * ITRequest
 * Renders a form for submitting IT support requests.
 * Includes validation, file upload simulation, and async submission.
 */
const ITRequest: React.FC<ITRequestProps> = ({ addTicket }) => {
  // Form state
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  /**
   * Handles form submission with validation and async simulation.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    // Simple validation for required fields
    if (!issueType || !description) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    // Simulate async submission (e.g., API call)
    setTimeout(() => {
      addTicket({
        issueType,
        description,
        fileName: file ? file.name : undefined,
      });
      setSubmitting(false);
      setSuccess("Your IT request has been submitted!");
      setIssueType("");
      setDescription("");
      setFile(null);
    }, 1200);
  };

  return (
    <div>
      <div className="it-request-card">
        {/* Form title with icon */}
        <h1 className="it-request-title">
          <FaHeadset className="it-request-icon" />
          Submit IT Request
        </h1>
        <form className="it-request-form" onSubmit={handleSubmit}>
          {/* Issue Type dropdown */}
          <FormField label="Issue Type" required>
            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              required
            >
              <option value="">Select an issue</option>
              {issueTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </FormField>

          {/* Description textarea */}
          <FormField label="Description" required>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
              placeholder="Describe your issue in detail..."
            />
          </FormField>

          {/* File upload (simulated) */}
          <FormField label="File Upload">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            />
            {file && <span className="file-name">{file.name}</span>}
          </FormField>

          {/* Submit button with loading state */}
          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Request"}
          </button>

          {/* Success and error notifications */}
          {success && <div className="form-success"><span>✔</span> {success}</div>}
          {error && <div className="form-error"><span>!</span> {error}</div>}
        </form>
      </div>
    </div>
  );
};

export default ITRequest;