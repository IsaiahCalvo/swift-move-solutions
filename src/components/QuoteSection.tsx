import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const serviceOptions = [
  "Moving",
  "Delivery + Installation",
  "Cleanout / Junk Removal",
  "Jobsite Logistics",
  "Site Preparation",
  "Cleanup Support",
  "Emergency 24/7 Service",
];

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    route: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Quote Request: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\nRoute: ${formData.route}\n\nDetails:\n${formData.details}`
    );
    
    window.location.href = `mailto:info@calvomove.com?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      route: "",
      details: "",
    });
  };

  return (
    <section id="quote" className="py-20 lg:py-28">
      <div className="container-site">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Request a Quote
          </h2>
          <p className="text-muted-foreground">
            Use the form below to generate a pre-filled email request.
          </p>
        </div>

        <div className="max-w-3xl mx-auto card-elevated">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quote-name">Name</Label>
                <Input
                  id="quote-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-phone">Phone</Label>
                <Input
                  id="quote-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-email">Email</Label>
                <Input
                  id="quote-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Service</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-date">Preferred Date</Label>
                <Input
                  id="quote-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-time">Preferred Time Window</Label>
                <Input
                  id="quote-time"
                  placeholder="Morning / afternoon / evening"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote-route">Pickup → Dropoff</Label>
              <Input
                id="quote-route"
                placeholder="Garfield, NJ → Jersey City, NJ"
                value={formData.route}
                onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote-details">Details (items, stairs/elevator, parking, photos link)</Label>
              <Textarea
                id="quote-details"
                rows={6}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Button type="submit" variant="accent">
                Generate Email Request
              </Button>
              <Button type="button" variant="outline" onClick={handleReset}>
                Clear
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
