"use client";
import React, { useState } from 'react';
import { Monitor, Gamepad2, Gamepad, Headset, Search, Clock, Phone, User, CreditCard, Filter } from 'lucide-react';

type Platform = 'PC' | 'PS5' | 'XBOX' | 'VR';
type TimeSlot = { time: string; available: boolean };
type SystemStatus = 'available' | 'occupied' | 'maintenance';

interface System {
  id: string;
  type: Platform;
  name: string;
  icon: JSX.Element;
  price: string;
  status: SystemStatus;
  number: number;
}

function RapidBookings() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState<System | null>(null);
  const [filters, setFilters] = useState({
    type: 'all',
    status: 'all',
    price: 'all'
  });

  const systems: System[] = [
    { id: 'pc1', type: 'PC', name: 'Gaming PC', icon: <Monitor className="w-6 h-6" />, price: '₹60/hr', status: 'available', number: 1 },
    { id: 'pc2', type: 'PC', name: 'Gaming PC', icon: <Monitor className="w-6 h-6" />, price: '₹60/hr', status: 'occupied', number: 2 },
    { id: 'pc3', type: 'PC', name: 'Gaming PC', icon: <Monitor className="w-6 h-6" />, price: '₹60/hr', status: 'available', number: 3 },
    { id: 'ps1', type: 'PS5', name: 'PlayStation 5', icon: <Gamepad2 className="w-6 h-6" />, price: '₹80/hr', status: 'available', number: 1 },
    { id: 'ps2', type: 'PS5', name: 'PlayStation 5', icon: <Gamepad2 className="w-6 h-6" />, price: '₹80/hr', status: 'maintenance', number: 2 },
    { id: 'xbox1', type: 'XBOX', name: 'Xbox Series X', icon: <Gamepad className="w-6 h-6" />, price: '₹80/hr', status: 'available', number: 1 },
    { id: 'xbox2', type: 'XBOX', name: 'Xbox Series X', icon: <Gamepad className="w-6 h-6" />, price: '₹80/hr', status: 'occupied', number: 2 },
    { id: 'vr1', type: 'VR', name: 'VR Station', icon: <Headset className="w-6 h-6" />, price: '₹150/hr', status: 'available', number: 1 },
  ];

  const timeSlots: TimeSlot[] = [
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: false },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: false },
  ];

  const handleBook = (system: System) => {
    setSelectedSystem(system);
    setShowBookingForm(true);
  };

  const filteredSystems = systems.filter(system => {
    if (filters.type !== 'all' && system.type !== filters.type) return false;
    if (filters.status !== 'all' && system.status !== filters.status) return false;
    if (filters.price === 'low' && parseInt(system.price) > 60) return false;
    if (filters.price === 'high' && parseInt(system.price) < 60) return false;
    return true;
  });

  const getStatusColor = (status: SystemStatus) => {
    switch (status) {
      case 'available': return 'text-[#098637]';
      case 'occupied': return 'text-red-500';
      case 'maintenance': return 'text-yellow-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
      <header className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Rapid Booking</h1>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 bg-[#098637] text-white px-4 py-2 rounded-lg hover:bg-[#076d2a] transition-colors"
          >
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </header>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="container mx-auto p-4 bg-[#111111] mt-2 rounded-lg border border-[#222222]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">System Type</label>
              <select 
                className="w-full p-2 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white focus:border-[#098637] focus:ring-1 focus:ring-[#098637]"
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
              >
                <option value="all">All Systems</option>
                <option value="PC">PC</option>
                <option value="PS5">PlayStation 5</option>
                <option value="XBOX">Xbox Series X</option>
                <option value="VR">VR Station</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
              <select 
                className="w-full p-2 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white focus:border-[#098637] focus:ring-1 focus:ring-[#098637]"
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value as SystemStatus})}
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="occupied">Occupied</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
              <select 
                className="w-full p-2 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white focus:border-[#098637] focus:ring-1 focus:ring-[#098637]"
                value={filters.price}
                onChange={(e) => setFilters({...filters, price: e.target.value})}
              >
                <option value="all">All Prices</option>
                <option value="low">Under ₹60/hr</option>
                <option value="high">₹60/hr and above</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {!showBookingForm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSystems.map((system) => (
              <div key={system.id} className="bg-[#111111] border border-[#222222] rounded-lg p-6 hover:border-[#098637] transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-[#098637]">{system.icon}</div>
                  <span className="font-semibold text-[#098637]">{system.price}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{system.name} #{system.number}</h3>
                <p className={`mb-4 ${getStatusColor(system.status)}`}>
                  {system.status.charAt(0).toUpperCase() + system.status.slice(1)}
                </p>
                <button
                  onClick={() => handleBook(system)}
                  disabled={system.status !== 'available'}
                  className={`w-full py-2 rounded-lg transition-colors ${
                    system.status === 'available'
                      ? 'bg-[#098637] text-white hover:bg-[#076d2a]'
                      : 'bg-[#333333] text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {system.status === 'available' ? 'Book Now' : 'Unavailable'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-[#111111] border border-[#222222] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Book {selectedSystem?.name} #{selectedSystem?.number}</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    className="w-full bg-[#1a1a1a] border border-[#333333] pl-10 pr-4 py-2 rounded-lg text-white focus:border-[#098637] focus:ring-1 focus:ring-[#098637]"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                  <input
                    type="tel"
                    className="w-full bg-[#1a1a1a] border border-[#333333] pl-10 pr-4 py-2 rounded-lg text-white focus:border-[#098637] focus:ring-1 focus:ring-[#098637]"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Time Slot</label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      type="button"
                      disabled={!slot.available}
                      className={`p-2 rounded-lg text-center ${
                        slot.available
                          ? 'bg-[#098637] text-white hover:bg-[#076d2a]'
                          : 'bg-[#333333] text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                  <select className="w-full bg-[#1a1a1a] border border-[#333333] pl-10 pr-4 py-2 rounded-lg text-white focus:border-[#098637] focus:ring-1 focus:ring-[#098637]">
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>Digital Wallet</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowBookingForm(false)}
                  className="w-1/2 border border-[#333333] py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#098637] text-white py-2 rounded-lg hover:bg-[#076d2a] transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default RapidBookings;