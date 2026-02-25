// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-comparison',
//   imports: [],
//   templateUrl: './comparison.html',
//   styleUrl: './comparison.css',
// })
// export class Comparison {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CheckCircle, XCircle } from 'lucide-angular';

type Mark = 'check' | 'number' | 'x';

interface Feature {
  title: string;
  description: string;
  jobcartValue: string; // ReactNode -> string here (your data is string/empty)
  jobcartMark: 'check' | 'number';
  traditionalValue: string;
  traditionalMark: 'x' | 'number';
}

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './comparison.html',
  styleUrl: './comparison.css',
})
export class Comparison {
  // Register icons for lucide-angular
  readonly icons = { CheckCircle, XCircle };

  readonly features: Feature[] = [
    {
      title: 'Time to fill a shift',
      description: '',
      jobcartValue: 'Less than 24 hrs',
      jobcartMark: 'number',
      traditionalValue: '7-10 days',
      traditionalMark: 'number',
    },
    {
      title: 'Worker show rate',
      description: 'Predictive AI reduces no-shows through early intervention',
      jobcartValue: '98%',
      jobcartMark: 'check',
      traditionalValue: '50-60%',
      traditionalMark: 'x',
    },
    {
      title: 'AI-powered worker matching',
      description:
        'Precision matching analyzes your requirements and connects you with the most reliable, qualified workers',
      jobcartValue: '',
      jobcartMark: 'check',
      traditionalValue: '',
      traditionalMark: 'x',
    },
    {
      title: 'Comprehensive vetting',
      description:
        'AI-powered skill assessments, background checks, and competency quizzes that qualify workers before they work',
      jobcartValue: '',
      jobcartMark: 'check',
      traditionalValue: '',
      traditionalMark: 'x',
    },
    {
      title: 'Searchable worker profiles',
      description:
        'Rich profiles with photos, work history, ratings, and references in your dashboard',
      jobcartValue: '',
      jobcartMark: 'check',
      traditionalValue: '',
      traditionalMark: 'x',
    },
    {
      title: 'Redefined reliability',
      description:
        'Smart reminders, pre-shift announcements, and automated backup worker deployment',
      jobcartValue: '',
      jobcartMark: 'check',
      traditionalValue: '',
      traditionalMark: 'x',
    },
    {
      title: 'Precision time tracking',
      description:
        'Geofencing and AI monitoring for accurate billing and on-time worker arrivals',
      jobcartValue: '',
      jobcartMark: 'check',
      traditionalValue: '',
      traditionalMark: 'x',
    },
  ];

  trackByIndex(index: number): number {
    return index;
  }
}