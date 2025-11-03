"use client";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify"; 

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/faq?published=1", { cache: "no-store" });
        const data = await res.json();
        const sorted = data.sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
        setFaqs(sorted);
      } catch (err) {
        console.error("Failed to load FAQs:", err);
      }
    }
    load();
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">

        {faqs.length === 0 ? (
          <p className="mt-6 text-gray-500">No FAQs available.</p>
        ) : (
          <div className="mt-8 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <details
                key={faq.id}
                className="group py-5 transition-all duration-200"
              >
                <summary className="list-none cursor-pointer flex items-start justify-between gap-4">
                  <span className="text-[17px] font-[550] text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-gray-500 mt-1 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div
                  className="mt-3 text-gray-700 leading-relaxed prose prose-p:my-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(faq.answer),
                  }}
                />
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
