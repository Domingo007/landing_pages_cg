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
        <article className="space-y-4 text-white/85 leading-relaxed text-sm sm:text-[15px]">
          <AboutSection
            first
            title="Inteligentna platforma rozwoju kariery nowej generacji."
          >
            <p>
              Jesteśmy pionierami w dziedzinie inteligentnych rozwiązań zawodowych.
              Nasza platforma została stworzona po to, aby podejmowanie decyzji
              dotyczących kariery i rozwoju osobistego było łatwiejsze, mądrzejsze
              i bardziej dostępne.
            </p>
          </AboutSection>

          <AboutSection title="Poznaj swoją prawdziwą wartość na rynku pracy.">
            <p>
              W świecie, gdzie przeciętny kandydat wysyła setki podobnych aplikacji,
              my oferujemy coś rewolucyjnego — głęboką analizę Twojej unikalnej
              osobowości połączoną z najnowocześniejszą technologią. Niezależnie od tego,
              czy szukasz pierwszej pracy, planujesz zmianę ścieżki zawodowej, czy chcesz
              maksymalizować swój potencjał, nasza platforma przeprowadzi Cię przez proces
              krok po kroku.
            </p>
          </AboutSection>

          <AboutSection title="Inteligentna technologia spotyka się z ludzkim potencjałem.">
            <p>
              Łączymy zaawansowane algorytmy analizy predyspozycji z mocą sztucznej inteligencji,
              tworząc narzędzia, które rozumieją nie tylko Twoje umiejętności, ale przede wszystkim
              to, kim jesteś zawodowo. Dzięki interaktywnym analizom, spersonalizowanym
              rekomendacjom i automatycznemu dopasowaniu Twojego CV do wymagań rynku otrzymujesz
              więcej niż standardowe CV — zyskujesz pewność, że każda aplikacja jest idealnie
              dopasowana do oczekiwań pracodawcy.
            </p>
          </AboutSection>

          <AboutSection title="Dla wizjonerów, którzy nie zadowalają się przeciętnością.">
            <p>
              Nasza platforma została zaprojektowana dla osób, które rozumieją,
              że sukces zawodowy to nie przypadek, ale efekt przemyślanych decyzji
              opartych na danych. Od absolwentów z ambicjami po doświadczonych
              profesjonalistów planujących następny krok — tworzymy rozwiązania dla tych,
              którzy chcą być o krok przed konkurencją.
            </p>
          </AboutSection>

          <AboutSection title="Twoja kariera. Nasze narzędzia. Nieograniczone możliwości.">
            <p>
              Dołącz do osób, które już wykorzystują połączenie samopoznania i najnowszej
              technologii. Przekonaj się, jak nasza platforma może odmienić Twoje spojrzenie
              na przyszłość zawodową.
            </p>
          </AboutSection>

          <AboutSection title="Gotowy na zmianę?">
            <p>Zaloguj się i odkryj swój prawdziwy potencjał zawodowy.</p>
          </AboutSection>
        </article>
      </Modal>
      
      {/* Modal: FAQ */}
        <Modal open={faqOpen} onClose={() => setFaqOpen(false)} title="FAQ">
          <div className="space-y-4">
            <FAQItem q="Dla kogo jest ta platforma?">
              <p>Dla osób na każdym etapie kariery: od studentów i juniorów po specjalistów i managerów planujących zmianę lub rozwój.</p>
            </FAQItem>

            <FAQItem q="Na czym polega „inteligentna” analiza mojego profilu?">
              <p>Łączymy algorytmy oceny predyspozycji z AI. Analizujemy Twoje umiejętności, doświadczenie i preferencje, aby wskazać kierunki rozwoju oraz dopasowane oferty.</p>
            </FAQItem>

            <FAQItem q="Czy platforma pomaga tworzyć i dopasowywać CV?">
              <p>Tak. Generator CV dopasowuje układ i treści do wymagań ogłoszenia i ATS, a rekomendacje AI podpowiadają konkretne zmiany.</p>
            </FAQItem>

            <FAQItem q="Czym różni się to od zwykłego wyszukiwania ofert?">
              <p>Oprócz filtrowania ofert dostajesz spersonalizowane rekomendacje oparte na Twoim profilu, potencjale i dopasowaniu do rynku.</p>
            </FAQItem>

            <FAQItem q="Jakie dane muszę podać na start?">
              <p>Minimum to: doświadczenie/edukacja, kluczowe umiejętności i cele. Im pełniejszy profil, tym dokładniejsze rekomendacje.</p>
            </FAQItem>

            <FAQItem q="Czy moje dane są bezpieczne?">
              <p>Tak. Dane są szyfrowane podczas przesyłania i przechowywania. Masz pełną kontrolę: możesz edytować, eksportować lub usunąć profil w dowolnym momencie.</p>
            </FAQItem>

            <FAQItem q="Czy analiza osobowości wpływa na rekomendacje?">
              <p>Tak, ale to tylko jeden z czynników. Łączymy cechy, kompetencje twarde/miękkie i historię zawodową, aby uniknąć uproszczeń.</p>
            </FAQItem>

            <FAQItem q="Czy mogę zaimportować profil z LinkedIn lub plik CV?">
              <p>Tak. Możesz wczytać CV (PDF/DOCX) lub zsynchronizować wybrane sekcje z LinkedIn, a następnie je edytować.</p>
            </FAQItem>

            <FAQItem q="Czy platforma wysyła powiadomienia o statusie aplikacji?">
              <p>Tak. Otrzymujesz alerty o zmianach etapu rekrutacji i przypomnienia o terminach (e-mail; SMS w planie Pro).</p>
            </FAQItem>

            <FAQItem q="Czy korzystanie jest płatne?">
              <p>Podstawowe funkcje są bezpłatne. Plan Pro odblokowuje rozszerzone analizy, zaawansowane dopasowanie i dodatkowe eksporty.</p>
            </FAQItem>

            <FAQItem q="Jak mierzycie mój postęp i „wartość rynkową”?">
              <p>Pokazujemy wskaźniki dopasowania do ofert, braki kompetencyjne i trendy płacowe dla Twojego profilu, wraz z sugestiami rozwojowymi.</p>
            </FAQItem>

            <FAQItem q="Czy mogę używać platformy w różnych językach?">
              <p>Tak. Interfejs i CV wspierają wiele języków (PL/EN i kolejne sukcesywnie). Rekomendacje dostosowują się do rynku i języka.</p>
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
  // zamknij ESC + zablokuj scroll body gdy modal otwarty
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* karta modala */}
      <div
        className="relative w-full max-w-[840px] rounded-2xl bg-[#1E1F22] text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* sticky nagłówek, zawsze widoczny */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-6 px-6 sm:px-8 pt-6 pb-4 bg-[#1E1F22]/95 backdrop-blur">
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

        {/* przewijana zawartość */}
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 overflow-y-auto overscroll-contain">
          {children}
        </div>
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
function AccentBar() {
  // cienki, pełnej szerokości, delikatny gradient
  return (
    <div className="mb-4 h-2 w-full rounded-full bg-gradient-to-r from-[var(--accent)] via-white/15 to-transparent" />
  );
}

function AboutSection({
  title,
  first = false,
  children,
}: {
  title: string;
  first?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-3">
      {!first && <AccentBar />} {/* pasek tylko dla sekcji > 1 */}
      <h3 className="text-lg sm:text-xl font-bold mb-1">{title}</h3>
      {children}
    </section>
  );
}
