# BRR Media Internal Dashboard

## Overview

This is a responsive React + TypeScript dashboard for BRR Media, built as a technical assessment.
It features a staff directory, IT request form, ticket tracking, and a to-do list, with a focus on clean UI/UX, modular code, and IT administration awareness.

## Features

### Dashboard
- Welcome banner with logo
- Quick stats: open tickets, pending to-dos, latest ticket
- Rotating motivational/helpful messages

### Staff Directory
- List of staff (cards) with name, role, email, status
- **Bonus:** Last login, Drive storage used, device type
- Loading and empty states

### IT Request
- Form with issue type (dropdown), description, file upload (simulated)
- Async submission with validation and feedback

### Tickets
- List of submitted tickets
- Filter and sort by status/date
- Status badges with color and icon
- Loading and empty states

### To-Do List
- Add, edit, delete, and complete tasks
- Local storage persistence
- Responsive, card-style design

### General
- Modular, reusable components (Card, FormField, TicketRow, TodoItem)
- Responsive and accessible design
- Clean, professional color palette

## Assumptions

- No authentication or user roles (all features are demo-able for assessment)
- Staff data is mock/hardcoded; tickets and to-dos are managed in app state
- Async API calls are simulated with `setTimeout`
- All users can see all features for demonstration purposes

## Future Improvements

- Add authentication and user roles (staff/admin)
- Connect to a real backend/API
- Add more comprehensive unit and integration tests (Only 1 was done to demonstrate the ability)
- Use a component library (e.g., MUI) or Tailwind for even faster styling
- Add user avatars and profile management
- Allow ticket status updates and ticket detail views

## Testing

- Uses [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/).
- Includes a sample test for the Card component.
- With more time, I would add more comprehensive tests for forms, pages, and user interactions.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shahadh1710/brr-media-dashboard.git
   cd brr-media-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and go to:**
   ```
   http://localhost:5173
   ```

**Requirements:**  
- Node.js (v16+ recommended) and npm installed on your machine.

## Thank You

Thank you for taking the time to review my submission!
If you have any questions or would like to discuss my code, design decisions, or approach, I'd be happy to chat further in an interview.