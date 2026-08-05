export interface ReviewPlaceholderEntry {
  city: string;
  text: string;
}

// Import real reviews from Google Business Profile before launch.
// Fabricated reviews violate FTC rules — do not replace these placeholders
// with invented names, quotes, or star counts.
export const REVIEW_PLACEHOLDERS: ReviewPlaceholderEntry[] = [
  { city: "Santa Monica", text: "[Replace with a real Spottly review before launch — reviewer first name + last initial, Santa Monica.]" },
  { city: "Culver City", text: "[Replace with a real Spottly review before launch — reviewer first name + last initial, Culver City.]" },
  { city: "Beverly Hills", text: "[Replace with a real Spottly review before launch — reviewer first name + last initial, Beverly Hills.]" },
  { city: "West Hollywood", text: "[Replace with a real Spottly review before launch — reviewer first name + last initial, West Hollywood.]" },
  { city: "Venice", text: "[Replace with a real Spottly review before launch — reviewer first name + last initial, Venice.]" },
  { city: "Koreatown", text: "[Replace with a real Spottly review before launch — reviewer first name + last initial, Koreatown.]" },
];
