"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Gamepad2, Laptop, Tv, Headphones } from 'lucide-react'

const consoles = [
  { type: "PC", icon: Laptop },
  { type: "Xbox", icon: Gamepad2 },
  { type: "VR", icon: Headphones },
  { type: "PS5", icon: Tv },
]

export function ManageGamingConsole() {
  const [selectedConsole, setSelectedConsole] = useState<string | null>(null)

  const handleConsoleClick = (consoleType: string) => {
    setSelectedConsole(consoleType)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {consoles.map((console) => (
          <Card 
            key={console.type} 
            className={`cursor-pointer transition-all ${selectedConsole === console.type ? 'ring-2 ring-primary' : ''}`}
            onClick={() => handleConsoleClick(console.type)}
          >
            <CardContent className="flex flex-col items-center justify-center p-6">
              <console.icon className="w-12 h-12 mb-2" style={{ color: '#97ff05' }}/>
              <h3 className="text-lg font-semibold">{console.type}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedConsole && (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{ color: '#3498db' }}>Console Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="consoleNumber">Console Number</Label>
                <Select>
                  <SelectTrigger id="consoleNumber">
                    <SelectValue placeholder="Select console number" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Console 1</SelectItem>
                    <SelectItem value="2">Console 2</SelectItem>
                    <SelectItem value="3">Console 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="modelNumber">Model Number</Label>
                <Input id="modelNumber" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serialNumber">Serial Number</Label>
                <Input id="serialNumber" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consoleType">Console Type</Label>
                <Input id="consoleType" value={selectedConsole} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="releaseDate">Release Date</Label>
                <Input id="releaseDate" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{ color: '#3498db' }}>Hardware Specification</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="processorType">Processor Type</Label>
                <Input id="processorType" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graphicsCard">Graphics Card</Label>
                <Input id="graphicsCard" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ramSize">RAM Size</Label>
                <Input id="ramSize" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storageCapacity">Storage Capacity</Label>
                <Input id="storageCapacity" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="connectivity">Connectivity</Label>
                <Input id="connectivity" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{ color: '#3498db' }}>Availability and Status</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="availableStatus">Available Status</Label>
                <Select>
                  <SelectTrigger id="availableStatus">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="inUse">In Use</SelectItem>
                    <SelectItem value="maintenance">Under Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="condition">Condition</Label>
                <Select>
                  <SelectTrigger id="condition">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{ color: '#3498db' }}>Maintenance</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="lastMaintenance">Last Maintenance</Label>
                <Input id="lastMaintenance" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nextMaintenance">Next Scheduled Maintenance</Label>
                <Input id="nextMaintenance" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maintenanceNotes">Maintenance Notes</Label>
              <Textarea id="maintenanceNotes" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{ color: '#3498db' }}>Price & Cost</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rentalPrice">Rental Price</Label>
                <Input id="rentalPrice" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="warrantyPeriod">Warranty Period</Label>
                <Input id="warrantyPeriod" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="insuranceStatus">Insurance Status</Label>
                <Select>
                  <SelectTrigger id="insuranceStatus">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="insured">Insured</SelectItem>
                    <SelectItem value="notInsured">Not Insured</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{ color: '#3498db' }}>Additional Details</h3>
            <div className="space-y-2">
              <Label htmlFor="supportedGames">List of Supported Games</Label>
              <Textarea id="supportedGames" placeholder="Enter games, separated by commas" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accessories">Accessories Details</Label>
              <Textarea id="accessories" placeholder="Enter accessories details" />
            </div>
          </div>

          <div className="flex space-x-4">
            <Button type="submit">Save Information</Button>
            <Button type="button" variant="outline">Submit</Button>
          </div>
        </form>
      )}
    </div>
  )
}

