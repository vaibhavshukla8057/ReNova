import RequestPickupForm from "@/components/RequestPickupForm";

export default function Collection() {
  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-secondary/30 to-background">
      <section className="container mx-auto py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight">Schedule Door‑to‑Door Collection</h1>
          <p className="mt-2 text-muted-foreground max-w-prose">Book a convenient time for our certified team to collect your electronic waste. Free collection for 5+ items!</p>
          <div className="mt-8">
            <RequestPickupForm />
          </div>
        </div>
      </section>
    </div>
  );
}
