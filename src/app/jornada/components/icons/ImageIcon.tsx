export default function ImageIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="3"
        y="4.5"
        width="18"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="8.5" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M3 16.5 8 12l3 2.8L16.5 10 21 14.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
