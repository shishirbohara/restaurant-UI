'use client'
import React, { useState } from 'react'
import Image from "next/image"
import { format } from 'date-fns'
import { ReservationForm } from './ReservationForm'
import { ReservationDetails } from './ReservationDetails'
import 'react-day-picker/dist/style.css'

export default function AboutReservation() {
    const [showCalendar, setShowCalendar] = useState(false)
    const [reservationType, setReservationType] = useState('')
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [selectedGuests, setSelectedGuests] = useState<number | null>(null)
    const [selectedTables, setSelectedTables] = useState<number | null>(null)
    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        notes: '',
    })

    const handleNext = () => {
        if (reservationType) {
            setShowCalendar(true)
        } else {
            alert("Please select a reservation type")
        }
    }

    const handleReserve = () => {
        setShowForm(true)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedGuests === null) {
            alert("Please select the number of guests.");
            return;
        }
        if (selectedTables === null) {
            alert("Please select the number of tables.");
            return;
        }
        alert(`Reserved a table at ${selectedDate ? format(selectedDate, 'MMM d, yyyy') : 'No date selected'} at ${selectedTime} for ${selectedGuests} guest${selectedGuests > 1 ? 's' : ''} with ${selectedTables} table${selectedTables > 1 ? 's' : ''}`)
        setShowForm(false)
        setShowCalendar(false)
        setSelectedDate(undefined);
        setSelectedTime(null)
        setSelectedGuests(null)
        setSelectedTables(null);
        setFormData({ name: '', email: '', phone: '', notes: '' })
    }

    return (
        <>
            <div className="flex gap-20 mb-44">
                <div className="px-32 max-w-[800px] text-xl leading-10 mt-20">
                    <p>Our team of seasoned chefs, each a virtuoso in their domain, craft culinary wonders that push</p>
                    <p className="text-[#BCAF87]">the boundaries of creativity.</p>
                    <h1 className="text-base mt-10">Reservation For</h1>
                    <select
                        name="reservation"
                        className="cursor-pointer border text-base border-black px-2 py-4 my-3 no-dropdown outline-none w-full"
                        value={reservationType}
                        onChange={(e) => setReservationType(e.target.value)}
                    >
                        <option value="">Select Reservation Type</option>
                        <option value="Lunch or Dining">Lunch or Dining</option>
                        <option value="Open House">Open House</option>
                        <option value="Business Event">Business Event</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Other">Other</option>
                    </select>
                    <button
                        className="bg-[#BCAF87] w-full text-white text-lg py-4 hover:opacity-85 transition-opacity"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                    {showCalendar && (
                        <ReservationDetails
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            selectedTime={selectedTime}
                            setSelectedTime={setSelectedTime}
                            selectedGuests={selectedGuests}
                            setSelectedGuests={setSelectedGuests}
                            selectedTables={selectedTables}
                            setSelectedTables={setSelectedTables}
                            onReserve={handleReserve}
                        />
                    )}
                    {showForm && (
                        <ReservationForm
                            formData={formData}
                            setFormData={setFormData}
                            onSubmit={handleSubmit}
                        />
                    )}
                </div>
                <div>
                    <Image
                        src="/images/aboutImg.jpg"
                        alt="image"
                        width={2000}
                        height={1000}
                        className="-mt-20 object-cover h-[1377px] w-[800px] mb-28"
                    />
                </div>
            </div>
            <div className="flex justify-start px-20 items-center gap-60 -mt-60">
                <Image
                    src="/images/aboutImg2.jpg"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="my-20 object-cover w-[600px] h-[400px]"
                />
                <div className="text-lg flex flex-col items-center">
                    <h1 className="mb-5 text-xl">Ekantakuna-Lalitpur, Nepal</h1>
                    <p>Monday-Friday: 11am - 9pm</p>
                    <p className="my-1">Happy Hour: 2pm - 9pm</p>
                    <p className="mb-10">Saturday-Sunday: Closed</p>
                    <span className="border-y py-2 border-[#BCAF87] font-serif cursor-pointer text-2xl hover:text-[#BCAF87] transition-span">
                        Reserve a Table
                    </span>
                </div>
            </div>
        </>
    )
}

