"use client";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-background px-6 py-24">
      <div className="w-full max-w-2xl space-y-3">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">
          Superset
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Frontend Interview
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          A starter template for the Superset frontend interview. Edit{" "}
          <code className="font-mono text-foreground">app/page.tsx</code> to
          begin.
        </p>
      </div>
    </main>
  );
}
