import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const {name, slots } = treatment;     //treatment for appointment options with different name
    const date = format(selectedDate, "PP");

    const handelBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }
        console.log(booking);
        //for closing modal by sending data to the server showing a toast
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full ">
                            
                            {
                                slots.map((slot, i)=> <option 
                                    value={slot} 
                                    key = {i}
                                    >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" required />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <br />
                        <input name='' className='btn btn-accent w-full max-w-xm' type="submit" value="Submit" />
                    </form>
                </div>
            </div> 
        </>
    );
};

export default BookingModal;