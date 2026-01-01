export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 bg-background text-foreground">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        <p className="text-sm text-muted-foreground">
          Your privacy is important to us. This policy explains how we handle
          information when you use our website.
        </p>

        <div>
          <h2 className="text-lg font-semibold">Information We Collect</h2>
          <p className="text-sm text-muted-foreground mt-2">
            We do not store your IP address or personal data. IP and network
            details are fetched temporarily from third-party APIs.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Third-Party Services</h2>
          <p className="text-sm text-muted-foreground mt-2">
            This website relies on external APIs. We are not responsible for
            their data handling practices.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Security</h2>
          <p className="text-sm text-muted-foreground mt-2">
            We take reasonable measures to protect the website but cannot
            guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Changes</h2>
          <p className="text-sm text-muted-foreground mt-2">
            This policy may be updated at any time. Continued use of the site
            means you accept the revised policy.
          </p>
        </div>
      </section>
    </main>
  );
}
