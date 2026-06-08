import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent } from "../components/ui/Card";
import { useGoogleAnalytics } from "../hooks/useGoogleAnalytics";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { trackEvent } = useGoogleAnalytics();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
      trackEvent("form_submit", "Contact", "Contact Form Selected");
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">Contact</h1>
        <p className="text-slate-500">Reach out for support, feedack, or inquiry about the Weather tool.</p>
      </div>

      <Card>
        <CardContent className="p-6">
          {status === "success" ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-bold text-emerald-600 mb-2">Message Sent</h3>
              <p className="text-slate-600 mb-6">Thank you. We'll be in touch shortly.</p>
              <Button onClick={() => setStatus("idle")}>Send Another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-800">Name</label>
                <Input id="name" required placeholder="Jane Doe" disabled={status === "submitting"} />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-800">Email</label>
                <Input id="email" type="email" required placeholder="jane@example.com" disabled={status === "submitting"} />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-800">Message</label>
                <textarea 
                  id="message" 
                  required 
                  className="flex min-h-[120px] w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-900 disabled:cursor-not-allowed disabled:opacity-50" 
                  placeholder="How can we help?"
                  disabled={status === "submitting"}
                />
              </div>
              <Button type="submit" disabled={status === "submitting"} className="w-full">
                {status === "submitting" ? "Sending..." : "Submit"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
