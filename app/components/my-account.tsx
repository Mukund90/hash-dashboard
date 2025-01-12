"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, MapPin, Calendar, Clock, Mail, Phone, Lock, CreditCard, FileCheck } from 'lucide-react'

export function MyAccount() {
  const [cafeImages, setCafeImages] = useState<string[]>([
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCafeImages([...cafeImages, reader.result as string])
      }
      reader.readAsDataURL(file)
    }
  }

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold" style={{ color: '#3498db' }}>Cafe Images</h2>
        <div className="flex flex-wrap gap-4">
          {cafeImages.map((image, index) => (
            <img key={index} src={image} alt={`Cafe ${index + 1}`} className="w-24 h-24 object-cover rounded-md" />
          ))}
          <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer">
            <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
            <span className="text-4xl">+</span>
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold" style={{ color: '#3498db' }}>Cafe Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="ownerName">
              <User className="w-4 h-4 inline-block mr-2" />
              Owner Name
            </Label>
            <Input id="ownerName" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">
              <MapPin className="w-4 h-4 inline-block mr-2" />
              Address
            </Label>
            <Textarea id="address" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>
            <Calendar className="w-4 h-4 inline-block mr-2" />
            Opening Days
          </Label>
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <label key={day} className="flex items-center space-x-2">
                <Checkbox id={`day-${day}`} />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="openingTime">
              <Clock className="w-4 h-4 inline-block mr-2" />
              Opening Time
            </Label>
            <Input id="openingTime" type="time" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="closingTime">
              <Clock className="w-4 h-4 inline-block mr-2" />
              Closing Time
            </Label>
            <Input id="closingTime" type="time" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold" style={{ color: '#3498db' }}>Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="username">
              <User className="w-4 h-4 inline-block mr-2" />
              Username
            </Label>
            <Input id="username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fullName">
              <User className="w-4 h-4 inline-block mr-2" />
              Full Name
            </Label>
            <Input id="fullName" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">
              <Mail className="w-4 h-4 inline-block mr-2" />
              Email Address
            </Label>
            <Input id="email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">
              <Phone className="w-4 h-4 inline-block mr-2" />
              Phone Number
            </Label>
            <Input id="phone" type="tel" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="profilePicture">Profile Picture</Label>
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Input id="profilePicture" type="file" accept="image/*" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold" style={{ color: '#3498db' }}>Account Settings</h2>
        <div className="space-y-2">
          <Button variant="outline">
            <Lock className="w-4 h-4 mr-2" />
            Change Password
          </Button>
        </div>
        <div className="space-y-2">
          <Label htmlFor="emailPreference">Email Preference</Label>
          <Select>
            <SelectTrigger id="emailPreference">
              <SelectValue placeholder="Select email preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Receive all emails</SelectItem>
              <SelectItem value="important">Important notifications only</SelectItem>
              <SelectItem value="none">Do not send emails</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold" style={{ color: '#3498db' }}>Subscription Details</h2>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Current Plan: Premium</h3>
                <p className="text-sm text-gray-500">Billed annually</p>
              </div>
              <Button variant="outline">Upgrade Plan</Button>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-2">
          <Label htmlFor="billingYear">Request Billing Report</Label>
          <div className="flex space-x-2">
            <Select>
              <SelectTrigger id="billingYear">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="billingQuarter">
                <SelectValue placeholder="Select quarter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Q1">Q1</SelectItem>
                <SelectItem value="Q2">Q2</SelectItem>
                <SelectItem value="Q3">Q3</SelectItem>
                <SelectItem value="Q4">Q4</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <CreditCard className="w-4 h-4 mr-2" />
              Request Report
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold" style={{ color: '#3498db' }}>Verified Documents</h2>
        <div className="space-y-2">
          {[
            { name: "Business License", verified: true },
            { name: "Tax ID", verified: true },
            { name: "Insurance Certificate", verified: false },
          ].map((doc) => (
            <div key={doc.name} className="flex items-center space-x-2">
              <FileCheck className={`w-5 h-5 ${doc.verified ? 'text-green-500' : 'text-red-500'}`} />
              <span>{doc.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-4">
        <Button type="submit">Save Changes</Button>
        <Button type="button" variant="outline">Submit for Review</Button>
      </div>
    </form>
  )
}

