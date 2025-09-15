export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70">
      <nav className="max-w-[1320px] mx-auto h-[88px] px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-none tracking-tight">
          Career Guide
        </h1>

        <div className="hidden sm:flex items-center gap-3">
          <button className="btn btn-white rounded-full px-5 h-10 w-auto" aria-label="Sign up to chat">
            Sign Up to Chat
          </button>
          <button className="btn btn-outline rounded-full px-5 h-10 w-auto" aria-label="Login">
            Login
          </button>
        </div>

        <div className="sm:hidden">
          <button className="btn btn-outline rounded-full px-4 h-10 w-auto" aria-label="Login">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}
