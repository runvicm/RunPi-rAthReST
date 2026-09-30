export default function PageHero({ title }: { title: string }) {
  return (
    <section className="border-b border-base-300 py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </section>
  );
}
