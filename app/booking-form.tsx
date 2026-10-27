"use client";

import { useEffect, useState, type FormEvent } from "react";

type Service = {
  name: string;
  detail: string;
  time: string;
  price: string;
};

type BookingFormProps = {
  services: Service[];
};

const ENDPOINT = "https://formsubmit.app/f/7f7hyrva9t";

export default function BookingForm({ services }: BookingFormProps) {
  const [selectedService, setSelectedService] = useState(
    services[0]?.name ?? "",
  );
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error?.message || "Unable to send your request.",
        );
      }

      setStatus("success");
      form.reset();
      setSelectedService(services[0]?.name ?? "");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const localDate = new Date(
      today.getTime() - today.getTimezoneOffset() * 60000,
    )
      .toISOString()
      .split("T")[0];

    setMinDate(localDate);
  }, []);

  return (
    <section
      id="booking"
      className="bg-[#24241f] px-5 py-16 text-white sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4b27b]">
            Book your visit
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Your next great cut starts here.
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
            Choose your service, preferred date and time, and tell us how to
            contact you.
          </p>

          <div className="mt-8 border-t border-white/15 pt-6 text-sm text-white/65">
            <p>12 grooming services</p>
            <p className="mt-2">Clear pricing and service durations</p>
            <p className="mt-2">Appointment requests by email</p>
          </div>
        </div>

        <div className="bg-[#f5f1e9] p-5 text-[#20201d] sm:p-8">
          {status === "success" ? (
            <div role="status" className="py-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#98713c]">
                Request sent
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Thanks for your interest.
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#66635c]">
                Your request was submitted successfully. Your appointment is not
                confirmed until the barbershop confirms it.
              </p>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 bg-[#24241f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a47d42]"
              >
                MAKE ANOTHER REQUEST
              </button>
            </div>
          ) : (
            <form
              action={ENDPOINT}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold"
                >
                  Choose a service
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  value={selectedService}
                  onChange={(event) => setSelectedService(event.target.value)}
                  className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#a47d42]"
                >
                  {services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name} — {service.price} ({service.time})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="booking-date"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Preferred date
                  </label>
                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    required
                    min={minDate || undefined}
                    className="w-full min-w-0 border border-black/15 bg-white px-3 py-3 text-sm outline-none focus:border-[#a47d42]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-time"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Preferred time
                  </label>
                  <select
                    id="booking-time"
                    name="time"
                    required
                    defaultValue=""
                    className="w-full border border-black/15 bg-white px-3 py-3 text-sm outline-none focus:border-[#a47d42]"
                  >
                    <option value="" disabled>
                      Select time
                    </option>
                    {[
                      "10:00",
                      "10:30",
                      "11:00",
                      "11:30",
                      "12:00",
                      "12:30",
                      "13:00",
                      "13:30",
                      "14:00",
                      "14:30",
                      "15:00",
                      "15:30",
                      "16:00",
                      "16:30",
                      "17:00",
                      "17:30",
                    ].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="customer-name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your name
                </label>
                <input
                  id="customer-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Enter your full name"
                  className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#a47d42]"
                />
              </div>

              <div>
                <label
                  htmlFor="customer-email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email address
                </label>
                <input
                  id="customer-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                  className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#a47d42]"
                />
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm leading-6 text-red-700">
                  Request send nahi hui: {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#24241f] px-6 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-[#a47d42] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? "SENDING REQUEST..."
                  : "REQUEST APPOINTMENT"}
              </button>

              <p className="text-xs leading-5 text-[#817b71]">
                This is an appointment request, not a confirmed booking.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
