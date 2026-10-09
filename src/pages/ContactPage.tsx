import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/common/SocialIcons';
import { contactConfig, isWhatsAppConfigured, getWhatsAppLink } from '../config/contactConfig';
import { Button } from '../components/common/Button';

export const ContactPage: React.FC = () => {
  const location = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    document.title = 'Contact — NextGen Technologies';
    window.scrollTo(0, 0);

    // Pre-fill subject if passed via query params (e.g. from platform detail page)
    const params = new URLSearchParams(location.search);
    const subjectParam = params.get('subject');
    if (subjectParam) {
      setSubject(subjectParam);
    }
  }, [location.search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch with accessible feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const subjectPresets = [
    'General Inquiry',
    'CodeBridge Project Request',
    'MarketBridge Vendor / Dealer Inquiry',
    'Ecosystem Collaboration',
    'Feedback & Ideas',
  ];

  return (
    <div className="pt-28 pb-24 relative overflow-hidden transition-colors duration-250" id="contact-form">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[350px] bg-cyan-accent/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent text-xs font-semibold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACT & COLLABORATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight leading-tight">
            Let's build what's next.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-silver-300 font-normal leading-relaxed">
            Have an idea, a question, want to collaborate, or simply want to reach out? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Professional Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-900/80 border border-slate-200 dark:border-white/10 shadow-card dark:shadow-none relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-cyan-50 dark:bg-cyan-950 border border-cyan-400 text-cyan-deep dark:text-cyan-accent flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-silver-100">
                  Message Sent
                </h3>
                <p className="text-sm text-slate-700 dark:text-silver-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to NextGen Technologies. We treat every note thoughtfully and will reply to your email shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-cyan-deep dark:text-cyan-accent hover:underline focus:outline-none"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100 mb-1">
                    Send us a direct message
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-silver-400">
                    Fill out the form below and someone from our team will respond directly.
                  </p>
                </div>

                {/* Quick Subject Presets */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-silver-400 mb-2">
                    Inquiry Topic
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {subjectPresets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setSubject(preset)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                          subject === preset
                            ? 'bg-cyan-50 dark:bg-cyan-950 border-cyan-400 text-cyan-deep dark:text-cyan-bright font-medium'
                            : 'bg-slate-100 dark:bg-dark-800 border-slate-200 dark:border-white/5 text-slate-600 dark:text-silver-400 hover:text-slate-900 dark:hover:text-silver-200 hover:border-slate-300 dark:hover:border-white/20'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-silver-300 mb-2"
                  >
                    Your Name <span className="text-cyan-deep dark:text-cyan-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 dark:placeholder-silver-600 focus:outline-none focus:ring-2 focus:ring-cyan-accent focus:border-transparent text-sm transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-silver-300 mb-2"
                  >
                    Your Email Address <span className="text-cyan-deep dark:text-cyan-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 dark:placeholder-silver-600 focus:outline-none focus:ring-2 focus:ring-cyan-accent focus:border-transparent text-sm transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-silver-300 mb-2"
                  >
                    Subject <span className="text-cyan-deep dark:text-cyan-accent">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What would you like to discuss?"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 dark:placeholder-silver-600 focus:outline-none focus:ring-2 focus:ring-cyan-accent focus:border-transparent text-sm transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-silver-300 mb-2"
                  >
                    Message <span className="text-cyan-deep dark:text-cyan-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your thoughts, questions, or ideas..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 dark:placeholder-silver-600 focus:outline-none focus:ring-2 focus:ring-cyan-accent focus:border-transparent text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-accent text-dark-950 font-semibold text-sm shadow-cyan-sm hover:bg-cyan-bright hover:shadow-cyan-md hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Method Placeholders & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600 dark:text-silver-400 uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-deep dark:text-cyan-accent" />
                  <span>Direct Email</span>
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs text-slate-500 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent flex items-center gap-1 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <p className="text-base font-semibold text-slate-900 dark:text-silver-100 font-mono">
                {contactConfig.email}
              </p>

              <p className="text-xs text-slate-600 dark:text-silver-400 leading-relaxed">
                For general inquiries, ecosystem partnerships, or developer correspondence.
              </p>
            </div>

            {/* WhatsApp Integration (Placeholders configured for later) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600 dark:text-silver-400 uppercase tracking-wider flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>WhatsApp Business</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-silver-400 border border-slate-200 dark:border-white/5">
                  To Be Configured
                </span>
              </div>

              <p className="text-sm font-medium text-slate-900 dark:text-silver-200">
                Direct WhatsApp Channel
              </p>

              <p className="text-xs text-slate-600 dark:text-silver-400 leading-relaxed">
                Our direct WhatsApp business line will be activated shortly. In the interim, please use the contact form or email us directly.
              </p>

              {isWhatsAppConfigured() ? (
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline pt-1"
                >
                  <span>Open WhatsApp Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <div className="pt-1 text-[11px] font-mono text-slate-400 dark:text-silver-500">
                  config: contactConfig.whatsappNumber
                </div>
              )}
            </div>

            {/* Professional & Social Channels */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none space-y-4">
              <h4 className="text-xs font-semibold text-slate-900 dark:text-silver-400 uppercase tracking-wider">
                Official Channels & Links
              </h4>
              <p className="text-xs text-slate-600 dark:text-silver-400 leading-relaxed">
                Connect with our work across developer repositories and company announcements:
              </p>

              <div className="space-y-2.5">
                <a
                  href={contactConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-dark-950/60 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 text-slate-700 dark:text-silver-300 hover:text-slate-900 dark:hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2.5 text-xs font-medium">
                    <GithubIcon className="w-4 h-4 text-slate-500 dark:text-silver-400 group-hover:text-cyan-deep dark:group-hover:text-cyan-accent" />
                    <span>GitHub Organization</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-silver-600 group-hover:text-cyan-deep dark:group-hover:text-cyan-accent" />
                </a>

                <a
                  href={contactConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-dark-950/60 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 text-slate-700 dark:text-silver-300 hover:text-slate-900 dark:hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2.5 text-xs font-medium">
                    <LinkedinIcon className="w-4 h-4 text-slate-500 dark:text-silver-400 group-hover:text-cyan-deep dark:group-hover:text-cyan-accent" />
                    <span>LinkedIn Company Page</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-silver-600 group-hover:text-cyan-deep dark:group-hover:text-cyan-accent" />
                </a>

                <a
                  href={contactConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-dark-950/60 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 text-slate-700 dark:text-silver-300 hover:text-slate-900 dark:hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2.5 text-xs font-medium">
                    <InstagramIcon className="w-4 h-4 text-slate-500 dark:text-silver-400 group-hover:text-cyan-deep dark:group-hover:text-cyan-accent" />
                    <span>Instagram Updates</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-silver-600 group-hover:text-cyan-deep dark:group-hover:text-cyan-accent" />
                </a>
              </div>
            </div>

            {/* Human Transparency Note */}
            <div className="p-5 rounded-2xl bg-cyan-50/70 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-500/20 text-xs text-slate-700 dark:text-silver-400 space-y-1">
              <span className="font-semibold text-cyan-900 dark:text-cyan-300 block">Human Communication:</span>
              <p>
                Every message is read by someone who directly writes code and designs platforms at NextGen Technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
