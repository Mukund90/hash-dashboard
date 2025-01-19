"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CalendarPlus, Edit, XCircle, Search, NotepadText  } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



const actions = [
  { type: "create", icon: CalendarPlus, label: "Create New Booking" },
  { type: "change", icon: Edit, label: "Change Booking" },
  { type: "reject", icon: XCircle, label: "Reject Booking" },
  { type: "list", icon:NotepadText , label: "List Booking" },
]

export function ManageBooking() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const handleActionClick = (actionType: string) => {
    setSelectedAction(actionType)
  }

  const renderForm = () => {
    switch (selectedAction) {
      case "create":
        return <CreateBookingForm />
      case "change":
        return <ChangeBookingForm />
      case "reject":
        return <RejectBookingForm />
      case "list":
        return <ListBooking />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Card 
            key={action.type} 
            className={`cursor-pointer transition-all ${selectedAction === action.type ? 'ring-2 ring-primary' : ''}`}
            onClick={() => handleActionClick(action.type)}
          >
            <CardContent className="flex flex-col items-center justify-center p-6">
              <action.icon className="w-12 h-12 mb-2" style={{ color: '#97ff05' }}/>
              <h3 className="text-lg font-semibold">{action.label}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {renderForm()}
    </div>
  )
}

function CreateBookingForm() {
  const [selectedSlots, setSelectedSlots] = useState<string[]>([])

  const handleSlotClick = (slot: string) => {
    setSelectedSlots(prev => 
      prev.includes(slot) ? prev.filter(s => s !== slot) : [...prev, slot]
    )
  }

  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Gamer's Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter phone number" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Booking Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bookingDate">Booking Date</Label>
            <Input id="bookingDate" type="date" />
          </div>
          <div className="space-y-2">
            <Label>Slot Time</Label>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                <Button
                  key={hour}
                  variant="outline"
                  className={`rounded-full ${selectedSlots.includes(hour.toString()) ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={() => handleSlotClick(hour.toString())}
                >
                  {hour}:00
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Gaming Console Selection</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="consoleType">Choose Console</Label>
            <Select>
              <SelectTrigger id="consoleType">
                <SelectValue placeholder="Select console type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PC">PC</SelectItem>
                <SelectItem value="PS5">PS5</SelectItem>
                <SelectItem value="Xbox">Xbox</SelectItem>
                <SelectItem value="VR">VR</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="systemNumber">System Number</Label>
            <Select>
              <SelectTrigger id="systemNumber">
                <SelectValue placeholder="Select system number" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">System 1</SelectItem>
                <SelectItem value="2">System 2</SelectItem>
                <SelectItem value="3">System 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Payment Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="totalAmount">Total Amount</Label>
            <Input id="totalAmount" type="number" value={selectedSlots.length * 100} readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="paymentMethod">Payment Method</Label>
            <Select>
              <SelectTrigger id="paymentMethod">
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="card">Card</SelectItem>
                <SelectItem value="online">Online</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Payment Status</Label>
          <RadioGroup defaultValue="unpaid">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paid" id="paid" />
              <Label htmlFor="paid">Paid</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unpaid" id="unpaid" />
              <Label htmlFor="unpaid">Unpaid</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Additional Request</h3>
        <Textarea placeholder="Enter any special requests" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" defaultChecked />
          <Label htmlFor="terms">I agree to the terms and conditions</Label>
        </div>
      </div>

      <Button type="submit">Submit Booking</Button>
    </form>
  )
}

function ChangeBookingForm() {
  const [bookingId, setBookingId] = useState("")

  const handleSearch = () => {
    // Implement the search functionality here
    console.log("Searching for booking ID:", bookingId)
    // You would typically fetch the booking data here and update the form
  }

  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Search Booking</h3>
        <div className="flex space-x-2">
          <div className="flex-grow">
            <Input
              id="bookingId"
              placeholder="Enter Booking ID"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
            />
          </div>
          <Button type="button" onClick={handleSearch}>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Gamer's Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="1234567890" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Booking Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bookingDate">Booking Date</Label>
            <Input id="bookingDate" type="date" defaultValue="2023-06-15" />
          </div>
          <div className="space-y-2">
            <Label>Slot Time</Label>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                <Button
                  key={hour}
                  variant="outline"
                  className={`rounded-full ${hour === 14 ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  {hour}:00
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Other sections similar to CreateBookingForm, but with pre-filled and disabled fields */}

      <Button type="submit">Update Booking</Button>
    </form>
  )
}

function RejectBookingForm() {
  const [bookingId, setBookingId] = useState("")

  const handleSearch = () => {
    // Implement the search functionality here
    console.log("Searching for booking ID:", bookingId)
    // You would typically fetch the booking data here and update the form
  }

  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Search Booking</h3>
        <div className="flex space-x-2">
          <div className="flex-grow">
            <Input
              id="bookingId"
              placeholder="Enter Booking ID"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
            />
          </div>
          <Button type="button" onClick={handleSearch}>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Gamer's Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="1234567890" disabled />
          </div>
        </div>
      </div>

      {/* Other sections similar to CreateBookingForm, but with all fields disabled */}

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Rejection Details</h3>
        <div className="space-y-2">
          <Label htmlFor="rejectionReason">Reason for Rejection</Label>
          <Textarea id="rejectionReason" placeholder="Enter reason for rejection" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="repaymentType">Repayment Type</Label>
          <Select>
            <SelectTrigger id="repaymentType">
              <SelectValue placeholder="Select repayment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="refund">Refund</SelectItem>
              <SelectItem value="credit">Store Credit</SelectItem>
              <SelectItem value="reschedule">Reschedule</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="submit" variant="destructive">Reject Booking</Button>
    </form>


  )
}

function ListBooking() {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookings, setBookings] = useState([
    { id: "1", time: "10:00 AM", system: "PC1", user: "User 1", status: "Not played" },
    { id: "2", time: "11:00 AM", system: "PS5-2", user: "User 2", status: "In progress", startTime: Date.now() - 1800000 },
    { id: "3", time: "12:00 PM", system: "Xbox-1", user: "User 3", status: "Completed" },
    { id: "4", time: "01:00 PM", system: "PC2", user: "User 4", status: "Not played" },
    { id: "5", time: "02:00 PM", system: "PS5-1", user: "User 5", status: "In progress", startTime: Date.now() - 3600000 },
    { id: "6", time: "03:00 PM", system: "Xbox-2", user: "User 6", status: "Completed" },
    { id: "7", time: "04:00 PM", system: "PC3", user: "User 7", status: "Not played" },
    { id: "8", time: "05:00 PM", system: "PS5-3", user: "User 8", status: "In progress", startTime: Date.now() - 5400000 },
    { id: "9", time: "06:00 PM", system: "Xbox-3", user: "User 9", status: "Completed" },
    { id: "10", time: "07:00 PM", system: "PC4", user: "User 10", status: "Not played" }
  ]);
  const [filteredBookings, setFilteredBookings] = useState(bookings);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredBookings(bookings);
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      const results = bookings.filter((booking) =>
        booking.id.toLowerCase().includes(lowerQuery) ||
        booking.time.toLowerCase().includes(lowerQuery) ||
        booking.system.toLowerCase().includes(lowerQuery) ||
        booking.user.toLowerCase().includes(lowerQuery) ||
        booking.status.toLowerCase().includes(lowerQuery)
      );
      setFilteredBookings(results);
    }
  };

  const startTimer = (id: string) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id
          ? { ...booking, status: "In progress", startTime: Date.now() }
          : booking
      )
    );
    setFilteredBookings((prevFiltered) =>
      prevFiltered.map((booking) =>
        booking.id === id
          ? { ...booking, status: "In progress", startTime: Date.now() }
          : booking
      )
    );
  };

  const formatTimer = (startTime: number) => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Search Booking</h3>
        <div className="flex space-x-2">
          <div className="flex-grow">
            <Input
              id="searchQuery"
              placeholder="Search by any field"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="button" onClick={handleSearch}>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">List of Bookings</h3>
        <Table className="rounded-lg overflow-hidden shadow-lg">
          <TableHeader style={{ backgroundColor: "#28282A" }}>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Booking Time</TableHead>
              <TableHead>System Number</TableHead>
              <TableHead>User Details</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Start Timer</TableHead>
              <TableHead>Timer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.time}</TableCell>
                <TableCell>{booking.system}</TableCell>
                <TableCell>{booking.user}</TableCell>
                <TableCell>{booking.status}</TableCell>
                <TableCell>
                  {booking.status === "Not played" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => startTimer(booking.id)}
                    >
                      Start
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {booking.status === "In progress" && booking.startTime && (
                    <span>{formatTimer(booking.startTime)}</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </form>
  );
}

