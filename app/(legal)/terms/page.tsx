export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 bg-background text-foreground">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      {/* Card */}
      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        {/* Intro */}
        <p className="text-sm text-muted-foreground">
          By accessing or using this website, you agree to be bound by these
          Terms and Conditions. If you do not agree with any part of the terms,
          you must not use this site.
        </p>

        {/* Section */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">1. Use of the Website</h2>
          <p className="text-sm text-muted-foreground">
            This website is provided for informational purposes only. You agree
            to use the site lawfully and not engage in any activity that may harm,
            disrupt, or interfere with the website or its services.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">2. IP Address Information</h2>
          <p className="text-sm text-muted-foreground">
            The IP address and related network information displayed on this
            website are fetched from third-party services. We do not guarantee
            the accuracy, completeness, or reliability of this information.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">3. Privacy</h2>
          <p className="text-sm text-muted-foreground">
            We do not store your IP address or personal data unless explicitly
            stated. Please review our Privacy Policy to understand how we handle
            information.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">4. Third-Party Services</h2>
          <p className="text-sm text-muted-foreground">
            This site may rely on third-party APIs and external services. We are
            not responsible for the availability, behavior, or content of these
            services.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">5. Limitation of Liability</h2>
          <p className="text-sm text-muted-foreground">
            Under no circumstances shall we be liable for any direct, indirect,
            incidental, or consequential damages resulting from the use or
            inability to use this website.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">6. Changes to Terms</h2>
          <p className="text-sm text-muted-foreground">
            We reserve the right to update or modify these terms at any time
            without prior notice. Continued use of the site constitutes your
            acceptance of the revised terms.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">7. Contact</h2>
          <p className="text-sm text-muted-foreground">
            If you have any questions regarding these Terms and Conditions,
            please contact us through the information provided on this website.
          </p>
        </div>
      </section>
    </main>
  );
}
