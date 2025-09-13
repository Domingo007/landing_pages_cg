export default function HeroImage() {
  return (
    <div className="rounded-[32px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-[rgba(255,255,255,.08)] mt-2">
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <img
          src="/hero.jpg"
          alt="Nocna ilustracja nad jeziorem z zamkiem"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
