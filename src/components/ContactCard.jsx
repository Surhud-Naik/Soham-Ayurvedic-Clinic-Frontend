import React, { useState } from "react";

export default function ContactCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    // You can replace this with an API call
    alert("Appointment request submitted!");
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className=" flex items-center justify-center p-10">
      <div className="bg-emerald-600 p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Book an Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">Time</label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="font-semibold py-2 px-4 border hover:bg-emerald-700 rounded-lg transition"
          >
            Submit Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
