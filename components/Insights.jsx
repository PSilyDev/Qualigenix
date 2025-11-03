import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

const POSTS = [
  {
    title: "You’re invited! Join us for Radar: The Analytics details of our journey",
    author: "Rohit Kadam",
    date: "13ᵗʰ Jan 2020",
    href: "#",
  },
  {
    title: "You’re invited! Join us for Radar: The Analytics details of our journey",
    author: "Rohit Kadam",
    date: "13ᵗʰ Jan 2020",
    href: "#",
  },
  {
    title: "You’re invited! Join us for Radar: The Analytics details of our journey",
    author: "Rohit Kadam",
    date: "13ᵗʰ Jan 2020",
    href: "#",
  },
];

export default function Insights() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-center text-[34px] md:text-[44px] font-semibold leading-tight text-[#000000]">
          Insights to Strengthen Your Medical
          <br className="hidden md:block" /> Billing Collections Support
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <article
              key={i}
              className="
                relative flex flex-col justify-center
                w-[352px] h-[292px] mx-auto
                bg-white border border-[#E7E7E7]
                shadow-[3px_5px_6px_rgba(0,0,0,0.16)]
                rounded-2xl overflow-hidden
              "
            >
              {/* Card body per spec: padding-top 56, x 24 */}
              <div className="flex flex-col gap-5 pt-14 px-6 w-[352px]">
                {/* Title */}
                <h3 className="max-w-[250px] h-[128px] text-[24px] leading-8 font-medium text-[#484848]">
                  {p.title}
                </h3>

                {/* Divider */}
                <hr className="w-[304px] border-[#707070]" />

                {/* Author row */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2.5">
                    {/* Avatar – replace src with your author image if you have one */}
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <User />
                    </div>
                    <span className="text-[16px] leading-6 font-medium text-[#707070]">
                      {p.author}
                    </span>
                  </div>

                  <span className="text-[16px] leading-6 font-medium text-[#707070]">
                    {p.date}
                  </span>
                </div>

                {/* Read more (optional) */}
                <Link
                  href={p.href}
                  className="sr-only focus:not-sr-only focus:outline-none text-[#0A2E6E] font-medium"
                >
                  Read more
                </Link>
              </div>

              {/* Bottom blue strip */}
              <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-[#005892]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
