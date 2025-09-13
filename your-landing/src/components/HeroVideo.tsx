type Props = {
  src?: string;        // ścieżka do mp4
  poster?: string;     // opcjonalny obraz podglądu / fallback
};

export default function HeroVideo({
  src = "/hero.mp4",
  poster = "/hero.jpg",
}: Props) {
  return (
    <div className="rounded-[32px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-[rgba(255,255,255,.08)] mt-2">
      {/* Zachowujemy 16:9, żeby layout nie skakał */}
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
          aria-label="Tło wideo – krótki klip"
          disablePictureInPicture
        >
          {/* Fallback dla bardzo starych przeglądarek */}
          <img src={poster} alt="Podgląd wideo" className="h-full w-full object-cover" />
        </video>
      </div>
    </div>
  );
}
