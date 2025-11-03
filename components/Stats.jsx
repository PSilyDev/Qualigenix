export default function Stats() {
    const items = [
      { value: "63K",
        desc: "Patient collection rate supported by real-time eligibility and payment tracking." },
      { value: "36 Days",
        desc: "Average collection cycle achieved through payer-driven workflow optimization." },
      { value: "75%",
        desc: "Credentialing applications processed with automated healthcare billing process integrations." },
    ];
  
    return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {items.map((it, i) => (
              <div key={i} className="flex flex-col">
                <div className="h-16 md:h-20 flex items-end">
                  <div className="text-5xl md:text-6xl font-semibold tracking-tight text-[#005892] leading-none">
                    {it.value}
                  </div>
                </div>
  
                <p className="mt-10 text-gray-600 max-w-xs">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  