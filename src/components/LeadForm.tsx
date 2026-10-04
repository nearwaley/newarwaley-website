"use client";

import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { submitForm, type FormType } from "@/lib/submit";
import { whatsappLink } from "@/lib/site";

export type Field =
  | { kind: "text" | "tel" | "email"; name: string; label: string; placeholder?: string; required?: boolean; wide?: boolean }
  | { kind: "select"; name: string; label: string; options: readonly string[]; required?: boolean; wide?: boolean }
  | { kind: "textarea"; name: string; label: string; placeholder?: string; required?: boolean; rows?: number }
  | { kind: "choice"; name: string; label: string; options: readonly string[] };

type Tone = "light" | "red";

const tones = {
  light: {
    label: "text-subtle",
    input: "border-[#cfc4c4] text-ink placeholder:text-[#a99d9d] focus:border-brand",
    chip: "border-[#cfc4c4] has-[:checked]:border-brand has-[:checked]:bg-brand has-[:checked]:text-white",
    button: "pill-red",
    note: "text-subtle",
    error: "text-brand",
  },
  red: {
    label: "text-[#ffd3d7]",
    input: "border-white/50 text-white placeholder:text-white/60 focus:border-white [&>option]:text-ink",
    chip: "border-white/50 text-white has-[:checked]:border-white has-[:checked]:bg-white has-[:checked]:text-brand",
    button: "pill-white",
    note: "text-[#ffd3d7]",
    error: "text-white font-semibold",
  },
} as const;

export function LeadForm({
  type,
  fields,
  submitLabel,
  note,
  success,
  tone = "light",
}: {
  type: FormType;
  fields: Field[];
  submitLabel: string;
  note?: string;
  success: { eyebrow: string; title: string; body: string };
  tone?: Tone;
}) {
  const uid = useId();
  const t = tones[tone];
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [via, setVia] = useState<"email" | "whatsapp">("email");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("company_website")) return; // honeypot: bots fill hidden fields

    const labeled: Record<string, string> = {};
    const values: Record<string, string> = {};
    for (const f of fields) {
      const v = String(fd.get(f.name) ?? "").trim();
      labeled[f.label] = v;
      values[f.name] = v;
    }

    setStatus("sending");
    try {
      setVia(await submitForm(type, labeled, values));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "sent" ? (
        <motion.div
          key="done"
          role="status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 0.84, 0.24, 1] }}
          className={`flex flex-col gap-5 border-t-2 pt-8 ${tone === "red" ? "border-white" : "border-brand"}`}
        >
          <span className={`eyebrow ${tone === "red" ? "text-[#ffd3d7]" : "text-brand"}`}>{success.eyebrow}</span>
          <p className="t-h2 !text-[clamp(32px,4vw,56px)]">{success.title}</p>
          <p className={`t-body max-w-[480px] ${tone === "red" ? "text-blush" : "text-muted"}`}>
            {via === "whatsapp" ? "We've opened WhatsApp with your details — just press send." : success.body}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`pill ${t.button}`}>
              Message us on WhatsApp
            </a>
            <button type="button" onClick={() => setStatus("idle")} className="pill pill-line">
              Send another
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex flex-col gap-8"
          noValidate={false}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {fields.map((f) => {
              const id = `${uid}-${f.name}`;
              const base = `w-full appearance-none rounded-none border-0 border-b-[1.5px] bg-transparent py-2 text-[21px] font-medium outline-none transition-colors min-h-[46px] ${t.input}`;
              const labelEl = (
                <label htmlFor={id} className={`eyebrow !text-[12px] !tracking-[0.12em] ${t.label}`}>
                  {f.label}
                  {"required" in f && f.required ? <span aria-hidden="true"> *</span> : null}
                </label>
              );

              if (f.kind === "choice") {
                return (
                  <fieldset key={f.name} className="sm:col-span-2">
                    <legend className={`eyebrow mb-3.5 !text-[12px] !tracking-[0.12em] ${t.label}`}>{f.label}</legend>
                    <div className="flex flex-wrap gap-2.5">
                      {f.options.map((o, i) => (
                        <label
                          key={o}
                          className={`inline-flex min-h-12 cursor-pointer items-center rounded-full border-[1.5px] px-5 text-base font-medium transition-colors ${t.chip}`}
                        >
                          <input type="radio" name={f.name} value={o} defaultChecked={i === 0} className="sr-only" />
                          {o}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                );
              }

              const span = f.kind === "textarea" || ("wide" in f && f.wide) ? "sm:col-span-2" : "";
              return (
                <div key={f.name} className={`flex flex-col gap-1.5 ${span}`}>
                  {labelEl}
                  {f.kind === "select" ? (
                    <select id={id} name={f.name} required={f.required} className={`${base} cursor-pointer`}>
                      {f.options.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  ) : f.kind === "textarea" ? (
                    <textarea
                      id={id}
                      name={f.name}
                      rows={f.rows ?? 3}
                      required={f.required}
                      placeholder={f.placeholder}
                      className={`${base} resize-y`}
                    />
                  ) : (
                    <input
                      id={id}
                      name={f.name}
                      type={f.kind}
                      required={f.required}
                      placeholder={f.placeholder}
                      autoComplete={f.kind === "tel" ? "tel" : f.kind === "email" ? "email" : f.name === "name" ? "name" : "off"}
                      inputMode={f.kind === "tel" ? "tel" : undefined}
                      pattern={f.kind === "tel" ? "[+0-9 ]{10,15}" : undefined}
                      title={f.kind === "tel" ? "Enter a valid phone number" : undefined}
                      className={base}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Honeypot — hidden from people, tempting for bots */}
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="flex flex-wrap items-center gap-5">
            <button type="submit" disabled={status === "sending"} className={`pill ${t.button} min-h-[58px] px-8`}>
              {status === "sending" ? "Sending…" : submitLabel}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            {note && <span className={`text-sm ${t.note}`}>{note}</span>}
          </div>
          {status === "error" && (
            <p role="alert" className={`text-sm ${t.error}`}>
              Something went wrong. Please try again, or message us on WhatsApp.
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
