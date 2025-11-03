// app/components/Testimonials.jsx
import Image from "next/image";
import { User } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Dr. Olivia Bennett",
    role: "Medical Director, Northshore Health",
    quote:
      "Working with this company has been a game changer for our business. From the initial consultation to the final execution.",
    avatar: <User />,
    rating: 5,
  },
  {
    name: "Sara Smith",
    role: "Marketing Director",
    quote:
      "Our experience with this awesome company has been nothing short of exceptional. Their dedication to success was evident at every stage.",
    avatar: <User />,
    rating: 5,
  },
  {
    name: "Michael Anderson",
    role: "Head of Operations",
    quote:
      "They helped us redefine our entire strategy and implemented creative solutions that brought our vision to life with results.",
    avatar: <User />,
    rating: 5,
  },
];

// simple star row
function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="#FFB66E"
          aria-hidden
        >
          <path d="M12 .587l3.668 7.431L24 9.753l-6 5.832 1.417 8.265L12 19.771l-7.417 4.079L6 15.585 0 9.753l8.332-1.735z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  // 6 cards like the reference (two rows of three)
  const CARDS = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-white">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-[28px] md:text-[34px] font-semibold text-[#4A4A4A]">
            Real Results Reflected Through AR
            <br className="hidden md:block" />
            {" "}Performance Metrics in Healthcare
          </h2>
          <p className="mt-5 text-[#71717A]">
            Our clients share how AR management in medical billing
            helped them recover faster and stress less.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((t, i) => (
            <article
              key={i}
              className="
                relative overflow-hidden
                rounded-[15px]
                bg-[#005892]
                shadow-[0_0.6px_0.6px_-1.25px_rgba(0,0,0,0.11),0_2.29px_2.29px_-2.5px_rgba(0,0,0,0.10),0_10px_10px_-3.75px_rgba(0,0,0,0.04)]
                border border-[#27272A]/50
                min-h-[344px]
                px-7 pt-7 pb-[92px]
                text-[#FFFaf7]
              "
            >
              {/* Stars */}
              <div className="absolute top-6 right-6">
                <Stars count={t.rating} />
              </div>

              {/* Quote */}
              <p className="text-[15px] leading-[29px] tracking-[0.48px] pr-4 mt-14">
                {t.quote}
              </p>

              {/* Dashed divider (sits above avatar pill) */}
              <div className="absolute left-6 right-6 bottom-[92px] border-t border-dashed border-[#3F3F46]" />

              {/* Avatar pill */}
              <div className="absolute left-6 right-6 bottom-4 h-[60px] flex content-center items-center gap-3 px-3">
                <div className="border rounded-full px-2  py-2 flex content-center items-center">
                  {t.avatar}
                  {/* <span className="absolute inset-0 ring-2 ring-white/95" /> */}
                </div>
                <div className="leading-5">
                  <div className="text-[15.4px] font-medium tracking-[0.48px] text-white">
                    {t.name}
                  </div>
                  <div className="text-[12.7px] tracking-[0.28px] text-[#71717A]">
                    {t.role}
                  </div>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
