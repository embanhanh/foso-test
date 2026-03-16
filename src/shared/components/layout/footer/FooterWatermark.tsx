import Image from "next/image";

export function FooterWatermark() {
  return (
    <div className="absolute top-0 right-0 w-38 h-36 opacity-75 pointer-events-none rotate-25">
      <Image
        src="/assets/icons/flower.svg"
        alt="Pattern"
        fill
        className="object-cover"
      />
    </div>
  );
}
