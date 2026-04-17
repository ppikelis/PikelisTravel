const heroStories = [
  {
    title: "Triftbrücke from Zurich",
    category: "Switzerland",
    hook: "A dramatic alpine day trip that feels like a mini-expedition.",
    summary:
      "Suspension bridge drama, glacier scenery, and one of the most rewarding day routes in Switzerland.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    primaryCta: "Read Story",
    secondaryCta: "View Guide",
    guideHref: "/guides/trift-bridge-from-zurich.html",
  },
  {
    title: "Mongol Rally",
    category: "Expedition",
    hook: "A self-organized route across Eurasia in an old car.",
    summary:
      "An overland journey built around uncertainty, logistics, endurance, and improvisation.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    primaryCta: "Read Story",
    secondaryCta: "Guide in Progress",
  },
  {
    title: "Africa Overland Route",
    category: "Expedition",
    hook: "Driving from Gibraltar toward South Africa, one border at a time.",
    summary:
      "A multi-year self-organized overland project shaped by difficult crossings and long-distance planning.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    primaryCta: "Read Story",
    secondaryCta: "Guide in Progress",
  },
];

const collections = [
  {
    title: "Swiss Alpine Days",
    intro:
      "Structured day trips from Zurich that combine alpine scenery, transport logic, and realistic pacing.",
    examples: ["Triftbrücke", "Stoos Ridge", "Mount Rigi", "Säntis"],
    href: "/destinations/switzerland/",
  },
  {
    title: "Self-Guided Country Routes",
    intro:
      "Longer routes built around flow, logistics, and what actually works on the ground.",
    examples: ["Iceland Ring Road", "South Island New Zealand", "Switzerland by train"],
    href: "/inspire.html",
  },
  {
    title: "Extreme Experiences",
    intro:
      "The experiences that shape how routes are designed and tested in the real world.",
    examples: [
      "Running with the bulls",
      "Shark diving",
      "Volcano boarding",
      "Skydiving & paragliding",
    ],
    href: "/inspire.html",
  },
  {
    title: "Expedition Routes",
    intro:
      "Long-form journeys shaped by overland logistics, difficult borders, and uncertainty.",
    examples: ["Mongol Rally", "Africa overland route", "Mauritania iron ore train"],
    href: "/inspire.html",
  },
];

const journeys = [
  {
    title: "Triftbrücke from Zurich",
    category: "Switzerland",
    slug: "triftbrucke",
    subtitle:
      "A glacier valley, hanging bridge, and mountain day that is realistic to do in one day from Zurich.",
    summary:
      "A glacier valley hike with one of the most impressive suspension bridges in Switzerland.",
    story: [
      "I often take friends and family to Triftbrücke when they want to see a different side of the Swiss Alps than the usual panorama stops.",
      "The walk leads into a glacier valley that still feels quiet and slightly remote compared with the busier areas around Interlaken. The bridge itself is long and exposed enough to feel like a proper crossing rather than a viewpoint stop.",
      "What makes this route stand out is that it gives a real alpine atmosphere without requiring technical experience. It’s one of the few hikes like this that still fits well into a normal travel schedule if the day is planned properly.",
      "Many visitors go there as part of a guided excursion. In practice, the route is straightforward. Doing it independently feels more natural and gives much more flexibility during the day.",
      "This works well for anyone who wants one mountain day that feels more serious than a cable-car panorama but still manageable on marked trails.",
    ],
    effort:
      "A moderate mountain hike suitable for anyone comfortable walking 4–5 hours on standard mountain paths.",
    guide:
      "The guide explains how I usually structure the day, what to prepare in advance, and how to make the route work smoothly without joining a tour.",
    guideHref: "/guides/trift-bridge-from-zurich.html",
    guideLabel: "View Guide",
    images: [
      "Triftbrücke suspension bridge",
      "Glacier valley approach",
      "Bridge crossing close-up",
      "Triftsee alpine landscape",
    ],
  },
  {
    title: "Stoos Ridge from Zurich",
    category: "Switzerland",
    slug: "stoos-ridge",
    subtitle:
      "A clean panoramic ridge walk with constant views and a real sense of a mountain traverse.",
    summary:
      "One of the most scenic ridge walks in Switzerland, with big views and no technical difficulty.",
    story: [
      "The Stoos Ridge is one of the cleanest panoramic ridge walks in Switzerland that still works as a straightforward day trip.",
      "The route follows the ridge between Klingenstock and Fronalpstock with open views across Lake Lucerne and the surrounding mountains almost the entire way. It looks dramatic but remains comfortable for anyone used to marked alpine trails.",
      "What makes this walk especially useful in a Switzerland itinerary is how accessible it is compared with other ridge routes that appear similar on the map. You get the feeling of a real mountain traverse without needing special equipment or a full expedition day.",
      "This route fits well when the goal is a high-reward hiking day with consistent views from start to finish.",
    ],
    effort:
      "A moderate hike on marked mountain trails with steady uphill and downhill sections.",
    guide:
      "The guide explains how I usually structure the day and what to prepare in advance so the route works smoothly.",
    guideHref: "/guides/stoos-ridge-from-zurich.html",
    guideLabel: "View Guide",
    images: [
      "Stoos ridge walkway",
      "Lake Lucerne panorama",
      "Klingenstock ridgeline",
    ],
  },
  {
    title: "Appenzell & Ebenalp from Zurich",
    category: "Switzerland",
    slug: "appenzell-ebenalp",
    subtitle:
      "A classic Swiss mountain day with village charm, cliffs, and a lake finish.",
    summary:
      "A classic Swiss mountain day with cable cars, cliffs, Aescher, and Seealpsee.",
    story: [
      "The Appenzell and Ebenalp route combines several different parts of a typical Swiss mountain landscape into one compact day.",
      "It starts with the village atmosphere of Appenzell, continues by cable car to Ebenalp, passes the Aescher guesthouse built into the rock face, and then leads down toward Seealpsee, one of the most beautiful alpine lakes in the region.",
      "What makes this route interesting is the variety. Instead of focusing on a single summit or viewpoint, the day includes village scenery, cliffs, mountain trails, and a proper alpine lake.",
      "Compared with some of the better-known areas in central Switzerland, the region also feels more local and less crowded.",
      "This works well for travelers who want a balanced mountain day with different landscapes rather than a single up-and-down hike.",
    ],
    effort:
      "A moderate hike on standard mountain trails with some steeper downhill sections.",
    guide:
      "The guide explains how I usually combine Appenzell, Ebenalp, Aescher, and Seealpsee into one smooth day without unnecessary transport changes.",
    guideHref: "/guides/appenzell-ebenalp-from-zurich.html",
    guideLabel: "View Guide",
    images: [
      "Appenzell village start",
      "Aescher cliffside stop",
      "Seealpsee alpine lake",
    ],
  },
  {
    title: "Mount Rigi from Zurich",
    category: "Switzerland",
    summary:
      "A flexible mountain day combining train, boat, and panoramic viewpoints.",
  },
  {
    title: "Iceland Ring Road",
    category: "Country Route",
    summary:
      "A self-guided route built around landscapes, pacing, and weather logic.",
  },
  {
    title: "South Island New Zealand",
    category: "Country Route",
    summary: "A route shaped by road-trip flow, not just top sights.",
  },
  {
    title: "Mongol Rally",
    category: "Expedition",
    summary: "A self-organized crossing built around uncertainty and logistics.",
  },
  {
    title: "Africa Overland Route",
    category: "Expedition",
    summary: "Long-distance driving, difficult borders, and route adaptation.",
  },
  {
    title: "Seven Summits Journey",
    category: "Mountains",
    summary:
      "A long-term mountain goal built through logistics, acclimatization, and patience.",
  },
];

const extremeExperiences = [
  "Running with the bulls — Spain",
  "Shark diving — South Africa",
  "Volcano boarding — Nicaragua",
  "Skydiving & paragliding",
  "Ice climbing & glacier travel",
  "Riding the iron ore train — Mauritania",
  "Summit pushes above 6,000 m",
  "Remote border crossings — West Africa",
];

const TopNav = () => (
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
);

const Footer = () => (
  <footer className="flex flex-col gap-4 border-t border-slate-200 py-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
    <p>© 2026 Pikelis Travel. All rights reserved.</p>
    <div className="flex items-center gap-4">
      <span>Contact</span>
      <span>Terms</span>
      <span>Privacy</span>
    </div>
  </footer>
);

const categoryChips = [
  "Switzerland",
  "New Zealand",
  "Expeditions",
  "Mountains",
  "Extreme Experiences",
  "Route Ideas",
];

function InspirePage() {
  const [activeStory, setActiveStory] = React.useState(null);

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-8">
        <TopNav />
        <section className="grid gap-6 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative h-64 overflow-hidden rounded-3xl bg-slate-100">
            <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-slate-400">
              Featured hero image placeholder
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <p className="text-3xl font-semibold md:text-4xl">Inspire</p>
              <p className="text-sm text-slate-600">
                Real journeys behind the guides — built from 15 years of
                independent travel across 140 countries.
              </p>
              <p className="text-sm text-slate-500">
                Routes tested in the real world, from Swiss alpine day trips to
                overland expeditions across continents.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white">
                Explore Guides
              </button>
              <button className="rounded-full border border-slate-200 px-5 py-2 text-xs font-semibold text-slate-700">
                View Expeditions
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap gap-3">
          {categoryChips.map((label) => (
            <span
              key={label}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600"
            >
              {label}
            </span>
          ))}
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">Featured journeys</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {heroStories.map((story) => (
              <div
                key={story.title}
                className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"
              >
                <div className="h-52 w-full bg-slate-100"></div>
                <div className="space-y-3 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {story.category}
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    {story.title}
                  </p>
                  <p className="text-sm text-slate-600">{story.hook}</p>
                  <p className="text-xs text-slate-500">{story.summary}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
                      {story.primaryCta}
                    </button>
                    {story.guideHref ? (
                      <a
                        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700"
                        href={story.guideHref}
                      >
                        {story.secondaryCta}
                      </a>
                    ) : (
                      <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500">
                        {story.secondaryCta}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-4">
          {[
            "140 countries",
            "15 years of independent planning",
            "5/7 summits completed",
            "Routes tested with family and friends",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-xs font-semibold text-slate-700">
              {item}
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <p className="text-xl font-semibold">Explore by type of journey</p>
          <div className="grid gap-6 md:grid-cols-2">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <div className="h-40 rounded-2xl bg-slate-100"></div>
                <div className="mt-4 space-y-2">
                  <p className="text-lg font-semibold">{collection.title}</p>
                  <p className="text-sm text-slate-600">{collection.intro}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                    {collection.examples.map((example) => (
                      <span key={example} className="rounded-full bg-slate-100 px-3 py-1">
                        {example}
                      </span>
                    ))}
                  </div>
                  <a
                    className="mt-3 inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700"
                    href={collection.href}
                  >
                    View collection
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <p className="text-xl font-semibold">Journeys I've actually done</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {journeys.map((journey) => (
              <div
                key={journey.title}
                className="flex h-full flex-col rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <div className="h-40 rounded-2xl bg-slate-100"></div>
                <div className="mt-4 flex flex-1 flex-col space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {journey.category}
                  </p>
                  <p className="text-lg font-semibold">{journey.title}</p>
                  <p className="text-sm text-slate-600">
                    {journey.summary}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <button
                      className={`rounded-full px-4 py-2 text-xs font-semibold ${
                        journey.story
                          ? "bg-slate-900 text-white"
                          : "bg-slate-200 text-slate-400"
                      }`}
                      disabled={!journey.story}
                      onClick={() => setActiveStory(journey)}
                      type="button"
                    >
                      Read Story
                    </button>
                    {journey.guideHref ? (
                      <a
                        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700"
                        href={journey.guideHref}
                      >
                        {journey.guideLabel || "View Guide"}
                      </a>
                    ) : (
                      <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500">
                        Guide in Progress
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xl font-semibold">
              How I test the routes behind my guides
            </p>
            <p className="mt-2 text-sm text-slate-600">
              I don’t build routes from a desk. I test them in the field —
              through altitude, logistics, terrain, and real-world uncertainty.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {extremeExperiences.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-4 text-xs text-slate-500 shadow-sm ring-1 ring-slate-200"
              >
                <div className="mb-3 h-24 rounded-xl bg-slate-100"></div>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-start gap-4 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Ready to turn inspiration into a real route?
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white">
              Browse Guides
            </button>
            <button className="rounded-full border border-slate-200 px-5 py-2 text-xs font-semibold text-slate-700">
              Explore Destinations
            </button>
          </div>
        </section>
        <Footer />
      </div>
      {activeStory ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-6 py-10">
          <div className="max-h-full w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  {activeStory.category}
                </p>
                <p className="text-2xl font-semibold text-slate-900">
                  {activeStory.title}
                </p>
              </div>
              <button
                className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600"
                onClick={() => setActiveStory(null)}
                type="button"
              >
                Close
              </button>
            </div>
            <div className="grid gap-6 px-6 py-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div className="relative h-56 overflow-hidden rounded-2xl bg-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-slate-400">
                    {activeStory.images?.[0] || "Story hero image"}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {activeStory.images?.slice(1).map((label) => (
                    <div
                      key={label}
                      className="relative h-32 overflow-hidden rounded-2xl bg-slate-100"
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-slate-400">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-slate-600">
                    {activeStory.subtitle}
                  </p>
                </div>
                <div className="space-y-4 text-sm text-slate-600">
                  {activeStory.story?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="space-y-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Effort level
                    </p>
                    <p className="mt-1">{activeStory.effort}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Guide available
                    </p>
                    <p className="mt-1">{activeStory.guide}</p>
                  </div>
                </div>
                {activeStory.guideHref ? (
                  <a
                    className="inline-flex rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white"
                    href={activeStory.guideHref}
                  >
                    {activeStory.guideLabel || "View Guide"}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<InspirePage />);
