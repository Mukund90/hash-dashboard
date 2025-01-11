"use client"

import { Badge } from "@/components/ui/badge"

const hours = [10, 11, 12, 1, 2, 3, 4]
const consoles = ["Computer", "PS5", "Xbox", "VR"]

export function ConsoleGrid() {
  return (
    <div className="grid gap-2">
      <div className="grid grid-cols-8 gap-2">
        <div className="font-medium text-xs">Today</div>
        {hours.map((hour) => (
          <div key={hour} className="text-center font-medium text-xs">
            {hour}
          </div>
        ))}
      </div>
      {consoles.map((console) => (
        <div key={console} className="grid grid-cols-8 gap-2">
          <div className="font-medium text-xs">{console}</div>
          {hours.map((hour) => {
            const availability = Math.floor(Math.random() * 100)
            return (
              <Badge
                key={hour}
                variant={availability > 50 ? "secondary" : "outline"}
                className="text-center text-xs"
              >
                {availability}
              </Badge>
            )
          })}
        </div>
      ))}
    </div>
  )
}

