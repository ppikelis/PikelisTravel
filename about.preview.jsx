const ImagePlaceholder = ({ label }) => (
  <div className="flex h-44 w-full items-center justify-center rounded-2xl bg-slate-100 text-xs font-semibold text-slate-400">
    {label}
  </div>
);

function AboutMePage() {
  return (
    <div className="bg-[#f7f4ef] text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-16 pt-10">
        <nav className="flex items-center justify-between gap-6 py-4 text-sm">
          <a className="flex items-center" href="/">
            <span className="flex flex-col leading-none">
              <span className="font-serif text-lg font-semibold uppercase tracking-[0.3em] text-slate-900">
                PIKELIS TRAVEL
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.4em] text-slate-500">
                since 2010
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="/destinations.html">
              Destinations
            </a>
            <a className="hover:text-slate-900" href="/guides.html">
              Guides
            </a>
            <a className="hover:text-slate-900" href="/inspire.html">
              Inspire
            </a>
            <a className="hover:text-slate-900" href="/about.html">
              About Me
            </a>
          </div>
        </nav>
        <section className="grid gap-6 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-3xl font-semibold md:text-4xl">About Me</p>
            <p className="text-sm text-slate-600">
              I've been planning trips independently for myself, my family, and
              friends for more than 15 years.
            </p>
            <p className="text-sm text-slate-600">
              Today, I turn that experience into premium travel guides designed
              to help people travel more and waste less time planning.
            </p>
            <p className="text-sm text-slate-600">
              These are real routes built from firsthand travel - not generic
              itineraries.
            </p>
          </div>
          <ImagePlaceholder label="Portrait placeholder - mountain or expedition photo" />
        </section>

        <section className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "140 countries",
              "15 years planning trips",
              "Built for real travelers",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white px-4 py-5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
          <ImagePlaceholder label="World map placeholder showing visited countries" />
        </section>

        <section className="grid gap-6 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-slate-900">
              Why these guides are different
            </p>
            <p className="text-sm text-slate-600">
              I build guides the same way I plan trips in real life: around
              logistics, pacing, memorable experiences, and what actually works
              on the ground.
            </p>
            <p className="text-sm text-slate-600">
              If my 60-year-old parents can follow these routes confidently,
              most travelers can too.
            </p>
          </div>
          <ImagePlaceholder label="Route planning / train window / map placeholder" />
        </section>

        <section className="space-y-4">
          <p className="text-lg font-semibold text-slate-900">
            Expedition routes I've organized myself
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Mongol Rally",
              "Africa overland route",
              "West Africa remote crossings",
            ].map((title) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
              >
                <ImagePlaceholder label={`${title} placeholder`} />
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-lg font-semibold text-slate-900">
            Mountain and expedition experience
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            {["Aconcagua", "Denali", "Kilimanjaro", "Elbrus", "Kosciuszko"].map(
              (peak) => (
                <span
                  key={peak}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {peak}
                </span>
              )
            )}
          </div>
          <p className="text-sm text-slate-600">
            I also prepared extensively for an Everest expedition - an
            experience that deepened my approach to logistics, preparation, and
            route structure.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "Summit placeholder",
              "Glacier placeholder",
              "Crampons placeholder",
            ].map((label) => (
              <ImagePlaceholder key={label} label={label} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-lg font-semibold text-slate-900">
            How I test the routes behind my guides
          </p>
          <p className="text-sm text-slate-600">
            I don't design itineraries from a desk. I test destinations in the
            field - often through unusual, high-adventure, or logistically
            difficult experiences.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Running with the bulls - Spain",
              "Shark diving - South Africa",
              "Volcano boarding - Nicaragua",
              "Skydiving and paragliding",
              "Ice climbing and glacier travel",
              "Summits above 6,000 m",
              "Iron ore train - Mauritania",
              "Remote border crossings - West Africa",
            ].map((label) => (
              <div
                key={label}
                className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
              >
                <div className="flex h-36 items-center justify-center rounded-2xl bg-slate-100 text-xs font-semibold text-slate-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-slate-900">Why I do this</p>
            <p className="text-sm text-slate-600">
              I want to help more people travel independently without wasting
              days or weeks on chaotic planning.
            </p>
            <p className="text-sm text-slate-600">
              Good travel should feel exciting - not overwhelming.
            </p>
            <p className="text-sm text-slate-600">
              These guides are my way of turning years of firsthand experience
              into something practical, simple, and useful for other travelers.
            </p>
          </div>
          <ImagePlaceholder label="Traveler planning route placeholder" />
        </section>

        <section className="flex flex-col items-start gap-4 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-semibold text-slate-900">
            Ready to travel more and plan less?
          </p>
          <button className="rounded-full bg-slate-900 px-6 py-2 text-xs font-semibold text-white">
            Browse Guides
          </button>
        </section>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AboutMePage />);
