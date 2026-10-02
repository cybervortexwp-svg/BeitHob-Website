import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  image: string;
  tint: 'amethyst' | 'sky' | 'lime';
  accent: 'purple' | 'blue' | 'green';
};

const accents = {
  purple: 'text-purple',
  blue: 'text-blue',
  green: 'text-green'
};

const tints = {
  amethyst: 'bg-amethyst/40',
  sky: 'bg-sky/40',
  lime: 'bg-lime/40'
};

export function ProgramCard({title, description, image, tint, accent}: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(23,25,35,0.06)] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={`${tints[tint]} flex h-full flex-1 flex-col p-6`}>
        <h3 className={`font-heading text-xl font-bold ${accents[accent]}`}>
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
          {description}
        </p>
      </div>
    </article>
  );
}