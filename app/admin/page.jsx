"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function AdminPage() {
  const [items, setItems] = useState([]);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      question: "",
      answer: "",
      slug: "",
      sortOrder: 0,
      published: true,
      metaTitle: "",
      metaDescription: "",
    },
  });

  async function load() {
    const res = await fetch("/api/faq", { cache: "no-store" });
    setItems(await res.json());
  }
  useEffect(() => { load(); }, []);

  async function onSubmit(data) {
    await fetch("/api/faq", { method: "POST", body: JSON.stringify(data) });
    reset();
    await load();
    alert("Saved!");
  }
  async function del(id) {
    await fetch("/api/faq", { method: "DELETE", body: JSON.stringify({ id }) });
    await load();
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">FAQ CMS</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-6">
        <input className="border p-2 rounded" placeholder="Question" {...register("question", { required: true })} />
        <textarea className="border p-2 rounded min-h-32" placeholder="Answer (HTML allowed)" {...register("answer", { required: true })} />
        <div className="grid grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="slug" {...register("slug", { required: true })} />
          <input className="border p-2 rounded" type="number" placeholder="sortOrder" {...register("sortOrder", { valueAsNumber: true })} />
        </div>
        <input className="border p-2 rounded" placeholder="metaTitle" {...register("metaTitle")} />
        <input className="border p-2 rounded" placeholder="metaDescription" {...register("metaDescription")} />
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked {...register("published")} /> Published
        </label>
        <button className="rounded bg-black text-white px-4 py-2 w-fit">Save FAQ</button>
      </form>

      <hr className="my-8" />

      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.id} className="flex items-start justify-between gap-4 border p-3 rounded">
            <div>
              <div className="font-medium">{it.question}</div>
              <div className="text-sm text-gray-500">/{it.slug} • order {it.sortOrder} • {it.published ? "published" : "draft"}</div>
            </div>
            <button onClick={() => del(it.id)} className="text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
