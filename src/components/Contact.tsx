"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactComponent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Failed to send message"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact">
      <motion.section
        className="contact__hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="contact__title" variants={itemVariants}>
          <div className="projects-section__heading-container">
            <h2 className="projects-section__heading">Contact Me</h2>
          </div>
        </motion.h1>

        <motion.div className="contact__container" variants={itemVariants}>
          {!submitted ? (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__group">
                <label className="contact__label">Full Name</label>
                <input
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Lane Richardson"
                  required
                  disabled={loading} // Disable during load
                />
              </div>

              <div className="contact__group">
                <label className="contact__label">Email Address</label>
                <input
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="lane@example.com"
                  required
                  disabled={loading}
                />
              </div>

              <div className="contact__group">
                <label className="contact__label">Message</label>
                <textarea
                  name="message"
                  className="contact__input contact__input--textarea"
                  placeholder="Tell me about your project..."
                  required
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className={`contact__btn ${loading ? "contact__btn--loading" : ""}`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <motion.div
              className="contact__success"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h2>Message Sent!</h2>
              <p>Thanks, Lane. I&apos;ll get back to you soon.</p>
              <br />
              <button
                onClick={() => setSubmitted(false)}
                className="contact__btn contact__btn--alt"
              >
                Send Another
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.section>

      <div className="contact__decoration" aria-hidden="true"></div>
    </main>
  );
}
