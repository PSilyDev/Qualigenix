export default function FollowUpFeatures() {
    const features = [
      {
        title: "Predictive Claim Alerts",
        desc: "Early warning signals trigger follow-up on high-risk unpaid claims before they age out.",
      },
      {
        title: "Escalation Workflow Trigger",
        desc: "Automatically escalate unresolved accounts to higher review levels for faster resolution.",
      },
      {
        title: "Payment Promise Tracking",
        desc: "Track payer commitments and enforce timely remittance to prevent extended delays.",
      },
      {
        title: "Denial & AR Routing",
        desc: "Combine denial and AR management to route issues to the right team promptly.",
      },
    ];
  
    return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight text-[#000000]">
              AR Follow-Up Services That
              <br className="hidden md:block" />
              Maximize Recovery and Minimize Delays
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Our accounts receivable follow-up services simplify payer communication and speed up reimbursements.
              From tracking aged claims to closing payment gaps, we ensure your revenue stays in motion.
            </p>
          </div>
  
          {/* Feature Cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <article
                key={i}
                className="
                  flex flex-col justify-between items-start
                  w-[288px] h-[300px] mx-auto
                  bg-gradient-to-b from-[#CFECFF] to-[#FFFFFF]
                  rounded-[16px] p-[30px] gap-[10px]
                  shadow-[inset_0_0_0_1px_rgba(10,46,110,0.06)]
                  hover:shadow-[0_4px_16px_rgba(10,46,110,0.1)]
                  transition
                "
              >
                <div className="flex flex-col gap-6">
                  {/* Icon (Lightning) */}
                  <div className="w-[48px] h-[48px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3A1912"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                    </svg>
                  </div>
  
                  {/* Title + Description */}
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[#3A1912] text-[20px] font-medium leading-[30px] tracking-[-0.2px]">
                      {f.title}
                    </h3>
                    <p className="text-[#000000] text-[16px] leading-[22px] tracking-[0.48px]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  