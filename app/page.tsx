import BookingForm from "./booking-form";

const services = [
  {
    name: "Signature Haircut",
    detail: "A tailored cut with a clean, polished finish.",
    time: "30 min",
    price: "£22",
  },
  {
    name: "Skin Fade",
    detail: "A precise fade with a sharp, clean finish.",
    time: "40 min",
    price: "£25",
  },
  {
    name: "Taper Fade",
    detail: "A modern taper with natural blending.",
    time: "30 min",
    price: "£23",
  },
  {
    name: "Scissor Cut",
    detail: "Traditional scissor work shaped to your style.",
    time: "35 min",
    price: "£25",
  },
  {
    name: "Beard Trim & Shape",
    detail: "Defined edges and a neatly shaped beard.",
    time: "20 min",
    price: "£12",
  },
  {
    name: "Haircut + Beard",
    detail: "A complete haircut and beard grooming service.",
    time: "50 min",
    price: "£32",
  },
  {
    name: "Haircut + Wash",
    detail: "A fresh cut with a relaxing hair wash.",
    time: "40 min",
    price: "£27",
  },
  {
    name: "Buzz Cut",
    detail: "A simple, even clipper cut.",
    time: "20 min",
    price: "£15",
  },
  {
    name: "Kids' Haircut",
    detail: "A neat, comfortable cut for younger clients.",
    time: "25 min",
    price: "£15",
  },
  {
    name: "Senior Haircut",
    detail: "A classic cut with careful attention to detail.",
    time: "25 min",
    price: "£15",
  },
  {
    name: "Hot Towel Shave",
    detail: "A traditional shave with a warm towel finish.",
    time: "30 min",
    price: "£25",
  },
  {
    name: "Full Grooming Experience",
    detail: "Haircut, beard grooming and a refined finish.",
    time: "60 min",
    price: "£45",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f1e9] text-[#20201d]">
      <header className="border-b border-black/10">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="text-lg font-bold tracking-[0.16em] sm:text-xl"
          >
            HOLLOWAY <span className="text-[#a47d42]">& CO.</span>
          </a>
          <div className="hidden items-center gap-7 text-sm md:flex">
            <a className="hover:text-[#a47d42]" href="#services">
              Services
            </a>
            <a className="hover:text-[#a47d42]" href="#about">
              Our approach
            </a>
            <a className="hover:text-[#a47d42]" href="#contact">
              Contact
            </a>
          </div>
          <a
            href="#services"
            className="shrink-0 bg-[#24241f] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#a47d42] sm:px-6 sm:text-sm"
          >
            VIEW SERVICES
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid min-h-[580px] w-full max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24 lg:px-12"
      >
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#98713c]">
            Independent barbers · Manchester, UK
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Good hair.
            <br />
            Great detail.
            <br />
            <span className="font-serif italic text-[#a47d42]">
              Your style.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#66635c] sm:text-lg">
            Modern barbering, timeless technique and a personal touch. Find your
            next signature look in a relaxed, welcoming space.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#services"
              className="bg-[#24241f] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#a47d42]"
            >
              EXPLORE SERVICES
            </a>
            <a
              href="#contact"
              className="border border-[#24241f]/30 px-7 py-4 text-sm font-semibold transition hover:border-[#a47d42] hover:text-[#98713c]"
            >
              GET IN TOUCH
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-6 text-xs uppercase tracking-widest text-[#777168]">
            <span>Precision cuts</span>
            <span>Personal service</span>
            <span>Classic grooming</span>
          </div>
        </div>

        <div className="relative min-h-[330px] overflow-hidden bg-[#292923] sm:min-h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85"
            alt="Stylish barbershop interior"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white sm:p-9">
            <p className="text-xs uppercase tracking-[0.25em] text-[#e4c38c]">
              The art of barbering
            </p>
            <p className="mt-2 text-2xl font-medium sm:text-3xl">
              Made for your style.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[#24241f] px-5 py-14 text-center text-white sm:px-8 sm:py-20"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4b27b]">
          The Holloway standard
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
          Traditional craft. A modern experience.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          From everyday cuts to a complete grooming experience, every service is
          designed around your look, your comfort and the details that matter.
        </p>
      </section>

      <section
        id="services"
        className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#98713c]">
              Our menu
            </p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Services & pricing
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#716d65]">
            Straightforward pricing. Thoughtful service. Choose the experience
            that works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.name}
              className="border-t border-black/15 py-6 sm:py-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 gap-4">
                  <span className="pt-1 text-xs text-[#a47d42]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-[#716d65]">
                      {service.detail}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-wider text-[#8a857b]">
                      {service.time}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-lg font-semibold">
                  {service.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 border-t border-black/10 pt-5 text-xs leading-5 text-[#817b71]">
          Demonstration prices only. Final prices and services should be
          confirmed by the barbershop.
        </p>
      </section>

      <BookingForm services={services} />

      <section className="bg-[#e7dfd1] px-5 py-14 text-center sm:px-8 sm:py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-[#98713c]">
          Your next cut starts here
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
          Make time for a better haircut.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#666159]">
          Have a question about a service? Get in touch and our team will be
          happy to help.
        </p>
        <a
          href="#contact"
          className="mt-7 inline-flex bg-[#24241f] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#a47d42]"
        >
          CONTACT THE SHOP
        </a>
      </section>

      <footer
        id="contact"
        className="bg-[#24241f] px-5 py-12 text-white sm:px-8 sm:py-16"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          <div>
            <p className="text-lg font-bold tracking-[0.16em]">
              HOLLOWAY <span className="text-[#d4b27b]">& CO.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              A contemporary barbershop concept built around quality cuts,
              considered details and a welcoming experience.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Visit the shop</h3>
            <p className="mt-4 text-sm leading-7 text-white/60">
              Manchester, United Kingdom
              <br />
              Address and opening hours to be confirmed
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Get in touch</h3>
            <p className="mt-4 text-sm leading-7 text-white/60">
              Add the shop's real phone number and email before launch.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Holloway & Co. Demo website.</span>
          <span>Website concept by Nexora Tech</span>
        </div>
      </footer>
    </main>
  );
}
