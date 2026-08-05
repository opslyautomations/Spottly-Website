import { getLocationBySlug, LOCATIONS } from "@/lib/data/locations";
import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  return renderOgImage(location?.h1 ?? "Spottly", "Local House Cleaning Service");
}
