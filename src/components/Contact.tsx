import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import { MacWindow } from "./MacWindow";
import { Reveal } from "./Reveal";
import { toast } from "sonner";

export const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Simulated send (no backend wired up)
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent — I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 900);
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
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
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
                  href="mailto:hello@alexcarter.dev"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground story-link"
                >
                  <Mail size={14} /> hello@alexcarter.dev
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
