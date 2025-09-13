// src/App.tsx
import NavBar from "./components/NavBar";
import AuthCard from "./components/AuthCard";
import HeroVideo from "./components/HeroVideo";  // <— tu
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      <main className="flex-1">
        <section className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-start pt-8 lg:pt-10">
            <div className="xl:col-span-4 order-1 xl:order-none">
              <AuthCard />
            </div>
            <div className="xl:col-span-8 order-2">
              <HeroVideo src="/hero.mp4" poster="/hero.jpg" /> {/* <— tu */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
