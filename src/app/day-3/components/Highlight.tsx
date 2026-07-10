export default function Highlight({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <strong className="font-semibold text-primary">{children}</strong>
  );
}
