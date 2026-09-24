import Script from "next/script";

export default function BookingKoalaForm({ title = "Book a Cleaning" }: { title?: string }) {
  return (
    <div className="w-full rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/5">
      <div style={{ minHeight: 1000 }} className="w-full overflow-hidden rounded-xl">
        <iframe
          src="https://spottly.bookingkoala.com/booknow?embed=true"
          style={{ width: "100%", height: "1000px", border: "none" }}
          scrolling="no"
          title={title}
        />
      </div>
      {/* Auto-resizes the iframe to fit the booking form's content */}
      <Script src="https://spottly.bookingkoala.com/resources/embed.js" strategy="afterInteractive" />
    </div>
  );
}
