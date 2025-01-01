import React from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    notes: string;
}

interface ReservationFormProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    onSubmit: (e: React.FormEvent) => void;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({ formData, setFormData, onSubmit }) => {
    return (
        <div className="bg-white shadow-lg my-10">
            <h2 className="text-2xl py-1 px-10">Enter Your Details</h2>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 px-10 py-5 text-base">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border outline-none p-2 rounded-md"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border outline-none p-2 rounded-md"
                />
                <input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border outline-none p-2 rounded-md"
                />
                <textarea
                    placeholder="Additional Notes (Optional)"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="border p-2 outline-none rounded-md"
                />
                <button
                    type="submit"
                    className="bg-[#BCAF87] text-white py-3 rounded-md hover:opacity-90 transition-opacity"
                >
                    Submit Reservation
                </button>
            </form>
        </div>
    );
};

