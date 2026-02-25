import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Solution {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-solutions',
  imports: [CommonModule],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
solutions: Solution[] = [
    {
      image: 'assets/images/Short-term temporary workers.png',
      title: 'Short-term temporary workers',
      description: 'For one-off events and seasonal demand spikes. AI optimization for immediate productivity.',
    },
    {
       image: 'assets/images/Long-term temporary workers.png',
      title: 'Long-term temporary workers',
      description: 'For longer-term and project-based work. AI matching for consistent reliability.',
    },
    {
      image: 'assets/images/Hire permanent workers to join your team.png',
      title: 'Permanent workers to join your team',
      description: 'For hiring your next permanent team member. AI interviews for the perfect fit.',
    },
  ];
}



