import OAuthButton from "./OAuthButton";

export default function AuthCard() {
  return (
    <aside
      className="bg-[#1E1F22] rounded-[28px] shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-[rgba(255,255,255,.08)] p-6 sm:p-8 w-full max-w-[440px] mx-auto xl:h-full"
      aria-labelledby="auth-title"
    >
      <h1 id="auth-title" className="text-3xl sm:text-4xl font-extrabold leading-tight">
        Dołącz do Nas!
      </h1>

      {/* usunięty podtytuł */}

      <button className="btn btn-white sm:hidden mt-4 rounded-full h-12 w-full" aria-label="Sign up to chat">
        Sign Up to Chat
      </button>

      <div className="mt-6 space-y-3">
        <OAuthButton provider="google" label="Continue with Google" />
        <OAuthButton provider="apple" label="Continue with Apple" />
      </div>

      <div className="my-4 flex items-center gap-3 text-sm text-[rgba(255,255,255,.75)]">
        <span className="h-px flex-1 bg-white/10" />
        OR
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <button className="btn btn-outline" aria-label="Continue with email">
        <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 6h16v12H4z" strokeWidth="1.5" />
          <path d="m4 7 8 6 8-6" strokeWidth="1.5" />
        </svg>
        Continue with email
      </button>

      <p className="mt-4 text-xs text-[rgba(255,255,255,.75)]">
        Kontynuując, zgadzasz się z <a href="#" className="underline hover:text-white">Regulaminem</a> i{" "}
        <a href="#" className="underline hover:text-white">Polityką prywatności</a>.
      </p>
    </aside>
  );
}
