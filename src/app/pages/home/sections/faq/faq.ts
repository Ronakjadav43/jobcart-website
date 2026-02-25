// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-faq',
//   imports: [],
//   templateUrl: './faq.html',
//   styleUrl: './faq.css',
// })
// export class Faq {

// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './faq.html',
   styleUrl: './faq.css',
})
export class Faq {

  faqItems: FaqItem[] = [
    {
      id: 1,
      question: 'How much does Jobcart cost?',
      answer:
        'Jobcart offers flexible pricing plans tailored to businesses of all sizes. Contact our sales team for a custom quote based on your specific needs.',
    },
    {
      id: 2,
      question: 'What is Jobcart?',
      answer:
        'Jobcart is a comprehensive job management platform designed to streamline recruitment, hiring, and talent management processes for organizations.',
    },
    {
      id: 3,
      question: 'Where is Jobcart available?',
      answer:
        'Jobcart is available globally and can be accessed from anywhere with an internet connection. We serve businesses across multiple continents.',
    },
    {
      id: 4,
      question: 'What types of roles can I fill with Jobcart?',
      answer:
        'Jobcart supports filling roles across all industries and sectors, from entry-level positions to executive roles. Our platform is versatile and scalable.',
    },
  ];
}

