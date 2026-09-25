"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import FormField from "./ui/FormField";
import { motion } from "framer-motion";

const AdmissionForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    referral: "",
    grade: "",
    city: "",
    query: "",
  });

  // State to track form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // After form submission, set submission status to true
    setIsSubmitted(true);

    // Optionally clear form after submission
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      referral: "",
      grade: "",
      city: "",
      query: "",
    });
  };

  return (
    <section className="maxWSec px-6 sm:px-12 py-12 flex gap-12 flex-col">
      <h2 className="h2 text-center">
        Admission <span className="text-main">Form</span>
      </h2>

      {/* Admission form */}
      <form
        onSubmit={handleSubmit}
        className="relative text-dark grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
      >
        {/* Success message */}
        {isSubmitted && (
          <motion.div
            className="absolute z-10 inset-[-1px] bg-light p-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-green-100 text-center text-green-800 p-4 rounded-md">
              Your admission request has been submitted successfully. Our team
              will contact you soon.
            </div>
          </motion.div>
        )}

        {/* Full Name */}
        <FormField
          label={"Full Name"}
          name={"fullName"}
          placeholder={"e.g Abdullah Malik"}
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        {/* Mobile Number */}
        <FormField
          label={"Mobile Number"}
          name={"mobile"}
          placeholder={"e.g +1234567890"}
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <FormField
          label={"Email"}
          name={"email"}
          placeholder={"e.g abdullahmalik@example.com"}
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Where did you find us? (select) */}
        <FormField
          label={"Where did you find us?"}
          name={"referral"}
          select
          placeholder={"Select an option"}
          options={[
            { label: "Google", value: "google" },
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "Friend", value: "friend" },
          ]}
          value={formData.referral}
          onChange={handleChange}
        />

        {/* Grade (select) */}
        <FormField
          label={"Grade"}
          name={"grade"}
          select
          placeholder={"Select a grade"}
          options={[
            { label: "Play Group", value: "play-group" },
            { label: "Nursery", value: "nursery" },
            { label: "KG", value: "kg" },
            { label: "Grade 1", value: "grade-1" },
            { label: "Grade 2", value: "grade-2" },
            { label: "Grade 3", value: "grade-3" },
            { label: "Grade 4", value: "grade-4" },
            { label: "Grade 5", value: "grade-5" },
          ]}
          value={formData.grade}
          onChange={handleChange}
        />

        {/* City (select) */}
        <FormField
          label={"City"}
          name={"city"}
          select
          placeholder={"Select a city"}
          options={[
            { label: "Pakpattan", value: "pakpattan" },
            { label: "Arifwala", value: "arifwala" },
            { label: "Sahiwal", value: "sahiwal" },
            { label: "Other", value: "other" },
          ]}
          value={formData.city}
          onChange={handleChange}
        />

        {/* Your query (textarea) */}
        <div className="col-span-full">
          <FormField
            label={"Your Query"}
            name={"query"}
            placeholder={"Write your message here..."}
            textarea
            value={formData.query}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-full text-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </section>
  );
};

export default AdmissionForm;
