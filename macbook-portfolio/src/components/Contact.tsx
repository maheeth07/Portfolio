import { FormEvent, useRef, useState } from "react";
import { Mail, Send, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "maheethvarma.007@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_id_placeholder",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_id_placeholder",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key_placeholder"
      );

      toast.success("Message sent! I'll get back to you shortly.");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.info("Opening mail client fallback...");
      const formData = new FormData(formRef.current);
      const name = formData.get("user_name");
      const message = formData.get("message");
      window.open(
        `mailto:${email}?subject=Message from ${name}&body=${encodeURIComponent(String(message || ""))}`,
        "_blank"
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-left"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-blue-500 dark:text-blue-400 font-semibold mb-2 block">
            05 / Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white mb-2">
            Let's Build Something Meaningful
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
            Whether you have an ambitious product idea, freelance requirements, or an engineering role, I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        {/* Contact Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 shadow-xl relative"
        >
          {/* Quick Copy Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800/80 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-600 dark:text-blue-300 flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-500 dark:text-zinc-400 block">Direct Inquiries</span>
                <span className="text-sm font-medium text-zinc-900 dark:text-white">{email}</span>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-xs text-zinc-900 dark:text-white font-medium border border-zinc-200 dark:border-zinc-700 transition-colors shadow-sm"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span>{copied ? "Copied to Clipboard" : "Copy Email"}</span>
            </button>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-600 dark:text-zinc-400 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-600 dark:text-zinc-400 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-600 dark:text-zinc-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What would you like to discuss?"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-600 dark:text-zinc-400 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell me a bit about your project or inquiry..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md disabled:opacity-50"
            >
              <Send size={15} />
              <span>{sending ? "Sending Message..." : "Send Message"}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};