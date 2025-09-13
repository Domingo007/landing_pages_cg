============================================================
Career Guide — Landing (Vite + React + Tailwind + Hero MP4)
Repo: https://github.com/Domingo007/landing_pages_cg.git
============================================================

Opis
-----
Minimalistyczna strona startowa (ciemny motyw) z kartą logowania po lewej
i dużym hero wideo po prawej. Responsywna, semantyczna, z akcentem na
dostępność (WCAG). Idealna jako baza do personalizacji.

Wymagania
----------
- Node.js 18+ (polecane 20+)
- npm 9+ (w zestawie z Node)

Szybki start (lokalnie)
------------------------
1) Klon repo:
   git clone https://github.com/Domingo007/landing_pages_cg.git
   cd landing_pages_cg

2) Instalacja zależności:
   npm install

3) Dev serwer:
   npm run dev
   → otwórz adres z terminala (zwykle http://localhost:5173)

4) Build produkcyjny i podgląd:
   npm run build
   npm run preview
   → podgląd gotowego katalogu /dist

Struktura projektu
-------------------
/public
  hero.mp4   ← wideo (6–12 s, 720p, 3–5 MB), ścieżka: /hero.mp4
  hero.jpg   ← plakat/fallback (opcjonalnie)
/src
  main.tsx
  index.css      ← dyrektywy @tailwind
  App.tsx
  /components
    NavBar.tsx
    AuthCard.tsx
    OAuthButton.tsx
    HeroVideo.tsx
    Footer.tsx
index.html
tailwind.config.js
postcss.config.js
vite.config.ts
package.json
tsconfig.json

Personalizacja (najczęściej)
-----------------------------
• Nazwa w karcie przeglądarki: index.html → <title>Career Guide</title>
• Logo tekstowe: src/components/NavBar.tsx (tekst „Career Guide”)
• Tło strony: src/App.tsx (klasa bg-black)
• Wideo: podmień plik /public/hero.mp4 (props w HeroVideo.tsx: src, poster)
• Kolor akcentu (focus ring, itp.): :root { --accent: #8B5CF6; } w index.css

Deploy na GitHub Pages (to repo)
---------------------------------
1) Ustaw base w vite.config.ts (dla repo landing_pages_cg):
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   export default defineConfig({
     base: '/landing_pages_cg/',
     plugins: [react()],
   })

2) Dodaj workflow (jeśli nie ma): .github/workflows/deploy.yml
   - build: npm ci && npm run build
   - upload dist i deploy przez actions/deploy-pages

3) Włącz Pages:
   GitHub → repo → Settings → Pages → Build and deployment: GitHub Actions

Po zbudowaniu strona będzie dostępna pod:
https://domingo007.github.io/landing_pages_cg/

Najczęstsze problemy i szybkie naprawy
---------------------------------------
• „Biała strona / surowy HTML”:
  - src/main.tsx importuje "./index.css"
  - index.html ładuje: <script type="module" src="/src/main.tsx">
  - zainstaluj: npm i -D tailwindcss postcss autoprefixer
  - postcss.config.js: export default { plugins: { tailwindcss:{}, autoprefixer:{} } }
  - tailwind.config.js: content: ["./index.html", "./src/**/*.{ts,tsx}"]
  - restartuj dev: Ctrl+C → npm run dev

• Wideo nie działa:
  - plik w public/hero.mp4 (dokładnie ta nazwa)
  - rozmiar ≤ 100 MB (limit GitHub), zalecane 3–5 MB (720p, H.264)
  - ustaw poster: public/hero.jpg (opcjonalnie)

• „Missing script: dev”:
  - uruchamiasz npm nie w folderze projektu (sprawdź: pwd / ls -la)
  - upewnij się, że w package.json istnieje "dev": "vite"

Skrypty npm
------------
npm run dev      → dev server (HMR)
npm run build    → produkcyjny build do /dist
npm run preview  → lokalny serwer podglądu buildu

Licencja
---------
MIT — pełna dowolność użycia i modyfikacji.

Kontakt / Repo
---------------
Repo: https://github.com/Domingo007/landing_pages_cg.git
Issues i PR: mile widziane :)
