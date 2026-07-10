export default function HeroGradient() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-150"
      style={{
        background:
          'linear-gradient(180deg, rgba(var(--soft-cream-rgb), 1) 0%, rgba(var(--soft-cream-rgb), 0.45) 40%, rgba(var(--soft-cream-rgb), 0) 100%)',
      }}
    />
  );
}