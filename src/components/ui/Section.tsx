type Props = {
  children: React.ReactNode;
  className?: string;
  tint?: 'none' | 'canvas' | 'amethyst' | 'sky' | 'lime';
};

const tints = {
  none: '',
  canvas: 'bg-canvas',
  amethyst: 'bg-amethyst',
  sky: 'bg-sky',
  lime: 'bg-lime'
};

export function Section({children, className = '', tint = 'none'}: Props) {
  return (
    <section className={`py-16 md:py-24 ${tints[tint]} ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}