import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const serviceOptions = [
  "Moving (small move / apartment / in-building)",
  "Delivery + Assembly / Installation",
  "Junk Removal / Cleanout",
  "Jobsite Support (material runs / staging)",
  "Site Prep (protection / staging)",
  "Cleanup (post-job / debris run)",
  "Emergency 24/7 Service (urgent move / cleanup / delivery)",
];

const QuickQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    route: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Quote Request: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nContact: ${formData.contact}\nService: ${formData.service}\nRoute: ${formData.route}\n\nDetails:\n${formData.details}`
    );
    
    window.location.href = `mailto:info@calvomove.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-card-foreground mb-2">Fast Quote</h2>
      <p className="text-muted-foreground mb-6">Tell us what you need. We'll respond with availability + pricing.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact">Phone or Email</Label>
          <Input
            id="contact"
            placeholder="(201) 555-0123 or you@email.com"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Service Type</Label>
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
          <Label htmlFor="route">Location (Pickup → Dropoff)</Label>
          <Input
            id="route"
            placeholder="Garfield, NJ → Hoboken, NJ (or NYC)"
            value={formData.route}
            onChange={(e) => setFormData({ ...formData, route: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="details">Details</Label>
          <Textarea
            id="details"
            rows={4}
            placeholder="Items, stairs/elevator, preferred date/time, photos link (optional)"
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            required
          />
        </div>

        <Button type="submit" variant="accent" className="w-full">
          Generate Email Request
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          This opens your email app with a pre-filled request.
        </p>
      </form>
    </div>
  );
};

export default QuickQuoteForm;
