"use client"

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowUpIcon, ArrowDownIcon, SearchIcon, DollarSignIcon, CreditCardIcon, UserIcon, ClockIcon } from "lucide-react";

const transactions = [
  {
    id: "1",
    slotDate: "2023-06-01",
    slotTime: "10:00 AM",
    userName: "John Doe",
    amount: 50,
    modeOfPayment: "Credit Card",
    bookingType: "hash",
    settlementStatus: "done",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },

  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },

  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  {
    id: "2",
    slotDate: "2023-06-02",
    slotTime: "2:00 PM",
    userName: "Jane Smith",
    amount: 75,
    modeOfPayment: "Cash",
    bookingType: "direct",
    settlementStatus: "N/A",
  },
  {
    id: "3",
    slotDate: "2023-06-03",
    slotTime: "11:00 AM",
    userName: "Bob Johnson",
    amount: 60,
    modeOfPayment: "PayPal",
    bookingType: "hash",
    settlementStatus: "pending",
  },
  
]



export function TransactionTable() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const metrics = useMemo(() => {
    const total = transactions.reduce((sum, t) => sum + t.amount, 0);
    const uniqueUsers = new Set(transactions.map(t => t.userName)).size;
    const pendingSettlements = transactions.filter(t => t.settlementStatus === "pending").length;
    const cashTransactions = transactions.filter(t => t.modeOfPayment === "Cash").length;
    
    return {
      total,
      uniqueUsers,
      pendingSettlements,
      cashTransactions
    };
  }, []);

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => 
      t.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.modeOfPayment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.bookingType.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Metrics Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, delay: 0 }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-300/20 dark:from-blue-500/30 dark:via-blue-400/30 dark:to-blue-300/20 border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-500/5">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSignIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900 dark:text-blue-50">${metrics.total}</div>
              <p className="text-xs text-blue-600/80 dark:text-blue-400">+20.1% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/20 via-purple-400/20 to-purple-300/20 dark:from-purple-500/30 dark:via-purple-400/30 dark:to-purple-300/20 border-purple-200 dark:border-purple-800 shadow-lg shadow-purple-500/5">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unique Users</CardTitle>
              <UserIcon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900 dark:text-purple-50">{metrics.uniqueUsers}</div>
              <p className="text-xs text-purple-600/80 dark:text-purple-400">+12 since last week</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-amber-500/20 via-amber-400/20 to-amber-300/20 dark:from-amber-500/30 dark:via-amber-400/30 dark:to-amber-300/20 border-amber-200 dark:border-amber-800 shadow-lg shadow-amber-500/5">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Settlements</CardTitle>
              <ClockIcon className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-900 dark:text-amber-50">{metrics.pendingSettlements}</div>
              <p className="text-xs text-amber-600/80 dark:text-amber-400">Requires attention</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-500/20 via-emerald-400/20 to-emerald-300/20 dark:from-emerald-500/30 dark:via-emerald-400/30 dark:to-emerald-300/20 border-emerald-200 dark:border-emerald-800 shadow-lg shadow-emerald-500/5">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cash Transactions</CardTitle>
              <CreditCardIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-900 dark:text-emerald-50">{metrics.cashTransactions}</div>
              <p className="text-xs text-emerald-600/80 dark:text-emerald-400">
                {((metrics.cashTransactions / transactions.length) * 100).toFixed(1)}% of total
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="flex items-center space-x-2"
      >
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Transaction Table */}
      <motion.div
        variants={tableVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, delay: 0.5 }}
        className="rounded-md border bg-card"
      >
        <div className="max-h-[600px] overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Slot Date</TableHead>
                <TableHead className="font-semibold">Slot Time</TableHead>
                <TableHead className="font-semibold">User Name</TableHead>
                <TableHead className="font-semibold">Amount</TableHead>
                <TableHead className="font-semibold">Mode of Payment</TableHead>
                <TableHead className="font-semibold">Booking Type</TableHead>
                <TableHead className="font-semibold">Settlement Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {filteredTransactions.map((transaction, index) => (
                  <motion.tr
                    key={`${transaction.id}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                  >
                    <TableCell>{transaction.slotDate}</TableCell>
                    <TableCell>{transaction.slotTime}</TableCell>
                    <TableCell className="font-medium">{transaction.userName}</TableCell>
                    <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {transaction.modeOfPayment}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {transaction.bookingType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          transaction.settlementStatus === "done" ? "success" :
                          transaction.settlementStatus === "pending" ? "warning" : "secondary"
                        }
                      >
                        {transaction.settlementStatus}
                      </Badge>
                    </TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </div>
  );
}