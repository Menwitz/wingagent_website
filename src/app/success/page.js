export const metadata = {
  title: "Subscription Successful — WingAgent",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white text-center px-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent mb-4">
        Subscription Confirmed
      </h1>
      <p className="text-slate-400 max-w-md">
        Welcome aboard. You’ll receive a confirmation email shortly.  
        Your WingAgent dashboard will unlock after setup.
      </p>
      <a
        href="/dashboard"
        className="mt-8 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-8 py-3 font-semibold hover:shadow-[0_0_25px_rgba(240,0,184,0.3)] transition"
      >
        Go to Dashboard
      </a>
    </main>
  );
}