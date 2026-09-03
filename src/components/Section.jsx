export const SectionHead = ({ kicker, title, sub, center }) => (
  <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    {kicker && (
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-muat-primary">
        {kicker}
      </div>
    )}
    <h2 className="text-2xl font-extrabold tracking-tight text-muat-ink sm:text-3xl">
      {title}
    </h2>
    {sub && <p className="mt-2 text-muat-muted">{sub}</p>}
  </div>
);

export const PageHero = ({ kicker, title, sub }) => (
  <section className="border-b border-muat-line bg-muat-surface">
    <div className="container-x py-10 sm:py-14 rise">
      {kicker && (
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-muat-primary">
          {kicker}
        </div>
      )}
      <h1 className="text-3xl font-extrabold tracking-tight text-muat-ink sm:text-4xl">
        {title}
      </h1>
      {sub && <p className="mt-3 max-w-2xl text-muat-muted">{sub}</p>}
    </div>
  </section>
);
