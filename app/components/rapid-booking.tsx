"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function RapidBooking() {
  const [name, setName] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [consoleType, setConsoleType] = useState("")
  const [paymentType, setPaymentType] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ name, contactNumber, consoleType, paymentType, date, time })
  }

  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Rapid Booking</CardTitle> */}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input id="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="consoleType">Console Type</Label>
              <Select value={consoleType} onValueChange={setConsoleType} required>
                <SelectTrigger id="consoleType">
                  <SelectValue placeholder="Select console type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PC">PC</SelectItem>
                  <SelectItem value="Xbox">Xbox</SelectItem>
                  <SelectItem value="VR">VR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="paymentType">Payment Type</Label>
              <Select value={paymentType} onValueChange={setPaymentType} required>
                <SelectTrigger id="paymentType">
                  <SelectValue placeholder="Select payment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="card">Card</SelectItem>
                  <SelectItem value="online">Online</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
          </div>
          <Button type="submit" className="w-full">Book Now</Button>
        </form>
      </CardContent>
    </Card>
  )
}

