"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const bookings = [
  {
    id: "1",
    time: "10:00 AM",
    system: "PC1",
    user: "User 1",
    status: "Not played",
  },
  {
    id: "2",
    time: "11:00 AM",
    system: "PS5-1",
    user: "User 2",
    status: "Playing",
  },
  {
    id: "3",
    time: "12:00 PM",
    system: "Xbox-1",
    user: "User 3",
    status: "Played",
  },
]

export function BookingTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Booking Time</TableHead>
          <TableHead>System Number</TableHead>
          <TableHead>User Details</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Start Timer</TableHead>
          <TableHead>Timer</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell>{booking.time}</TableCell>
            <TableCell>{booking.system}</TableCell>
            <TableCell>{booking.user}</TableCell>
            <TableCell>{booking.status}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                size="sm"
                disabled={booking.status !== "Not played"}
              >
                Start
              </Button>
            </TableCell>
            <TableCell>00:00:00</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

