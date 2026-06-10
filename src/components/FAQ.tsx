import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeIn from './FadeIn';

const faqs = [
  {
    question: "How does virtual racing work?",
    answer: "Virtual racing allows you to complete legendary ultramarathon distances at your own pace, from anywhere in the world. Your running kilometers are tracked via GPS tracking or Strava sync, and they accumulate toward your race distance. When you reach the finish, you've completed the race!"
  },
  {
    question: "How do I track my runs?",
    answer: "Use the built-in GPS tracker in the app to record your runs in real time, or connect your Strava account for automatic activity syncing. Both methods count toward your race progress!"
  },
  {
    question: "Can I participate in multiple races at once?",
    answer: "You focus on one race at a time—this keeps you dedicated to crushing your current goal. Once you complete a race (or choose to leave it), you can immediately join a new challenge."
  },
  {
    question: "How long do I have to complete a race?",
    answer: "There are no time limits! You can take as long as you need to complete a virtual race. It's all about your personal journey and consistency."
  },
  {
    question: "Is it free to participate?",
    answer: "Yes! The core UltraQuest experience is completely free. You can join virtual races, track your runs, sync with Strava, and earn digital badges at no cost. We also offer a Premium tier with advanced features and free Medal Race entries."
  },
  {
    question: "What are Medal Races?",
    answer: "Medal Races are special events where you earn a real, physical medal shipped directly to your door upon completion! These races have an entry fee ($5/race), but they are completely free to enter if you have an UltraQuest Premium subscription."
  },
  {
    question: "What is UltraQuest Premium?",
    answer: "Premium is our subscription tier ($7.99/month) that unlocks your full potential. It includes AI Training Insights, the ability to create Custom Races, and free entry to all Medal Races."
  },
  {
    question: "Can I connect my Strava account?",
    answer: "Absolutely! You can easily connect your Strava account to automatically sync all your running activities directly into UltraQuest."
  },
  {
    question: "What are custom races?",
    answer: "Custom races are a Premium feature that allows you to design your own virtual races with custom distances. You can share invite codes with your friends or run clubs to race together on your own terms."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#0a0c0e] to-[#050607] bg-dot-pattern border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={0.2 + idx * 0.1}>
              <div 
                className={`border border-white/10 rounded-xl overflow-hidden transition-colors ${openIdx === idx ? 'bg-[#1c1f22]' : 'bg-[#111315] hover:bg-[#1a1c1f]'}`}
              >
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
                </button>
                {openIdx === idx && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
