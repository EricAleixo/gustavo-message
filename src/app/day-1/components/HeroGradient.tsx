export default function HeroGradient() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[820px]"
      style={{
        background:
          'linear-gradient(180deg, rgba(var(--soft-blue-rgb), 1) 0%, rgba(var(--soft-blue-rgb), 0.45) 40%, rgba(var(--soft-blue-rgb), 0) 100%)',
      }}
    />
  );
}