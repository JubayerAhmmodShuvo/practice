import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {toast} from 'react-toastify'

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id,name, slots } = treatment;
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
      patient: user.email,
      patientName: user.displayName,
      phone:e.target.phone.value
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),

    })
      .then((res) => res.json())
      .then((data) => { 

        setTreatment(null);

      })



       
  };

  return (
    <div className="">
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Booking For: {name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-4"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
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
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="Email"
              disabled value={user?.email || ''}
              name="email"
              placeholder="Email Address"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;