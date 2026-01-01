export default function DocsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 bg-background text-foreground">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Documentation
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Learn how this website works and how to use its tools.
        </p>
      </header>

      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold">How IP Detection Works</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Your public IP address is detected using trusted third-party APIs
            and displayed in real time.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Accuracy</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Location and ISP data are approximate and depend on external
            providers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Privacy First</h2>
          <p className="text-sm text-muted-foreground mt-2">
            No IP addresses are stored or logged by this website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Supported Protocols</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Both IPv4 and IPv6 are supported automatically.
          </p>
        </div>
      </section>
    </main>
  );
}
