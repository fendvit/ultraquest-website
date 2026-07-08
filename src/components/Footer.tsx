export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <img src="/images/logo-main.png" alt="UltraQuest Logo" className="h-14 md:h-16 object-contain group-hover:scale-105 transition-transform" />
            </a>
            <p className="text-gray-400 text-sm max-w-sm">
              The multi-sport challenge platform. Run, ride and lift your way through the world's toughest Quests, and join a global community of endurance athletes.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">PLATFORM</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Quests</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Medal Races</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Premium</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="/privacy.html" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms.html" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>&copy; {new Date().getFullYear()} UltraQuest. All rights reserved. <span className="ml-2">Built by <a href="https://myve.media/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors font-medium">MYVE.media</a></span></div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Strava Club</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
