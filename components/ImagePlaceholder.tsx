import { SparkleIcon } from "./icons";

const GRADIENTS = [
  "from-[var(--color-dark-blue)] to-[var(--color-primary-blue)]",
  "from-[var(--color-primary-blue)] to-[var(--color-light-blue)]",
  "from-[var(--color-dark-blue)] to-[var(--color-light-blue)]",
];

export default function ImagePlaceholder({
  label,
  alt,
  seed = 0,
  className = "",
}: {
  label?: string;
  alt: string;
  seed?: number;
  className?: string;
}) {
  const gradient = GRADIENTS[seed % GRADIENTS.length];
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <SparkleIcon className="h-10 w-10 text-white/40" />
      {label && (
        <span className="absolute bottom-3 left-3 right-3 line-clamp-2 text-xs font-medium text-white/80">
          {label}
        </span>
      )}
    </div>
  );
}
