export type StaffMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  status: "active" | "inactive";
  lastLogin?: string;
  driveStorageUsed?: string;  
  deviceType?: string;        
};

export const staffList: StaffMember[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    email: "alice.johnson@brrmedia.com",
    status: "active",
    lastLogin: "2024-05-04 09:12",
    driveStorageUsed: "2.1 GB",
    deviceType: "MacBook Pro",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Backend Developer",
    email: "bob.smith@brrmedia.com",
    status: "active",
    lastLogin: "2024-05-03 17:45",
    driveStorageUsed: "1.3 GB",
    deviceType: "Windows Laptop",
  },
  {
    id: 3,
    name: "Carol Lee",
    role: "Designer",
    email: "carol.lee@brrmedia.com",
    status: "inactive",
    lastLogin: "2024-04-28 14:22",
    driveStorageUsed: "3.7 GB",
    deviceType: "iMac",
  },
];