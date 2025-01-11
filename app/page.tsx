import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardContent } from "./components/dashboard-content"
import { DashboardLayout } from "./components/dashboard-layout"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Tabs defaultValue="gaming-cafe" className="space-y-4">
          <TabsList>
            <TabsTrigger value="gaming-cafe">Gaming Cafe Management</TabsTrigger>
            <TabsTrigger value="product">Product Management</TabsTrigger>
          </TabsList>
          <TabsContent value="gaming-cafe" className="space-y-4">
            <DashboardContent />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

