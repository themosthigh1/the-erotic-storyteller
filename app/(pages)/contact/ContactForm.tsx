"use client";

import React, { useState } from "react";
import { TextField, Button, Box, Snackbar, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import toast, { Toaster } from "react-hot-toast";
import CloseIcon from "@mui/icons-material/Close";

interface Contact {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
}

const ContactForm: React.FC = () => {
  const [contact, setContact] = useState<Contact>({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Save the contact data to Sanity
      const result = await client.create({
        _type: "contact", // Specify the Sanity document type
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        message: contact.message,
      });

      toast("Contact info saved successfully!");

      router.push("/");

      // Reset the form after successful submission
    } catch (error) {
      console.error("Error saving contact:", error);
      // Handle the error as needed (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextField
          name="firstName"
          label="First Name"
          value={contact.firstName}
          onChange={handleChange}
          required
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={contact.lastName}
          onChange={handleChange}
          required
        />
        <TextField
          name="email"
          label="Email"
          value={contact.email}
          onChange={handleChange}
          required
        />
        <TextField
          name="message"
          label="Message"
          value={contact.message}
          onChange={handleChange}
          multiline
          rows={6}
          required
        />
        <Box mb={5}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Toaster />
        </Box>
      </Box>
    </form>
  );
};

export default ContactForm;
