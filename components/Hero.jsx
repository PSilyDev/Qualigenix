import Image from "next/image";
import Link from "next/link";
import { FileSliders, CircleStar, BarChart3, ArrowDown } from "lucide-react";
import heroRight from "../public/hero-img.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#F9FBFC] to-[#E8F3FF] min-h-[640px] md:min-h-[700px]">
        <div
        className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center z-0"
        style={{
            maskImage:
            "linear-gradient(to left, white 0%, rgba(255,255,255,0.6) 15%, rgba(255,255,255,0) 40%)",
            WebkitMaskImage:
            "linear-gradient(to left, white 0%, rgba(255,255,255,0.6) 15%, rgba(255,255,255,0) 40%)",
        }}
        />

        <header className="flex flex-col relative z-20 w-full">
            <p className="text-[15px] text-[#000000] self-end pt-6 pr-10">
                connect with us:{" "}
                <span className="font-medium tracking-wide">786-259-0231</span>
            </p>
            <div className="flex justify-between items-center px-8 py-4">
                {/* Logo */}
                <div className="mx-7 text-[#005892] font-extrabold tracking-tight leading-none text-[38px] md:text-[36px] flex items-end">
                    <span className="relative inline-flex items-end">
                        O
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 60 20"
                        className="absolute -bottom-[6px] left-[8px] w-6 h-4"
                        >
                        <path
                            d="M4 12 C 12 6, 20 6, 28 12 S 44 18, 52 12"
                            fill="none"
                            stroke="#C9002C"
                            strokeWidth="14"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                    </span>
                    <span>ualigenix</span>
                </div>
                <div className="flex gap-10">
                {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-8 text-[15px] text-[#111827]">
                        <Link href="#" className="hover:text-[#0A2E6E] flex items-center gap-1">
                            Our Services <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-4 h-4"
                                            >
                                            <path d="M7 17L17 7" />
                                            <path d="M7 7h10v10" />
                                        </svg>
                        </Link>
                        <Link href="#" className="hover:text-[#0A2E6E] flex items-center gap-1">
                            Our Specialties <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-4 h-4"
                                                >
                                                <path d="M7 17L17 7" />
                                                <path d="M7 7h10v10" />
                                            </svg>
                        </Link>
                        <Link href="#" className="hover:text-[#0A2E6E] flex items-center gap-1">
                            About us <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4"
                                        >
                                        <path d="M7 17L17 7" />
                                        <path d="M7 7h10v10" />
                                    </svg>
                        </Link>
                    </nav>
                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="#"
                            className="flex items-center bg-[#005892] gap-2 text-white text-[14px] font-medium rounded-full shadow-sm border border-[#0A2E6E] pl-2.5"
                        >
                        Connect with our experts

                        <span className="inline-flex w-10 h-10 rounded-full bg-white justify-center items-center">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-[#0A2E6E]" 
                            >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                            </svg>
                        </span>
                        </Link>

                    </div>
                </div>
            </div>
        </header>


        <div className="relative z-10 max-w-8xl mx-16 grid md:grid-cols-2 gap-10 px py-25 items-center">
            <div>
                <h1 className="text-[#2C2C2C] text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                    End-to-End AR Follow Up Services for Maximum Recovery
                </h1>
                <p className="mt-4 text-[#2C2C2C] text-lg">
                    AR follow-up in medical billing ensures every claim is tracked,
                    resolved, and paid — boosting your cash flow without delays.
                </p>

                <ul className="mt-10 space-y-5 text-gray-700">
                    <li className="flex align-center gap-4">
                        <div className="flex">
                            <FileSliders className="self-center w-8 h-8 text-gray-800" />
                        </div>    
                        <div>
                            <div className="font-[550] text-2xl">118+ EMR/EHR</div>
                            <p className="text-sm">Flexible, system-agnostic integration</p>
                        </div>
                    </li>
                    
                    <li className="flex align-center gap-4">
                        <div className="flex">
                            <CircleStar className="self-center w-8 h-8 text-gray-800" />
                        </div>    
                        <div>
                        <div className="font-[550] text-2xl">5M+ Prior Auth</div>
                            <p className="text-sm">Fast, accurate approval processing</p>
                        </div>
                    </li>
                    <li className="flex align-center gap-4">
                        <div className="relative inline-flex items-center justify-center">
                            <BarChart3 className="w-8 h-8 text-gray-800" />
                        </div>
                        <div>
                            <div className="font-[550] text-2xl">45+ States</div>
                            <p className="text-sm">Extensive PI & WC coverage</p>
                        </div>
                    </li>
                </ul>

                <div className="mt-18 flex gap-4">
                    <Link
                    href="#"
                    className="bg-black text-white py-0.5 pl-3 rounded-full font-medium flex items-center gap-1"
                    >
                        Book Demo <span className="inline-flex w-10 h-10 mx-0.5 rounded-full bg-white justify-center items-center">
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
                    <Link
                    href="#"
                    className="text-gray-700 flex items-center gap-1 ml-3"
                    >
                    Explore Our Coding Solutions <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-4 h-4"
                                                    >
                                                        <path d="M7 17L17 7" />
                                                        <path d="M7 7h10v10" />
                                                </svg>
                    </Link>
                </div>
            </div>
         </div>
    </section>
  );
}
