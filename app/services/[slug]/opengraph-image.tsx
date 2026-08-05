import { getServiceBySlug, SERVICES } from "@/lib/data/services";
import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return renderOgImage(service?.h1 ?? "Spottly", "House Cleaning in Los Angeles");
}
