"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, List, Monitor, Gamepad, Tv, Headset, ArrowLeft } from 'lucide-react'
import { AddConsoleForm } from "./add-console-form"
import { ConsoleList } from "./console-list"
import { EditConsoleForm } from "./edit-console-form"
import { motion, AnimatePresence } from "framer-motion"

const actions = [
  {
    type: "add",
    icon: PlusCircle,
    label: "Add New Console",
    description: "Register a new gaming console in the system",
    color: "bg-emerald-100 dark:bg-emerald-950",
    iconColor: "#059669"
  },
  {
    type: "list",
    icon: List,
    label: "List Consoles",
    description: "View and manage existing consoles",
    color: "bg-blue-100 dark:bg-blue-950",
    iconColor: "#2563eb"
  },
]

const consoleTypes = [
  {
    type: "PC",
    icon: Monitor,
    color: "bg-purple-100 dark:bg-purple-950",
    iconColor: "#7c3aed",
    description: "Gaming PCs and Workstations"
  },
  {
    type: "PS5",
    icon: Tv,
    color: "bg-blue-100 dark:bg-blue-950",
    iconColor: "#2563eb",
    description: "PlayStation 5 Gaming Consoles"
  },
  {
    type: "Xbox",
    icon: Gamepad,
    color: "bg-green-100 dark:bg-green-950",
    iconColor: "#059669",
    description: "Xbox Series Gaming Consoles"
  },
  {
    type: "VR",
    icon: Headset,
    color: "bg-orange-100 dark:bg-orange-950",
    iconColor: "#ea580c",
    description: "Virtual Reality Systems"
  },
]

export function ManageGamingConsole() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null)
  const [selectedConsoleType, setSelectedConsoleType] = useState<string | null>(null)
  const [editingConsole, setEditingConsole] = useState<any | null>(null)

  const handleActionClick = (actionType: string) => {
    setSelectedAction(actionType)
    setSelectedConsoleType(null)
  }

  const handleConsoleTypeClick = (consoleType: string) => {
    setSelectedConsoleType(consoleType)
  }

  const handleEditConsole = (console: any) => {
    setEditingConsole(console)
  }

  const handleCloseEdit = () => {
    setEditingConsole(null)
  }

  const handleBack = () => {
    if (selectedConsoleType) {
      setSelectedConsoleType(null)
    } else {
      setSelectedAction(null)
    }
  }

  // const renderHeader = () => {
  //   let title = "Gaming Console Management"
  //   let description = "Select an action to manage gaming consoles"

  //   if (selectedAction === "add") {
  //     title = selectedConsoleType 
  //       ? `Add New ${selectedConsoleType} Console`
  //       : "Select Console Type"
  //     description = selectedConsoleType
  //       ? `Fill in the details for the new ${selectedConsoleType} console`
  //       : "Choose the type of gaming console to add"
  //   } else if (selectedAction === "list") {
  //     title = "Console Inventory"
  //     description = "View and manage all registered gaming consoles"
  //   }

  //   return (
  //     <div className="mb-8">
  //       <div className="flex items-center gap-4 mb-2">
  //         {(selectedAction || editingConsole) && (
  //           <Button
  //             variant="ghost"
  //             size="icon"
  //             onClick={handleBack}
  //             className="h-8 w-8"
  //           >
  //             <ArrowLeft className="h-4 w-4" />
  //           </Button>
  //         )}
  //         <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
  //       </div>
  //       <p className="text-muted-foreground">{description}</p>
  //     </div>
  //   )
  // }

  const renderContent = () => {
    if (selectedAction === "add") {
      if (selectedConsoleType) {
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <AddConsoleForm consoleType={selectedConsoleType} />
          </motion.div>
        )
      }
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consoleTypes.map((console) => (
            <motion.div
              key={console.type}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card 
                className={`cursor-pointer transition-all hover:shadow-lg ${console.color}`}
                onClick={() => handleConsoleTypeClick(console.type)}
              >
                <CardHeader>
                  <console.icon className="w-8 h-8 mb-2" style={{ color: console.iconColor }} />
                  <CardTitle>{console.type}</CardTitle>
                  <CardDescription>{console.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      )
    }
    if (selectedAction === "list") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ConsoleList onEdit={handleEditConsole} />
        </motion.div>
      )
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action) => (
          <motion.div
            key={action.type}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card 
              className={`cursor-pointer transition-all hover:shadow-lg ${action.color} ${
                selectedAction === action.type ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => handleActionClick(action.type)}
            >
              <CardHeader>
                <action.icon className="w-8 h-8 mb-2" style={{ color: action.iconColor }} />
                <CardTitle>{action.label}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* {renderHeader()} */}
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
      {editingConsole && (
        <EditConsoleForm console={editingConsole} onClose={handleCloseEdit} />
      )}
    </div>
  )
}