import ImageIcon from './icons/ImageIcon';

type ImagePlaceholderProps = {
  label: string;
  dimmed?: boolean;
};

export default function ImagePlaceholder({
  label,
  dimmed,
}: ImagePlaceholderProps) {
  return (
    <div
      className={
        dimmed
          ? 'flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 border-b border-outline-variant/30 bg-surface-container-low/60'
          : 'flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 border-b border-outline-variant/30 bg-surface-container-low'
      }
    >
      <ImageIcon className="h-6 w-6 text-on-surface-variant/30" />
      <span className="font-body text-[10px] uppercase tracking-[0.15em] text-on-surface-variant/40">
        {label}
      </span>
    </div>
  );
}
