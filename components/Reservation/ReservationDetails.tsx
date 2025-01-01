import React from 'react';
import Select from 'react-select';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { timeOptions, isWeekday, tableOptions, guestsOptions } from '@/utils/reservationData';

interface ReservationDetailsProps {
    selectedDate: Date | undefined;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    selectedTime: string | null;
    setSelectedTime: React.Dispatch<React.SetStateAction<string | null>>;
    selectedGuests: number | null;
    setSelectedGuests: React.Dispatch<React.SetStateAction<number | null>>;
    selectedTables: number | null;
    setSelectedTables: React.Dispatch<React.SetStateAction<number | null>>;
    onReserve: () => void;
}

export const ReservationDetails: React.FC<ReservationDetailsProps> = ({
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    selectedGuests,
    setSelectedGuests,
    selectedTables,
    setSelectedTables,
    onReserve,
}) => {
    const now = new Date();

    const getFilteredTimeOptions = () => {
        if (!selectedDate) return timeOptions;

        const isToday = format(selectedDate, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd');
        return timeOptions.filter((option) => {
            if (!isToday) return true;
            const [hours, minutes] = option.value.split(':').map(Number);
            const timeDate = new Date(selectedDate);
            timeDate.setHours(hours, minutes, 0, 0);
            return timeDate > now;
        });
    };

    const formatReservationSummary = () => {
        if (!selectedDate || !selectedTime || selectedGuests === null || selectedTables === null) {
            return '';
        }
        return `${format(selectedDate, 'MMM d, yyyy')} at ${selectedTime} for ${selectedGuests} guest${selectedGuests > 1 ? 's' : ''} with ${selectedTables} table${selectedTables > 1 ? 's' : ''}`;
    };

    return (
        <div className="mt-10">
            <div className="flex gap-10">
                <div>
                    <h2 className="text-lg mb-2">Select a Date</h2>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={[{ before: new Date() }, (date) => !isWeekday(date)]}
                        classNames={{
                            selected: `text-[#BCAF87] border border-[#BCAF87]`

                        }}
                    />
                </div>
                <div className="flex flex-col gap-5">
                    {selectedDate && (
                        <>
                            <div>
                                <h2 className="text-lg mb-2">Select a Time</h2>
                                <Select
                                    options={getFilteredTimeOptions()}
                                    value={timeOptions.find((option) => option.value === selectedTime)}
                                    onChange={(option) => setSelectedTime(option?.value || null)}
                                    placeholder="Select Time"
                                    className="text-base"

                                />
                            </div>
                        </>
                    )}

                    {selectedDate && selectedTime && (
                        <>
                            <div>
                                <h2 className="text-lg mb-2">Select Number of Guests</h2>
                                <Select
                                    options={guestsOptions}
                                    value={guestsOptions.find((option) => option.value === selectedGuests)}
                                    onChange={(option) => setSelectedGuests(option?.value || null)}
                                    placeholder="Select Guests"
                                    className="text-base"
                                />
                            </div>

                            {selectedGuests && (
                                <div>
                                    <h2 className="text-lg mb-2">Select Number of Tables</h2>
                                    <Select
                                        options={tableOptions}
                                        value={tableOptions.find((option) => option.value === selectedTables)}
                                        onChange={(option) => setSelectedTables(option?.value || null)}
                                        placeholder="Select Tables"
                                        className="text-base"
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            {selectedTables && (
                <div className="flex justify-between text-base mt-5">
                    <div>
                        <p className="text-sm">{formatReservationSummary()}</p>
                        <p className="text-sm font-bold leading-8">Click reserve now and fill up the form below!</p>
                    </div>
                    <button
                        onClick={onReserve}
                        className="bg-[#BCAF87] text-lg text-white py-3 px-[44px] rounded-md hover:opacity-90 transition-opacity"
                    >
                        Reserve Now
                    </button>
                </div>
            )}
        </div>
    );
};
