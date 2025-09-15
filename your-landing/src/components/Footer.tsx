import { useEffect, useState } from "react";

export default function Footer() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAboutOpen(false);
        setFaqOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <footer className="mt-10">
        <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 py-10 text-center">
          {/* ← usunięto „Careers” */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[rgba(255,255,255,.75)]">
            <button onClick={() => setAboutOpen(true)} className="hover:text-white underline-offset-4 hover:underline">
              O nas
            </button>
            <button onClick={() => setFaqOpen(true)} className="hover:text-white underline-offset-4 hover:underline">
              FAQ
            </button>
          </nav>

          <nav className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[rgba(255,255,255,.75)]">
            <a className="hover:text-white" href="#">Cookie Policy</a>
            <a className="hover:text-white" href="#">Privacy Policy</a>
            <a className="hover:text-white" href="#">Terms of Service</a>
          </nav>
        </div>
      </footer>

      {/* Modal: O nas */}
      <Modal open={aboutOpen} onClose={() => setAboutOpen(false)} title="O nas">
        <div className="space-y-4 text-[rgba(255,255,255,.9)] leading-relaxed">
          <p>
            Nasza aplikacja została stworzona po to, aby podejmowanie decyzji dotyczących kariery i rozwoju osobistego było łatwiejsze, mądrzejsze i bardziej dostępne. Niezależnie od tego, czy szukasz nowej pracy, planujesz zmianę ścieżki zawodowej, czy po prostu chcesz poznać swoje możliwości, nasz inteligentny asystent przeprowadzi Cię przez cały proces krok po kroku.
          </p>
          <p>
            Dzięki interaktywnym narzędziom, spersonalizowanym rekomendacjom i przejrzystym analizom danych zyskujesz nie tylko wiedzę, ale też pewność w podejmowaniu właściwych decyzji. Łączymy zaawansowaną technologię AI z przyjaznym interfejsem, aby skomplikowane wybory stawały się proste, a planowanie przyszłości dawało poczucie mocy i spokoju.
          </p>
        </div>
      </Modal>

      {/* Modal: FAQ */}
      <Modal open={faqOpen} onClose={() => setFaqOpen(false)} title="FAQ">
        <div className="space-y-4">
          <FAQItem q="Czy aplikacja jest płatna?">
            <p>
              Podstawowe funkcje planowania kariery i monitorowania aplikacji są dostępne bezpłatnie.
              Wersja Pro (opcjonalna) doda m.in. eksport CV do PDF, rekomendacje AI i alerty e-mail/SMS.
              Cennik opublikujemy przed wyjściem z bety.
            </p>
          </FAQItem>
          <FAQItem q="Jak otrzymuję powiadomienia o statusie rekrutacji?">
            <p>
              Po włączeniu monitoringu w panelu kandydata otrzymujesz powiadomienia e-mail (a w planie Pro także SMS),
              gdy zmieni się etap Twojej aplikacji lub zbliża się termin rozmowy.
            </p>
          </FAQItem>
        </div>
      </Modal>
    </>
  );
}

/* ============== Pomocnicze komponenty ============== */

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-[800px] rounded-2xl bg-[#1E1F22] text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
          <button
            className="btn btn-outline h-10 w-10 rounded-full p-0"
            aria-label="Zamknij"
            onClick={onClose}
            autoFocus
          >
            ✕
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

function FAQItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
        <span className="font-semibold">{q}</span>
        <span className="ml-auto rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/80 group-open:rotate-180 transition-transform">
          ▼
        </span>
      </summary>
      <div className="mt-3 text-white/90 leading-relaxed">{children}</div>
    </details>
  );
}
