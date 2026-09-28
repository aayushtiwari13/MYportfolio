import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Something else",
];

const initialForm = {
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
};

export default function Contact() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({ type: "", text: "" });
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setStatus({ type: "", text: "" });

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    service: form.service,
                    budget: form.budget || "Not specified",
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus({ type: "success", text: "Message sent successfully ✅" });
            setForm(initialForm);
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus({
                type: "error",
                text: "Something went wrong. Please try again ❌",
            });
        } finally {
            setSending(false);
        }
    };

    const inputClass =
        "w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition";

    return (
        <section
            id="contact"
            className="min-h-screen w-full bg-black relative overflow-hidden flex items-center justify-center py-20"
        >
            <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: illustration */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Image placeholder — yaha astronaut image lagao */}
                    <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border-2 border-dashed border-white/40 flex items-center justify-center text-white/70 text-lg">
                        yaha image lagao
                    </div>
                </motion.div>

                {/* Right: form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg mx-auto md:mx-0 flex flex-col gap-4"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Let&apos;s Work Together
                    </h2>

                    <div>
                        <label className="block text-xs text-gray-300 mb-1">
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-300 mb-1">
                            Your Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-300 mb-1">
                            Service Needed <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            required
                            className={inputClass}
                        >
                            <option value="" className="bg-black">
                                Something in mind?
                            </option>
                            {services.map((s) => (
                                <option key={s} value={s} className="bg-black">
                                    {s}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Budget only appears once a service is picked (like the reference) */}
                    {form.service && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <label className="block text-xs text-gray-300 mb-1">
                                Your Budget <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="budget"
                                value={form.budget}
                                onChange={handleChange}
                                placeholder="Enter your budget"
                                required
                                className={inputClass}
                            />
                        </motion.div>
                    )}

                    <div>
                        <label className="block text-xs text-gray-300 mb-1">
                            Explain Your Idea <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Explain your idea..."
                            rows={4}
                            required
                            className={`${inputClass} resize-none`}
                        />
                    </div>

                    {status.text && (
                        <p
                            className={`text-xs ${
                                status.type === "success"
                                    ? "text-green-400"
                                    : "text-red-400"
                            }`}
                        >
                            {status.text}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={sending}
                        className="w-full rounded-md bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium py-2.5 transition"
                    >
                        {sending ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
