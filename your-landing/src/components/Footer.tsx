export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 py-10 text-center">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[rgba(255,255,255,.75)]">
          <a className="hover:text-white" href="#">O nas</a>
          <a className="hover:text-white" href="#">FAQ</a>
        </nav>
        <nav className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[rgba(255,255,255,.75)]">
          <a className="hover:text-white" href="#">Cookie Policy</a>
          <a className="hover:text-white" href="#">Privacy Policy</a>
          <a className="hover:text-white" href="#">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}
