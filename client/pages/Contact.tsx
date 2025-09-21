import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [params] = useSearchParams();
  const preSubject = params.get("subject") ?? "";
  const preMessage = params.get("message") ?? "";

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    toast.success(`Thanks, ${name || "we"} received your message!`);
    form.reset();
  };

  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-secondary/30 to-background">
      <section className="container mx-auto py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight">Send us a Message</h1>
          <p className="mt-2 text-muted-foreground">We'd love to hear from you. Fill in the form and we'll get back to you soon.</p>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Contact form</CardTitle>
              <CardDescription>Tell us more about your inquiry...</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={submit} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="How can we help?" defaultValue={preSubject} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us more about your inquiry..." defaultValue={preMessage} rows={6} required />
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Send Message</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
