import React from 'react';

const AppointmentOptions = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption; 
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center my-10">
                <h2 className=" mx-auto text-2xl card-title text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Please Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;