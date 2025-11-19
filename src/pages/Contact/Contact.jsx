// Contact.jsx (Your provided code, slightly adjusted)
import React from "react";
import Card from "./Card";
import Form from "./Form";
import { Phone, Mail, MapPin } from "lucide-react"; // Import some useful icons

function Contact() {
  const contactMethods = [
    {
      name: "Phone",
      id: "9910883799",
      img: <Phone size={48} />,
      description: "Call me during business hours.",
    },
    {
      name: "Email",
      id: "aritrisaha29@gmail.com",
      img: <Mail size={48} />,
      description: "Send a message anytime.",
    },
    {
      name: "Location",
      id: "Bengaluru, India",
      img: <MapPin size={48} />,
      description: "Based in the Silicon Valley of India.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-10 lg:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Let's Work Together
      </h2>
      <p className="text-gray-600 text-xl text-center mt-[20px] mb-[50px]">
        Have a project in mind? Let's create something amazing together
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {contactMethods.map((method, index) => (
          <Card key={index} name={method.name} id={method.id} img={method.img}>
            <p className="text-sm text-gray-500 mt-2">{method.description}</p>
          </Card>
        ))}
      </div>
      <div className="justify-center align-center mt-[30px]">
        <Form></Form>
      </div>
    </div>
  );
}

export default Contact;
