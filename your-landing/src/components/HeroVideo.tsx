type Props = {
  src?: string;
  poster?: string;
  fill?: boolean; // gdy true – wypełnij wysokość rodzica
};

export default function HeroVideo({
  src = "/hero.mp4",
  poster = "/hero.jpg",
  fill = true,
}: Props) {
  return (
    <div className={`rounded-[32px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-[rgba(255,255,255,.08)] mt-2 ${fill ? "h-full" : ""}`}>
      <div className={`relative w-full ${fill ? "xl:h-full xl:aspect-auto" : ""} aspect-[16/9]`}>
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
        />
      </div>
    </div>
  );
}
