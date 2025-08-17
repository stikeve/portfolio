import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { randomLines, trollingMessages } from "../constants";

const ContactTerminal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [sent, setSent] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [trollMessage, setTrollMessage] = useState("");

  useEffect(() => {
    if (isSending) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < randomLines.length) {
          setTerminalOutput((prev) => [...prev, randomLines[index]]);
          index++;
        } else {
          clearInterval(interval);
          setTerminalOutput((prev) => [
            ...prev,
            "✅ Message sent successfully!",
          ]);
          setSent(true);
          setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setTerminalOutput([]);
            setIsSending(false);
            setSent(false);
          }, 3000);
        }
      }, 400);
    }
  }, [isSending]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSending(true);

    try {
      await emailjs.send(
        "service_6kpayka",
        "template_fnpaboj",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "New Contact Form Submission",
        },
        "G0Y8Hua-25DupYg3v"
      );
    } catch (error) {
      console.error("Error sending email:", error);
      setTerminalOutput((prev) => [
        ...prev,
        "❌ Error sending message. Try again maybe?",
      ]);
      setIsSending(false);
    }
  };

  useEffect(() => {
    let timer;
    if (trollMessage) {
      timer = setTimeout(() => {
        setTrollMessage("");
      }, 6000); // Clear message after 5 seconds
    }
    return () => clearTimeout(timer);
  }, [trollMessage]);

  let closeAttempts = 0;
  const handleTrollClose = () => {
    closeAttempts++;
    let message;
    if (closeAttempts > 10) {
      message =
        "Okay, at this point, you’re just proving my modal works too well.";
    } else {
      message =
        trollingMessages[Math.floor(Math.random() * trollingMessages.length)];
    }
    setTrollMessage(message);
  };

  return (
    <section className="c-space my-20" id="contact">
      <h3 className="head-text">Contact Me</h3>
      <p className="text-lg text-white-600 mt-3">
        Whether you're looking to build a new website, improve your existing
        platform, or bring a unique project to life, I'm here to help.{" "}
      </p>

      <div className="bg-black rounded-lg shadow-lg my-4 text-green-400 font-mono border border-green-700 w-full overflow-hidden">
        {/* Terminal Top Bar */}
        <div className="flex justify-between items-center bg-green-900 text-green-200 px-4 py-2 rounded-t">
          <span className="font-bold">
            Buttons work • Closing not recommended
          </span>
          <div className="flex gap-3 text-green-100 text-lg font-bold">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="hover:text-green-400 transition-colors duration-200"
              title="Minimize"
            >
              –
            </button>
            <button
              onClick={handleTrollClose}
              className="hover:text-red-400 transition-colors duration-200"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Troll Message */}
        {trollMessage && (
          <div className="p-4 pb-1 text-red-400 bg-black border-t border-green-700">
            <span>
              <strong>Root/user</strong>
            </span>{" "}
            {`> ${trollMessage}`}
          </div>
        )}

        {/* Terminal Content */}
        {!isMinimized && (
          <div className="pt-2 pr-6 pl-6 pb-6">
            {!isSending ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-green-700 p-2 mt-1 text-green-300 rounded focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-green-700 p-2 mt-1 text-green-300 rounded focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    autoComplete="off"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-green-700 p-2 mt-1 text-green-300 rounded focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-4 w-full rounded"
                >
                  Send
                </button>
              </form>
            ) : (
              <div className="whitespace-pre-wrap animate-pulse">
                {terminalOutput.map((line, index) => (
                  <div key={index}>{`> ${line}`}</div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactTerminal;
