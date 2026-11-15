import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import {
  ShieldCheck,
  Church,
  BookOpen,
  Calendar,
  MapPin,
  ArrowRight,
  Mail,
  CheckCircle,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export const metadata = {
  title: 'About Minister Ogbu Joshua Otola — Church of Christ, Lawanson, Lagos',
  description:
    'Biographical background, ministerial calling, doctrinal convictions, and pastoral vision of Minister Ogbu Joshua Otola, serving the Church of Christ at Lawanson, Lagos, Nigeria.',
};

export default function AboutPage() {
  return (
    <div className="w-full pb-20">
      {/* 1. Page Hero */}
      <PageHero
        title="About Minister Ogbu Joshua Otola"
        highlightedWord="Ogbu Joshua Otola"
        subtitle="Preacher of the Gospel, biblical scholar, and theological author committed to the restoration of primitive New Testament Christianity and the defense of sound doctrine."
        backgroundImage="/images/hero-about-bg.jpg"
        subjectType="minister"
        subjectImage="/images/min-ogbu-otola.png"
        subjectImageAlt="Minister Ogbu Joshua Otola"
      />

      {/* 2. Main Body Grid: Biography, Credentials & Core Convictions */}
      <div className="max-w-6xl mx-auto px-6 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Ministerial Seal & Quick Facts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Ministerial Seal Card */}
            <div className="bg-gradient-to-br from-[#1A2332] via-[#121A26] to-[#0A0F14] rounded-2xl p-7 text-white shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <Church className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Ministerial Seal
                  </h3>
                  <span className="font-sans text-[11px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                    Apostolic Stewardship
                  </span>
                </div>
              </div>

              <div className="py-5 space-y-4 font-sans text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Jurisdiction &amp; Location</strong>
                    <span className="text-slate-300">Surulere, Lagos State, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Academic Specialization</strong>
                    <span className="text-slate-300">PhD Candidate in New Testament Studies, University of Ilorin</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Authorial Focus</strong>
                    <span className="text-slate-300">Biblical Hermeneutics, Christian Ethics, &amp; Restoration History</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Weekly Assembly</strong>
                    <span className="text-slate-300">Sunday Bible Class &amp; Worship: 9:00 AM • Midweek Exegesis: Wed 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Congregational Inquiries</span>
                <Link
                  href="/contact"
                  className="font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Doctrinal Standard Card */}
            <div className="bg-[#FAF9F6] border border-[#E5E2DA] p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 text-[#9A7516] pb-3 border-b border-[#E5E2DA]">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-sans text-xs uppercase tracking-wider font-bold text-[#1A2332]">
                  Pulpit Conviction
                </span>
              </div>
              <p className="font-serif italic text-sm text-[#1A2332] leading-relaxed mt-3">
                &ldquo;Where the Scriptures speak, we speak; where the Scriptures are silent, we are silent. Faith comes by hearing the word of Christ alone.&rdquo;
              </p>
              <span className="block mt-2 font-sans text-xs text-[#555E6D] font-medium">
                — Adherence to Romans 10:17 &amp; 1 Peter 4:11
              </span>
            </div>

          </div>

          {/* Right Column: Detailed Biography & Convictions */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-[#1E232A]">
            
            {/* Section 1: Pastoral Calling */}
            <section className="bg-white border border-[#E5E2DA] p-8 sm:p-10 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9A7516] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Ministry &amp; Calling</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2332]">
                Calling &amp; Ministerial Journey
              </h2>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#1E232A]">
                Minister Ogbu Joshua Otola has dedicated his life to the earnest proclamation of the Gospel of Jesus Christ. Serving actively as the preacher and minister of the <strong>Church of Christ, Lawanson</strong>, in Surulere, Lagos, Nigeria, he has laboured tirelessly to plant, nurture, and ground congregations in the uncompromised Word of God.
              </p>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#555E6D]">
                Recognizing that the contemporary religious landscape in Nigeria and across the globe is increasingly clouded by human traditions, prosperity gospel distortions, and denominational confusion, his ministry is anchored in the classic restoration plea: <em>to restore New Testament Christianity in doctrine, worship, and daily life</em>.
              </p>
            </section>

            {/* Section 2: Theological Convictions */}
            <section id="doctrine" className="bg-white border border-[#E5E2DA] p-8 sm:p-10 rounded-2xl shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9A7516] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Sound Doctrine</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2332]">
                Core Doctrinal Convictions
              </h2>
              <p className="font-sans text-sm text-[#555E6D] leading-relaxed">
                Minister Otola’s teaching and writings are strictly derived from the 27 books of the New Testament, upholding:
              </p>

              <ul className="space-y-3.5 font-sans text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1E6B42] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A2332]">The Sufficiency of the Scriptures:</strong> The inspired Word of God provides all things pertaining to life and godliness (2 Tim. 3:16-17; 2 Peter 1:3). Human creeds, synods, and clerical hierarchies have no place in Christ&apos;s church.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1E6B42] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A2332]">The New Testament Plan of Salvation:</strong> Preaching the biblical path of redemption—hearing the Word, faith, repentance from dead works, confession of Christ, and immersion in water for the remission of sins (Acts 2:38; Mark 16:16).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1E6B42] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A2332]">Apostolic Pattern in Worship:</strong> Preserving worship in spirit and truth on the Lord’s Day—a cappella singing, weekly observance of the Lord’s Supper, apostolic teaching, prayer, and cheerful contribution (Acts 20:7; Eph. 5:19).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1E6B42] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A2332]">Congregational Autonomy:</strong> Upholding the New Testament order of independent, self-governing local churches led by scripturally qualified elders and deacons under the sole headship of Christ.
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 3: Literary & Academic Mission */}
            <section className="bg-white border border-[#E5E2DA] p-8 sm:p-10 rounded-2xl shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#1A2332]">
                Authorship &amp; Equipping Brethren
              </h2>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#1E232A]">
                Beyond the pulpit, Minister Ogbu Joshua Otola is a dedicated theological educator and author. His published treatise—<em>THE BIBLE AND ALCOHOL: Truth Beyond Tradition</em>—is widely commended by biblical scholars and studied across congregations in Nigeria and internationally.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/books"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C59B27] hover:bg-[#9A7516] text-[#040D1B] font-semibold text-sm rounded-xl transition-colors"
                >
                  <span>Browse Published Book</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A2332] hover:bg-[#2A384F] text-white font-semibold text-sm rounded-xl transition-colors"
                >
                  <span>Contact Minister Otola</span>
                  <Mail className="w-4 h-4 text-[#C59B27]" />
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
