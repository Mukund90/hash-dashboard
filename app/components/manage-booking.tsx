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
import { CalendarPlus, Edit, XCircle, Search } from 'lucide-react'

const actions = [
  { type: "create", icon: CalendarPlus, label: "Create New Booking" },
  { type: "change", icon: Edit, label: "Change Booking" },
  { type: "reject", icon: XCircle, label: "Reject Booking" },
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
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

