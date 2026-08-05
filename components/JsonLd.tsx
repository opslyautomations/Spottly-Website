export default function JsonLd({ data }: { data: object | (object | null)[] }) {
  const items = Array.isArray(data) ? data.filter(Boolean) : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
