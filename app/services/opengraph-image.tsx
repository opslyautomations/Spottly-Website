import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage("House Cleaning Services in Los Angeles", "Standard · Deep · Move-In/Out · Recurring · Airbnb · Commercial");
}
