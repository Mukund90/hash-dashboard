"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { day: "Mon", bookings: 24 },
  { day: "Tue", bookings: 32 },
  { day: "Wed", bookings: 28 },
  { day: "Thu", bookings: 36 },
  { day: "Fri", bookings: 45 },
  { day: "Sat", bookings: 52 },
  { day: "Sun", bookings: 48 },
]

export function BookingChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bookings per Day</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

