import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {toast} from 'react-toastify'

const BookingModal = ({ date, treatment, setTreatment,refetch }) => {
  const { _id,name, slots,price } = treatment;
  const [user, loading, error] = useAuthState(auth);
   const formattedDate = format(date, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    //console.log(slot);
 

   

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone:e.target.phone.value
    };

    fetch("https://shielded-depths-78424.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),

    })
      .then((res) => res.json())
      .then((data) => { 
        if (data.success) {
          toast (`Appointment booked for ${formattedDate} at ${slot}`)
        }
        else {
  toast.error(
    `Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`
  );        }

          refetch();
        setTreatment(null);

      })



       
  };

  return (
    <div className="">
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">Booking For: {name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-4"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name"
              disabled
              value={user?.displayName || ""}
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="Email"
              disabled value={user?.email || ''}
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;