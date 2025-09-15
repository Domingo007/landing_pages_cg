import NavBar from "./components/NavBar";
import AuthCard from "./components/AuthCard";
import HeroVideo from "./components/HeroVideo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      <main className="flex-1">
        <section className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
          {/* na XL oba panele mają taką samą wysokość */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-8 lg:pt-10 xl:min-h-[520px]">
            <div className="xl:col-span-4 h-full">
              <AuthCard />
            </div>
            <div className="xl:col-span-8 h-full">
              <HeroVideo fill />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
