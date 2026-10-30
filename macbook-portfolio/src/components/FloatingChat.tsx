import { useState } from "react";
import { MessageSquare, X, Send, Copy, Check, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const email = "maheethvarma.007@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const mailto = `mailto:${email}?subject=Project Collaboration Inquiry&body=${encodeURIComponent(message)}`;
    window.open(mailto, "_blank");
    setMessage("");
    setIsOpen(false);
    toast.success("Opening your mail client...");
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Quick contact"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none border border-zinc-700/20 dark:border-white/20"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare size={19} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Sleek Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 rounded-2xl bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl p-5 text-zinc-900 dark:text-zinc-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-blue-400/50 bg-blue-500/10 p-0.5">
                  <img src="/download(1).jpeg" alt="Maheeth" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">Maheeth Varma</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Usually replies in &lt; 2 hrs</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick Status Pill */}
            <div className="mt-3.5 p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800/60 flex items-center justify-between">
              <span className="text-xs text-zinc-700 dark:text-zinc-300 font-mono truncate mr-2">
                {email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs text-zinc-900 dark:text-white font-medium border border-zinc-200 dark:border-zinc-700 transition-colors shadow-sm"
              >
                {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Quick Message Form */}
            <form onSubmit={handleSendMessage} className="mt-3 space-y-2.5">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Maheeth, I'd like to talk about..."
                rows={3}
                className="w-full rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 p-2.5 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
              >
                <Send size={13} />
                <span>Send Quick Note</span>
              </button>
            </form>

            {/* Quick Links */}
            <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <a
                href="https://www.linkedin.com/in/maheeth-varma-30a582348/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 dark:hover:text-white flex items-center gap-1 transition-colors"
              >
                LinkedIn <ArrowUpRight size={12} />
              </a>
              <a
                href="https://github.com/maheeth07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 dark:hover:text-white flex items-center gap-1 transition-colors"
              >
                GitHub <ArrowUpRight size={12} />
              </a>
              <a
                href="https://drive.google.com/file/d/1c1P97xKOeWSiVCK1J_RY28o8kS66z8M5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 dark:hover:text-white flex items-center gap-1 transition-colors"
              >
                Resume <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};