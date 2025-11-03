import { ShieldCheck, HeartPulse, BriefcaseMedical, SquareActivity, Stethoscope, HouseHeart, Bone, Ambulance, Hospital, HousePlus, Brain } from "lucide-react";
import Link from "next/link";
export default function Specialties() {
    const items = [
      { label: "Cardiology", sub: "Cardiology", icon: <HeartPulse /> },
      { label: "Family medicine", sub: "Family medicine", icon: <BriefcaseMedical /> },
      { label: "Durable medical equipment", sub: "Durable medical equipment", icon: <SquareActivity /> },
      { label: "Gastroenterology", sub: "Gastroenterology", icon: <Stethoscope /> },
      { label: "Home Health", sub: "Home Health", icon: <HouseHeart /> },
      { label: "Orthopedics", sub: "Orthopedics", icon: <Bone /> },
      { label: "Primary Care", sub: "Primary Care", icon: <Ambulance /> },
      { label: "Emergency Medicine", sub: "Emergency Medicine", icon: <Hospital /> },
      { label: "Pediatrics", sub: "Pediatrics", icon: <HousePlus /> },
      { label: "Behavioral Health", sub: "Behavioral Health", icon: <Brain /> },
    ];
  
    return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 grid place-items-center border-[#0A2E6E]/20">
                <ShieldCheck className="self-center w-18 h-18 text-[#005892]" />
            </div>
            <h2 className="mt-16 text-3xl md:text-4xl font-medium leading-tight text-[#1D1D1D]">
              Expertise Across Accounts<br className="hidden md:block" /> Receivable Follow Up Services
            </h2>
          </div>
  
          <div className="mt-18 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {items.map((it, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-2xl bg-[#005892] text-white grid place-items-center shadow">
                  <span className="text-xl" aria-hidden>{it.icon}</span>
                </div>
                <div className="mt-4">
                  <div className="font-medium">{it.label}</div>
                  <div className="text-sm text-gray-500">{it.sub}</div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-18 flex justify-center">
          <Link
                    href="#"
                    className="bg-black text-white py-0.5 pl-3 rounded-full font-medium flex items-center gap-1"
                    >
                        View all our experts <span className="inline-flex w-10 h-10 mx-0.5 rounded-full bg-white justify-center items-center">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-[#000000]" 
                            >
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </span>
                    </Link>
          </div>
        </div>
      </section>
    );
  }
  