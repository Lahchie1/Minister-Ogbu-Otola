'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHero from '@/components/PageHero';
import {
  Church,
  BookOpen,
  Send,
  CheckCircle,
  ShieldCheck,
  Calendar,
  Truck,
  Users,
  HelpCircle,
  Loader2,
  Clock,
  Globe,
  Mail,
} from 'lucide-react';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialReason = searchParams.get('reason') || '';
  const initialBook = searchParams.get('book') || '';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState(initialReason);
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialReason) setReason(initialReason);
    if (initialBook) {
      setSelectedBooks([initialBook]);
    }
  }, [initialReason, initialBook]);

  const toggleBook = (val: string) => {
    setSelectedBooks((prev) =>
      prev.includes(val) ? prev.filter((b) => b !== val) : [...prev, val]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim().length < 20) {
      setErrorMsg('Please write at least 20 characters in your message.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          reason,
          books: selectedBooks,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error('Server submission error');
      }

      setSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } catch {
      setSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full pb-20">
      {/* 1. Page Hero */}
      <PageHero
        title="Pastoral Inquiries & Correspondence"
        highlightedWord="Inquiries & Correspondence"
        subtitle="Direct theological correspondence with Minister Ogbu Joshua Otola regarding biblical questions, published treatise copies, gospel meetings, or congregational seminars."
        backgroundImage="/images/hero-contact-bg.jpg"
        subjectType="scenic"
      />

      {/* Main Two-Column Layout */}
      <div className="max-w-6xl mx-auto px-6 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Context, Mandate & Logistics (5 cols) */}
        <aside className="lg:col-span-5 flex flex-col gap-6">
          {/* Scripture Anchor */}
          <div className="bg-[#F0EDE6] border-l-4 border-[#B8891A] p-6 rounded-r-xl shadow-sm">
            <p className="font-serif text-lg text-[#1A365D] italic leading-relaxed">
              &ldquo;Let your speech always be with grace, seasoned with salt, that you may know how you ought to answer each one.&rdquo;
            </p>
            <p className="font-sans text-xs font-bold text-[#8B6512] mt-3 uppercase tracking-wider">
              — Colossians 4:6
            </p>
          </div>

          {/* Ministry Base Location Details */}
          <div className="bg-white border border-[#E2DDD4] p-6 sm:p-7 rounded-xl shadow-sm space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#1A365D] text-white flex items-center justify-center">
                <Church className="w-4 h-4 text-[#B8891A]" />
              </div>
              <h2 className="font-serif text-xl font-bold text-[#1A365D]">Ministry Base</h2>
            </div>
            <div className="space-y-1 font-sans text-sm text-[#1A202C]">
              <p className="font-bold text-[#1A365D]">Church of Christ, Lawanson</p>
              <p className="text-[#4A5568]">Surulere, Lagos State</p>
              <p className="text-[#4A5568]">Federal Republic of Nigeria</p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2DDD4] flex items-center gap-2 text-xs text-[#4A5568]">
              <Clock className="w-4 h-4 text-[#B8891A] shrink-0" />
              <span>Sunday: 9:00 AM • Midweek Bible Class: Wed 6:00 PM</span>
            </div>
          </div>

          {/* Scope of Engagement List */}
          <div className="bg-white border border-[#E2DDD4] p-6 sm:p-7 rounded-xl shadow-sm space-y-4">
            <h2 className="font-serif text-lg font-bold text-[#1A365D] pb-2 border-b border-[#E2DDD4]">
              Purpose of Contact
            </h2>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-[#B8891A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A365D]">Book Orders &amp; Dispatches</p>
                  <p className="text-[#4A5568] text-xs">Direct copies and interstate courier dispatch across Nigeria.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Truck className="w-4 h-4 text-[#B8891A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A365D]">Congregational Bulk Orders</p>
                  <p className="text-[#4A5568] text-xs">Discounted study volume sets for local church classes and youth retreats.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-4 h-4 text-[#B8891A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A365D]">Gospel Meetings &amp; Speaking</p>
                  <p className="text-[#4A5568] text-xs">Invitations for thematic exposition of New Testament doctrine.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-[#B8891A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A365D]">Biblical Research &amp; Counsel</p>
                  <p className="text-[#4A5568] text-xs">Scriptural questions submitted with chapter/verse references for review.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Response Expectation Notice */}
          <div className="bg-[#F8F6F1] border border-[#E2DDD4] p-5 rounded-lg text-xs text-[#4A5568] leading-relaxed">
            <span className="font-semibold text-[#1A365D] block mb-1 uppercase tracking-wide">
              Response Timetable
            </span>
            As the minister prioritizes prayer, biblical study, and local congregational oversight, please allow 2–3 business days for correspondence.
          </div>
        </aside>

        {/* Right Column: Interactive Inquiry Form (7 cols) */}
        <section className="lg:col-span-7 bg-white border border-[#E2DDD4] p-7 sm:p-10 rounded-xl shadow-sm">
          <div className="mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A365D]">
              Send an Official Inquiry
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#4A5568] mt-1.5 leading-relaxed">
              Please complete the form below. Clear details allow us to respond with relevant biblical resources or logistics information.
            </p>
          </div>

          {/* Submission Success Banner */}
          {submitted && (
            <div className="mb-6 p-5 bg-emerald-50 border border-emerald-200 text-[#2F855A] rounded-lg shadow-sm flex items-start gap-3 animate-in fade-in">
              <CheckCircle className="w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-sm font-bold">Inquiry Submitted Successfully</p>
                <p className="font-sans text-xs mt-1 text-emerald-800 leading-relaxed">
                  Thank you, Brother/Sister <strong className="text-emerald-950">{fullName}</strong>. Your message has reached the minister&apos;s desk. You will receive an acknowledgment at <strong className="text-emerald-950">{email}</strong> within 2–3 business days.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="mt-3 px-3.5 py-1.5 bg-[#2F855A] text-white text-xs font-semibold rounded hover:bg-emerald-800 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          )}

          {!submitted && (
            <form onSubmit={handleSubmit} className="space-y-5 font-sans">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-[#C53030] text-xs rounded border border-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#1A365D] flex items-center justify-between" htmlFor="full-name">
                  <span>Full Name <span className="text-[#C53030]">*</span></span>
                  <span className="text-[11px] font-normal text-[#4A5568]">e.g. Brother Emmanuel Eze</span>
                </label>
                <input
                  id="full-name"
                  type="text"
                  required
                  placeholder="Enter your complete name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#F8F6F1] border border-[#E2DDD4] text-sm text-[#1A365D] rounded px-4 py-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8891A] transition-all"
                />
              </div>

              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1A365D]" htmlFor="email">
                    Email Address <span className="text-[#C53030]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F8F6F1] border border-[#E2DDD4] text-sm text-[#1A365D] rounded px-4 py-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8891A] transition-all"
                  />
                  <span className="text-[11px] text-[#4A5568]">Direct replies sent here</span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1A365D] flex items-center justify-between" htmlFor="phone">
                    <span>Phone / WhatsApp</span>
                    <span className="text-[11px] font-normal text-[#8B6512]">Recommended</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F8F6F1] border border-[#E2DDD4] text-sm text-[#1A365D] rounded px-4 py-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8891A] transition-all"
                  />
                  <span className="text-[11px] text-[#4A5568]">Valuable for dispatch &amp; delivery</span>
                </div>
              </div>

              {/* Reason for Inquiry */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#1A365D]" htmlFor="reason">
                  Reason for Inquiry <span className="text-[#C53030]">*</span>
                </label>
                <select
                  id="reason"
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full bg-[#F8F6F1] border border-[#E2DDD4] text-sm text-[#1A365D] rounded px-4 py-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8891A] transition-all cursor-pointer"
                >
                  <option value="" disabled>Select the nature of your message</option>
                  <option value="book-purchase">Book Purchase / Retail Order</option>
                  <option value="bulk-order">Congregational Bulk Order (Churches in Nigeria)</option>
                  <option value="speaking">Gospel Meeting / Preaching Invitation</option>
                  <option value="scriptural">Scriptural / Doctrinal Question</option>
                  <option value="general">General Inquiries</option>
                </select>
              </div>

              {/* Conditional Book Checkboxes */}
              {(reason === 'book-purchase' || reason === 'bulk-order') && (
                <div className="bg-[#F8F6F1] border border-[#E2DDD4] p-4 rounded-lg space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1A365D]">Select Titles of Interest:</span>
                    <span className="text-[#8B6512] font-semibold">Multiple titles allowed</span>
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    {[
                      {
                        id: 'the-bible-and-alcohol',
                        title: 'THE BIBLE AND ALCOHOL: Truth Beyond Tradition',
                        vol: 'Published Treatise • 256 Pages (eBook / Local Dispatch)',
                      },
                    ].map((bk) => (
                      <label
                        key={bk.id}
                        className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-colors ${
                          selectedBooks.includes(bk.id)
                            ? 'bg-white border-[#B8891A] shadow-sm'
                            : 'bg-white border-[#E2DDD4] hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedBooks.includes(bk.id)}
                          onChange={() => toggleBook(bk.id)}
                          className="mt-0.5 rounded text-[#B8891A] focus:ring-[#B8891A]"
                        />
                        <div>
                          <p className="font-bold text-[#1A365D]">{bk.title}</p>
                          <p className="text-[11px] text-[#4A5568] mt-0.5">{bk.vol}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Conditional Speaking Notes */}
              {reason === 'speaking' && (
                <div className="bg-[#F0EDE6] border border-[#E2DDD4] p-3.5 rounded-lg flex items-start gap-2.5 text-xs text-[#1A365D] animate-in fade-in">
                  <Calendar className="w-4 h-4 text-[#B8891A] shrink-0 mt-0.5" />
                  <p>
                    Please specify tentative dates, host congregation name, state / LGA, and proposed sermon themes in your message.
                  </p>
                </div>
              )}

              {/* Message Content */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs">
                  <label htmlFor="message" className="font-bold text-[#1A365D]">
                    Message Content <span className="text-[#C53030]">*</span>
                  </label>
                  <span
                    className={`text-[11px] font-medium ${
                      message.length < 20 ? 'text-[#C53030]' : 'text-[#2F855A]'
                    }`}
                  >
                    {message.length < 20
                      ? `${20 - message.length} more characters required`
                      : `${message.length} characters written`}
                  </span>
                </div>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="State your question, shipping destination, or event details clearly with chapter and verse where applicable..."
                  className="w-full bg-[#F8F6F1] border border-[#E2DDD4] text-sm text-[#1A365D] rounded p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8891A] transition-all resize-y"
                ></textarea>
              </div>

              {/* Privacy reassurance */}
              <div className="flex items-center gap-2 p-3 bg-[#F8F6F1] rounded text-xs text-[#4A5568]">
                <ShieldCheck className="w-4 h-4 text-[#B8891A] shrink-0" />
                <span>Your contact details are strictly confidential and will never be shared.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={submitting || message.length < 20}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1A365D] hover:bg-[#2A384F] text-white rounded font-sans text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#B8891A]" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-[#B8891A]" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-xs text-[#4A5568]">
                  <span className="w-2 h-2 rounded-full bg-[#2F855A]"></span>
                  <span>Direct to Minister&apos;s Desk</span>
                </div>
              </div>
            </form>
          )}
        </section>
      </div>

      {/* Auxiliary Logistics Strip */}
      <section className="mt-16 pt-8 bg-[#F0EDE6] border border-[#E2DDD4] rounded-xl p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-sm">
          <div>
            <h3 className="font-serif text-base font-bold text-[#1A365D] mb-1.5 flex items-center gap-1.5">
              <Church className="w-4 h-4 text-[#B8891A]" />
              <span>Bookstore Pickups</span>
            </h3>
            <p className="text-[#4A5568] leading-relaxed">
              Physical copies of Minister Otola&apos;s publications are available at the Church of Christ meeting house in Lawanson, Lagos after Sunday morning worship.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-bold text-[#1A365D] mb-1.5 flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#B8891A]" />
              <span>Regional Logistics</span>
            </h3>
            <p className="text-[#4A5568] leading-relaxed">
              Bulk consignments to brethren in Delta, Edo, Abuja, Rivers, and southeastern states are handled through registered interstate courier and transport dispatch.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-bold text-[#1A365D] mb-1.5 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#B8891A]" />
              <span>International Brethren</span>
            </h3>
            <p className="text-[#4A5568] leading-relaxed">
              Brethren contacting from the United Kingdom, United States, South Africa, or other nations can indicate international time zones for direct phone or WhatsApp follow-up.
            </p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-6xl mx-auto px-6 py-24 text-center text-[#4A5568]">
          Loading contact form...
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}

