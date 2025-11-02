export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 text-slate-400 text-sm">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-10 sm:gap-0">
        {/* left column */}
        <div className="sm:w-1/2">
          <h3 className="text-white font-semibold text-lg">WingAgent</h3>
          <p className="mt-3 text-slate-400 leading-relaxed max-w-md">
            WingAgent uses advanced AI to help you make meaningful connections efficiently and privately.
            <br />
            <span className="text-slate-300 font-medium">Your privacy is our priority.</span>
          </p>
        </div>

        {/* right column */}
        <div className="sm:w-1/2 flex flex-col sm:items-end gap-6">
          {/* links */}
 <ul className="flex flex-wrap justify-center sm:justify-end gap-6 text-slate-400">
  <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
  <li><a href="/refund" className="hover:text-white transition-colors">Refund Policy</a></li>
  <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
  <li><a href="/terms" className="hover:text-white transition-colors">Terms of Use</a></li>
  <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
  <li><a href="/auth" className="hover:text-white transition-colors">Login / Sign Up</a></li>
</ul>

          {/* socials */}
          <div className="flex justify-center sm:justify-end gap-5 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H7v4h2v12h5V12h3.642L18 8h-4V6.5c0-.967.194-1.5 1.5-1.5H18V0h-3c-3.594 0-6 1.822-6 5.25V8z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.25 4.25 0 0 0 16.11 4c-2.36 0-4.28 1.92-4.28 4.29 0 .33.03.65.1.96-3.56-.18-6.72-1.88-8.83-4.46a4.27 4.27 0 0 0-.58 2.16c0 1.49.76 2.8 1.9 3.57-.71-.02-1.38-.22-1.97-.54v.05c0 2.08 1.48 3.81 3.44 4.21-.36.1-.74.16-1.13.16-.27 0-.55-.02-.81-.08.55 1.71 2.12 2.96 3.99 3a8.54 8.54 0 0 1-5.29 1.82c-.35 0-.7-.02-1.05-.06A12.07 12.07 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68v-.53A8.18 8.18 0 0 0 22.46 6z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.507 5.507 0 0 0 6.5 12 5.507 5.507 0 0 0 12 17.5 5.507 5.507 0 0 0 17.5 12 5.507 5.507 0 0 0 12 7.5zm0 9A3.505 3.505 0 0 1 8.5 13 3.505 3.505 0 0 1 12 9.5 3.505 3.505 0 0 1 15.5 13 3.505 3.505 0 0 1 12 16.5zm5.75-9.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-slate-500">
        © Copyright Public Affairs Analytics LLC. 2025
      </div>
    </footer>
  );
}