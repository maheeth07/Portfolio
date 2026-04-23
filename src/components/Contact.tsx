import { FormEvent, useRef, useState } from "react";
import { Mail, Send } from "lucide-react";
import { MacWindow } from "./MacWindow";
import { Reveal } from "./Reveal";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

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

      toast.success("Message sent! I'll get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="mono text-xs uppercase tracking-widest text-primary mb-3">05 — Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get in touch</h2>
            <p className="text-muted-foreground mt-3">
              Have a project in mind or just want to say hi? Drop a message.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <MacWindow title="mail.app — new message" bodyClassName="p-6 md:p-8">
            <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Name" name="user_name" placeholder="Your name" required />
                <Field label="Email" name="user_email" type="email" placeholder="you@example.com" required />
              </div>
              <Field label="Subject" name="subject" placeholder="What's this about?" required />
              <div>
                <label className="mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a bit about it..."
                  className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <a
                  href="mailto:maheethvarma007@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground story-link"
                >
                  <Mail size={14} /> maheethvarma007@gmail.com
                </a>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary-glow hover:scale-[1.02] active:scale-[0.98] transition-all shadow-glow disabled:opacity-60"
                >
                  {sending ? "Sending..." : (<>Send <Send size={14} /></>)}
                </button>
              </div>
            </form>
          </MacWindow>
        </Reveal>
      </div>
    </section>
  );
};

const Field = ({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-1.5">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
    />
  </div>
);
