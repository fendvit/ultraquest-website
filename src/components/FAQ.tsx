import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeIn from './FadeIn';

const faqs = [
  {
    question: "Which sports does UltraQuest support?",
    answer: "UltraQuest is a multi-sport platform covering running, cycling, weightlifting, and calisthenics. Switch sports anytime — the whole app adapts, with its own Quests, leaderboards, and theme for each sport."
  },
  {
    question: "How do Quests work?",
    answer: "Quests let you complete legendary challenges at your own pace, from anywhere in the world. Depending on the sport, your GPS distance (running, cycling) or your logged sets and reps (weightlifting, calisthenics) accumulate toward the goal. When you reach the finish, you've completed the Quest!"
  },
  {
    question: "How do I track my activity?",
    answer: "Use the built-in GPS tracker for running and cycling — it keeps recording in the background even with your screen off — or log your strength sessions manually. You can also connect Strava for automatic syncing. Everything counts toward your active Quest, even offline: sessions sync automatically once you're back online."
  },
  {
    question: "Can I take on multiple Quests at once?",
    answer: "You focus on one active Quest at a time to stay dedicated to crushing your current goal. Once you complete it (or choose to leave), you can immediately jump into a new challenge — including in a different sport."
  },
  {
    question: "What are Real Challenges?",
    answer: "Real Challenges are real-time endurance events like 4×4×48 and Backyard Ultra, where everyone competes on the same clock. Register for a cohort event, track each round as it happens, and watch the survivors board as athletes drop out one by one — miss a window and you're out."
  },
  {
    question: "How long do I have to complete a Quest?",
    answer: "Most Quests have no time limit — take as long as you need. Some special challenges, like time-limited Quests and live events, do have deadlines, and those are always shown up front before you join."
  },
  {
    question: "Is it free to participate?",
    answer: "Yes! The core UltraQuest experience is completely free across all four sports. You can join Quests, track your activity, sync with Strava, join clubs, and earn badges at no cost. There is no subscription to buy."
  },
  {
    question: "Can I connect my Strava account?",
    answer: "Absolutely! You can connect Strava to automatically sync your running and cycling activities directly into UltraQuest."
  },
  {
    question: "What are custom Quests?",
    answer: "Custom Quests let you design your own challenges for any sport, with custom distances or rep goals. Share invite codes with your friends or clubs to compete together on your own terms."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#0a0c0e] to-[#050607] bg-dot-pattern border-t border-white/5">
      <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
        <FadeIn className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase mb-4">
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
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center gap-4"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
                </button>
                {openIdx === idx && (
                  <div className="px-4 sm:px-6 pb-5 text-gray-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
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
