// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Edit, Trash2, Monitor, Gamepad, Tv, Headset, Cpu, Building2, CpuIcon as Gpu, MemoryStickIcon as Memory, HardDrive, Activity } from 'lucide-react'

// const consoles = [
//   { 
//     id: 1, 
//     type: "PC", 
//     name: "Gaming PC 2023", 
//     number: "PC-001", 
//     icon: Monitor,
//     brand: "Custom Build",
//     processor: "Intel i9-11900K",
//     gpu: "NVIDIA RTX 3080",
//     ram: "32GB DDR4",
//     storage: "1TB NVMe SSD",
//     status: "Available"
//   },
//   { 
//     id: 2, 
//     type: "PS5", 
//     name: "PlayStation 5", 
//     number: "PS5-001", 
//     icon: Tv,
//     brand: "Sony",
//     processor: "AMD Zen 2",
//     gpu: "AMD RDNA 2",
//     ram: "16GB GDDR6",
//     storage: "825GB SSD",
//     status: "In Use"
//   },
//   { 
//     id: 3, 
//     type: "Xbox", 
//     name: "Xbox Series X", 
//     number: "XBX-001", 
//     icon: Gamepad,
//     brand: "Microsoft",
//     processor: "AMD Zen 2",
//     gpu: "AMD RDNA 2",
//     ram: "16GB GDDR6",
//     storage: "1TB NVMe SSD",
//     status: "Available"
//   },
//   { 
//     id: 4, 
//     type: "VR", 
//     name: "Oculus Quest 2", 
//     number: "VR-001", 
//     icon: Headset,
//     brand: "Meta",
//     processor: "Qualcomm Snapdragon XR2",
//     gpu: "Adreno 650",
//     ram: "6GB",
//     storage: "256GB",
//     status: "Under Maintenance"
//   },
//   { 
//     id: 5, 
//     type: "PC", 
//     name: "Streaming PC", 
//     number: "PC-002", 
//     icon: Cpu,
//     brand: "Custom Build",
//     processor: "AMD Ryzen 9 5950X",
//     gpu: "NVIDIA RTX 3090",
//     ram: "64GB DDR4",
//     storage: "2TB NVMe SSD",
//     status: "Available"
//   },
//   { 
//     id: 6, 
//     type: "Xbox", 
//     name: "Xbox Series X", 
//     number: "XBX-001", 
//     icon: Gamepad,
//     brand: "Microsoft",
//     processor: "AMD Zen 2",
//     gpu: "AMD RDNA 2",
//     ram: "16GB GDDR6",
//     storage: "1TB NVMe SSD",
//     status: "Available"
//   },
//   { 
//     id: 7, 
//     type: "VR", 
//     name: "Oculus Quest 2", 
//     number: "VR-001", 
//     icon: Headset,
//     brand: "Meta",
//     processor: "Qualcomm Snapdragon XR2",
//     gpu: "Adreno 650",
//     ram: "6GB",
//     storage: "256GB",
//     status: "Under Maintenance"
//   },
//   { 
//     id: 8, 
//     type: "PC", 
//     name: "Streaming PC", 
//     number: "PC-002", 
//     icon: Cpu,
//     brand: "Custom Build",
//     processor: "AMD Ryzen 9 5950X",
//     gpu: "NVIDIA RTX 3090",
//     ram: "64GB DDR4",
//     storage: "2TB NVMe SSD",
//     status: "Available"
//   },
// ]

// interface ConsoleListProps {
//   onEdit: (console: any) => void
// }

// export function ConsoleList({ onEdit }: ConsoleListProps) {
//   const handleDelete = (id: number) => {
//     // Implement delete functionality
//     console.log(`Delete console with id: ${id}`)
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
//       {consoles.map((console) => (
//         <Card key={console.id} className="flex flex-col">
//           <CardContent className="flex flex-col h-full p-3">
//             <div className="flex items-center space-x-3 mb-2">
//               <div className="bg-primary/10 p-1.5 rounded-full">
//                 <console.icon className="w-6 h-5 text-primary" style={{ color: '#098637' }}/>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold">{console.name}</h3>
//                 <p className="text-xs text-gray-500">{console.number}</p>
//               </div>
//             </div>
//             <div className="flex-grow space-y-1 text-xs">
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center">
//                   <Building2 className="w-3 h-3 mr-1" />
//                   Brand
//                 </span>
//                 <span>{console.brand}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center">
//                   <Cpu className="w-3 h-3 mr-1" />
//                   CPU
//                 </span>
//                 <span>{console.processor}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center">
//                   <Gpu className="w-3 h-3 mr-1" />
//                   GPU
//                 </span>
//                 <span>{console.gpu}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center">
//                   <Memory className="w-3 h-3 mr-1" />
//                   RAM
//                 </span>
//                 <span>{console.ram}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center">
//                   <HardDrive className="w-3 h-3 mr-1" />
//                   Storage
//                 </span>
//                 <span>{console.storage}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center">
//                   <Activity className="w-3 h-3 mr-1" />
//                   Status
//                 </span>
//                 <span className={`${
//                   console.status === 'Available' ? 'text-green-500' :
//                   console.status === 'In Use' ? 'text-blue-500' :
//                   'text-red-500'
//                 }`}>
//                   {console.status}
//                 </span>
//               </div>
//             </div>
//             <div className="flex justify-end space-x-2 mt-2">
//               <Button variant="outline" size="sm" onClick={() => onEdit(console)}>
//                 <Edit className="w-3 h-3 mr-1" />
//                 Edit
//               </Button>
//               <Button variant="destructive" size="sm" onClick={() => handleDelete(console.id)}>
//                 <Trash2 className="w-3 h-3 mr-1" />
//                 Delete
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   )
// }

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Monitor, Gamepad, Tv, Headset, Cpu, Building2, CpuIcon as Gpu, MemoryStickIcon as Memory, HardDrive, Activity } from 'lucide-react'
import { motion } from "framer-motion"

const consoles = [
  { 
    id: 1, 
    type: "PC", 
    name: "Gaming PC 2023", 
    number: "PC-001", 
    icon: Monitor,
    brand: "Custom Build",
    processor: "Intel i9-11900K",
    gpu: "NVIDIA RTX 3080",
    ram: "32GB DDR4",
    storage: "1TB NVMe SSD",
    status: "Available"
  },
  { 
    id: 2, 
    type: "PS5", 
    name: "PlayStation 5", 
    number: "PS5-001", 
    icon: Tv,
    brand: "Sony",
    processor: "AMD Zen 2",
    gpu: "AMD RDNA 2",
    ram: "16GB GDDR6",
    storage: "825GB SSD",
    status: "In Use"
  },
  { 
    id: 3, 
    type: "Xbox", 
    name: "Xbox Series X", 
    number: "XBX-001", 
    icon: Gamepad,
    brand: "Microsoft",
    processor: "AMD Zen 2",
    gpu: "AMD RDNA 2",
    ram: "16GB GDDR6",
    storage: "1TB NVMe SSD",
    status: "Available"
  },
  { 
    id: 4, 
    type: "VR", 
    name: "Oculus Quest 2", 
    number: "VR-001", 
    icon: Headset,
    brand: "Meta",
    processor: "Qualcomm Snapdragon XR2",
    gpu: "Adreno 650",
    ram: "6GB",
    storage: "256GB",
    status: "Under Maintenance"
  },
  { 
    id: 5, 
    type: "PC", 
    name: "Streaming PC", 
    number: "PC-002", 
    icon: Cpu,
    brand: "Custom Build",
    processor: "AMD Ryzen 9 5950X",
    gpu: "NVIDIA RTX 3090",
    ram: "64GB DDR4",
    storage: "2TB NVMe SSD",
    status: "Available"
  },
  { 
    id: 6, 
    type: "Xbox", 
    name: "Xbox Series X", 
    number: "XBX-001", 
    icon: Gamepad,
    brand: "Microsoft",
    processor: "AMD Zen 2",
    gpu: "AMD RDNA 2",
    ram: "16GB GDDR6",
    storage: "1TB NVMe SSD",
    status: "Available"
  },
  { 
    id: 7, 
    type: "VR", 
    name: "Oculus Quest 2", 
    number: "VR-001", 
    icon: Headset,
    brand: "Meta",
    processor: "Qualcomm Snapdragon XR2",
    gpu: "Adreno 650",
    ram: "6GB",
    storage: "256GB",
    status: "Under Maintenance"
  },
  { 
    id: 8, 
    type: "PC", 
    name: "Streaming PC", 
    number: "PC-002", 
    icon: Cpu,
    brand: "Custom Build",
    processor: "AMD Ryzen 9 5950X",
    gpu: "NVIDIA RTX 3090",
    ram: "64GB DDR4",
    storage: "2TB NVMe SSD",
    status: "Available"
  },
]

interface ConsoleListProps {
  onEdit: (console: any) => void
}

export function ConsoleList({ onEdit }: ConsoleListProps) {
  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log(`Delete console with id: ${id}`)
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Available':
        return 'success'
      case 'In Use':
        return 'info'
      default:
        return 'warning'
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {consoles.map((console) => (
        <motion.div key={console.id} variants={item}>
          <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="flex flex-col h-full p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-2.5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <console.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-tight">{console.name}</h3>
                  <p className="text-sm text-muted-foreground">{console.number}</p>
                </div>
              </div>

              <div className="flex-grow space-y-2.5 text-sm">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Brand</span>
                  </div>
                  <span className="font-medium truncate">{console.brand}</span>

                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">CPU</span>
                  </div>
                  <span className="font-medium truncate">{console.processor}</span>

                  <div className="flex items-center space-x-2">
                    <Gpu className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">GPU</span>
                  </div>
                  <span className="font-medium truncate">{console.gpu}</span>

                  <div className="flex items-center space-x-2">
                    <Memory className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">RAM</span>
                  </div>
                  <span className="font-medium">{console.ram}</span>

                  <div className="flex items-center space-x-2">
                    <HardDrive className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Storage</span>
                  </div>
                  <span className="font-medium">{console.storage}</span>
                </div>

                <div className="pt-2 flex items-center justify-between border-t">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Status</span>
                  </div>
                  <Badge variant={getStatusVariant(console.status)}>
                    {console.status}
                  </Badge>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onEdit(console)}
                  className="hover:bg-primary/10"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => handleDelete(console.id)}
                  className="hover:bg-destructive/90"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
