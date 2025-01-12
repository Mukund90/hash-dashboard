import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HardwareChart } from "./hardware-chart";
import { Overview } from "./overview";
import { SettlementChart } from "./settlement-chart";
import { ConsoleGrid } from "./console-grid";
import { BookingTable } from "./booking-table";
import { Review } from "./review";
import { BookingChart } from "./booking-chart";
import { StarRating } from "./star-rating";
import { RapidBooking } from "./rapid-booking";

export function DashboardContent() {
  const totalRating = 4.5;
  const totalReviews = 1234;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
      {/* Left Section */}
      <div className="col-span-4 space-y-4">
        {/* Available Gaming Hardware */}
        <Card className="h-[250px]">
          <CardHeader>
            <CardTitle>Available Gaming Hardware</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <HardwareChart />
          </CardContent>
        </Card>

        <div className="h-[250px]">
          <BookingChart />
        </div>

        {/* Review Section */}
        <div className="grid grid-cols-2 gap-4 pt-10"> {/* Added padding-top */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalRating.toFixed(1)}</div>
              <p className="text-xs text-muted-foreground">
                Based on {totalReviews} reviews
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Star Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <StarRating rating={totalRating} />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-8 space-y-4">
        <RapidBooking />

        {/* Settlement Chart and Booking Chart Section */}
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 h-[250px]">
            <SettlementChart />
          </div>
          <div className="col-span-2">
            <ConsoleGrid />
          </div>

          {/* <Card className="col-span-2 h-[300px]">
            <CardHeader>
              <CardTitle>Manage Gaming Console</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ConsoleGrid />
            </CardContent>
          </Card> */}
        </div>
      </div>

      {/* Current Booking Section */}
      <Card className="col-span-12">
        <CardHeader>
          <CardTitle>Current Booking</CardTitle>
        </CardHeader>
        <CardContent>
          <BookingTable />
        </CardContent>
      </Card>
    </div>
  );
}
