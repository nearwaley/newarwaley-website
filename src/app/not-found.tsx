import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="wrap flex flex-col gap-8">
        <p className="eyebrow text-brand">404</p>
        <h1 className="t-mega">
          This page went <span className="text-brand">off-grid.</span>
        </h1>
        <p className="t-lede max-w-[560px] text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div>
          <Link href="/" className="pill pill-red">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
