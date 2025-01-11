import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HardwareChart } from "./hardware-chart"
import { Overview } from "./overview"
import { SettlementChart } from "./settlement-chart"
import { ConsoleGrid } from "./console-grid"
import { BookingTable } from "./booking-table"
import { Review } from "./review"
import { BookingChart } from "./booking-chart"

export function DashboardContent() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Available Gaming Hardware</CardTitle>
        </CardHeader>
        <CardContent>
          <HardwareChart />
        </CardContent>
      </Card>
      <div className="col-span-8 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Transaction Report</CardTitle>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>
        <div className="grid grid-cols-4 gap-4">
          <SettlementChart />
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Bookings per Day</CardTitle>
            </CardHeader>
            <CardContent>
              <BookingChart />
            </CardContent>
          </Card>
        </div>
      </div>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Manage Gaming Console</CardTitle>
        </CardHeader>
        <CardContent>
          <ConsoleGrid />
        </CardContent>
      </Card>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <Review />
        </CardContent>
      </Card>
      <Card className="col-span-12">
        <CardHeader>
          <CardTitle>Current Booking</CardTitle>
        </CardHeader>
        <CardContent>
          <BookingTable />
        </CardContent>
      </Card>
    </div>
  )
}

