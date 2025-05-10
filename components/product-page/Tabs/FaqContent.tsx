import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    question: "How do I find a specific book in your store?",
    answer: "You can search by title, author, or ISBN using our search bar. Our staff can also help you locate books in our physical store or recommend similar titles."
  },
  {
    question: "Do you offer book recommendations?",
    answer: "Yes! Our knowledgeable staff provides personalized recommendations based on your reading preferences. You can also browse our curated collections and monthly picks."
  },
  {
    question: "Can I order books that aren't currently in stock?",
    answer: "Absolutely. We can special order most titles and typically receive them within 3-7 business days. We'll notify you when your book arrives."
  },
  {
    question: "Do you buy back used books?",
    answer: "We offer store credit for gently used books in good condition. Bring them to our buyback counter for evaluation during business hours."
  },
  {
    question: "What are your shipping options and delivery times?",
    answer: "We offer standard (5-7 days), expedited (2-3 days), and in-store pickup. Local delivery is available within 10 miles for a small fee."
  },
  {
    question: "What is your return policy for books?",
    answer: "New books can be returned within 14 days with receipt. For damaged/defective books, we offer exchanges at any time. Unfortunately, we cannot accept returns on used books."
  },
  {
    question: "Do you host author events or book clubs?",
    answer: "Yes! We host regular author readings, signings, and book club meetings. Check our events calendar or join our mailing list for updates."
  },
  {
    question: "Do you offer gift wrapping services?",
    answer: "We provide complimentary gift wrapping for all purchases during the holiday season, and year-round for a small fee. Gift receipts are always available."
  }
];

const FaqContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Frequently asked questions
      </h3>
      <Accordion type="single" collapsible>
        {faqsData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;
