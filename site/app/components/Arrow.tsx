export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`fine-arrow ${className}`}
      viewBox="0 0 32 16"
      width="28"
      height="16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 8h28M23 2l6 6-6 6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
