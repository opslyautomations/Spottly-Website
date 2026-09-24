import Script from "next/script";

export default function BookingKoalaForm({ title = "Book a Cleaning" }: { title?: string }) {
  return (
    <div className="w-full rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/5">
      {/* Fits the viewport and scrolls internally, so every booking step stays reachable */}
      <iframe
        src="https://spottly.bookingkoala.com/booknow?embed=true"
        className="block h-[calc(100dvh-7rem)] min-h-[640px] w-full rounded-xl border-none"
        title={title}
      />
      <Script src="https://spottly.bookingkoala.com/resources/embed.js" strategy="afterInteractive" />
    </div>
  );
}
