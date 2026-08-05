import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage("House Cleaning Tips & Guides", "From the Spottly team — Los Angeles");
}
