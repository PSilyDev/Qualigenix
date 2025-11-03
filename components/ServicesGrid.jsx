import Link from "next/link";
import { ChevronRight } from 'lucide-react'

const SERVICES = [
  { title: "Accelerate Cash Conversion", desc: "Swift follow-up reduces lag time between billing and payment, boosting liquidity.", href: "#" },
  { title: "Recover Hard-to-Collect AR", desc: "We pursue aging claims others abandon, boosting AR recovery solutions for your bottom line.", href: "#" },
  { title: "Streamline AR in Health Care", desc: "Our workflows keep every claim moving efficiently within healthcare receivable systems.", href: "#" },
  { title: "Minimize Denials During Follow-Up", desc: "Proactive re-submissions and clean-up guard against errors and strengthen denial management.", href: "#" },
  { title: "Real-Time AR Performance Metrics", desc: "Live dashboards reveal trends and KPIs across AR optimization and collections.", href: "#" },
  { title: "Improve Outstanding Claims Follow-Up", desc: "Focused attention on unpaid files ensures no revenue is overlooked or forgotten.", href: "#" },
  { title: "Optimized Medical Billing AR Process", desc: "Integrated systems align billing and follow-up to reduce backlogs and error propagation.", href: "#" },
  { title: "Scalable AR Collections Support", desc: "Flexible follow-up teams expand with your volume to maintain recovery momentum.", href: "#" },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white">
      <div className="flex flex-col max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <h2 className="max-w-3xl self-center text-center text-[30px] md:text-[36px] leading-tight font-[500] text-[#000000]">
          Drive Every Payment Home with AR Follow Up Services
        </h2>

        {/* Use 12 cols on lg so we can make wide cards (6 cols) on the middle row */}
        <div className="mt-10 grid gap-6 md:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
        {SERVICES.map((s, i) => {
            const isWide = i === 3 || i === 4; // 4th & 5th cards span two columns

            return (
                <article
                    key={i}
                    className={`
                    group relative rounded-2xl
                    px-[32px] md:px-[36px] py-[24px]
                    ring-1 ring-[#0A2E6E]/10
                    bg-[linear-gradient(90deg,rgba(0,88,146,0.10)_-44.21%,rgba(255,255,255,0.40)_144.21%)]
                    shadow-[0_1px_0_#ffffff_inset]
                    transition hover:ring-[#0A2E6E]/20 hover:shadow-[0_1px_0_#ffffff_inset,0_4px_14px_rgba(10,46,110,0.08)]
                    ${isWide ? "lg:col-span-6" : "lg:col-span-4"}
                    h-[280px] md:h-[300px]          /* ← fixed/min card height */
                    flex flex-col                   /* ← column layout */
                    `}
                >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl
                                    bg-[radial-gradient(80%_70%_at_0%_0%,rgba(255,255,255,0.55),transparent_60%)]" />

                    <div className="relative flex-1">
                        <h3 className="text-[20px] md:text-[26px] leading-snug font-[500] text-[#000000]">
                            {s.title}
                        </h3>
                        <p className="mt-8 text-[14.5px] leading-6 text-[#000000]">
                            {s.desc}
                        </p>
                    </div>

                    <div className="mt-auto pt-6 md:pt-8">
                        <Link
                            href={s.href}
                            className="inline-flex items-center gap-2 text-[13.5px] font-[500] text-[#000000] hover:opacity-80"
                        >
                            Explore Solutions
                            <ChevronRight className="self-center w-4 h-4 text-gray-800" />
                        </Link>
                    </div>
                </article>
            );
        })}
        </div>
      </div>
    </section>
  );
}
