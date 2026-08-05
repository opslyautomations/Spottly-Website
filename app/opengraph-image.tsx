import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Spottly — House Cleaning in Los Angeles";

export default async function Image() {
  return renderOgImage("House Cleaning in Los Angeles You Can Actually Trust", "Detail-obsessed cleaning across the LA Westside & beyond");
}
