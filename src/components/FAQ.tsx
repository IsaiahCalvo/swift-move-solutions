import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you handle NJ ↔ NYC jobs?",
    answer:
      "Yes—NJ + NYC when priced appropriately for tolls, parking, and building logistics. Share details and we'll quote accurately.",
  },
  {
    question: "Do you offer premium 24/7 emergency service?",
    answer:
      "Yes. For urgent moves, cleanouts, deliveries, or jobsite needs, we offer premium 24/7 support based on availability. Emergency requests are priced at a premium.",
  },
  {
    question: "What size jobs do you take?",
    answer:
      "We focus on small moves, deliveries, cleanouts, and jobsite support that fit a van or small truck setup. If your job needs a bigger truck, we can still quote it based on scope.",
  },
  {
    question: "Can you do installation and cleanup on renovation sites?",
    answer:
      "Yes—installation support, site prep, staging, and cleanup are part of our add-on services, especially for GCs, landlords, and turnovers.",
  },
  {
    question: "How do you quote?",
    answer:
      "Best quotes come from photos/videos, stairs/elevator info, parking, and timing. That prevents surprises and keeps the job smooth.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 section-alt">
      <div className="container-site">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            FAQ
          </h2>
          <p className="text-muted-foreground">
            Quick answers to common questions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated border-0 px-6"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
