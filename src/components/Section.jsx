export const SectionHead = ({ kicker, title, sub, center }) => (
  <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    {kicker && (
      <div className={"mb-4" + (center ? " flex justify-center" : "")}>
        <span className="eyebrow">{kicker}</span>
      </div>
    )}
    <h2 className="display text-3xl text-muat-ink sm:text-[2.6rem]">{title}</h2>
    {sub && (
      <p className="mt-4 text-[1.05rem] leading-relaxed text-muat-muted">{sub}</p>
    )}
  </div>
);

export const PageHero = ({ kicker, title, sub }) => (
  <section className="border-b border-muat-line bg-muat-surface">
    <div className="container-x rise py-14 sm:py-20">
      {kicker && (
        <div className="mb-4">
          <span className="eyebrow">{kicker}</span>
        </div>
      )}
      <h1 className="display text-4xl text-muat-ink sm:text-6xl">{title}</h1>
      {sub && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muat-muted">
          {sub}
        </p>
      )}
    </div>
  </section>
);
