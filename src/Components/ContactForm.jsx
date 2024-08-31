"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Basic validation
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }


    const response = await fetch("/api/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.NEXT_PUBLIC_TWILIO_PHONE_NUMBER, // Replace with your phone number or the number you want to send the message to
        body: `Message from: ${name}\nEmail: ${email}\nMessage: ${message}`,
      }),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="border border-white mt-5">
      <form onSubmit={handleSubmit}>
        <label className="block ml-2 mb-2 text-lg font-medium">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-sm block w-[calc(100%-16px)] p-2.5 mx-2 mb-2"
        />

        <label className="block ml-2 mb-2 text-lg font-medium">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-sm block w-[calc(100%-16px)] p-2.5 mx-2 mb-2"
        />

        <label className="block ml-2 mb-2 text-lg font-medium">
          Message
        </label>
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mx-2 mb-2 h-24 p-2.5 text-sm w-[calc(100%-16px)]"
        />

        <button
          type="submit"
          className="ml-2 px-5 py-3 mt-2 mb-4 border border-white hover:border-black hover:bg-black hover:text-white"
        >
          Submit
        </button>
      </form>
      {status && <p className={`${status == "Message sent successfully!" ? "text-green-600" : "text-red-600" } text-center  text-3xl mt-4`}>{status}</p>}
    </div>
  );
};

export default ContactForm;
