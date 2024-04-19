import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    {
      question: "How do I create a form?",
      answer:
        "To create a form, navigate to the Forms section in the dashboard and click on the 'Create Form' button. You'll be guided through the form creation process step by step.",
    },
    {
      question: "Can I customize the design of my forms?",
      answer:
        "Yes, you can customize the design of your forms by selecting different color schemes, fonts, and themes. Explore the customization options in the Form Design settings.",
    },
    {
      question: "What themes are available for my forms?",
      answer:
        "We offer a variety of themes for your forms, including minimal, quantum, and classic. Choose the theme that best suits your brand or style preferences.",
    },
    {
      question: "How do I change the color scheme of my forms?",
      answer:
        "To change the color scheme of your forms, go to the Form Design settings and select the 'Colors' tab. From there, you can choose from a range of color options or create your custom color palette.",
    },
  ];
  
  
  export default function HelpPage() {
    return (
      <div className="p-6">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold ">FAQs</h2>
              <p className="mt-4 text-muted-foreground">
                Find out about our product and billing. For licensing questions,
                visit our licensing page.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
  