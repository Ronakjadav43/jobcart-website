import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Review {
  title: string;
  description: string;
  image: string;
  name?: string;
  designation?: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.css'],
})
export class Reviews {

 isExpanded = false;

  toggleHeight() {
    this.isExpanded = !this.isExpanded;
  }


  reviews: Review[] = [
    {
      image: 'assets/images/r1.png',
      name: 'John Doe',
      designation: 'CEO, Tech Company',
      title: 'Short-term temporary workers',
      description: 'I had been applying on different platforms for months with no response. Through JobCart, I started getting interview calls within a week. The job alerts actually match your profile instead of sending random listings.',
    },
    {
      image: 'assets/images/r2.png',
      name: 'Jane Smith',
      designation: 'Manager, Retail Company',
      title: 'Long-term temporary workers',
      description: 'For longer-term and project-based work. AI matching for consistent reliability.',
    },
    {
      image: 'assets/images/r3.png',
      name: 'Robert Johnson',
      designation: 'HR Director, Manufacturing Company',
      title: 'Permanent workers to join your team',
      description: 'For hiring your next permanent team member. AI interviews for the perfect fit.',
    },
    {
      image: 'assets/images/r1.png',
      name: 'John Doe',
      designation: 'CEO, Tech Company',
      title: 'Short-term temporary workers',
      description: 'For one-off events and seasonal demand spikes. AI optimization for immediate productivity.',
    },
    {
      image: 'assets/images/r2.png',
      name: 'Jane Smith',
      designation: 'Manager, Retail Company',
      title: 'Long-term temporary workers',
      description: 'For longer-term and project-based work. AI matching for consistent reliability.',
    },
    {
      image: 'assets/images/r3.png',
      name: 'Robert Johnson',
      designation: 'HR Director, Manufacturing Company',
      title: 'Permanent workers to join your team',
      description: 'For hiring your next permanent team member. AI interviews for the perfect fit.',
    },
    {
      image: 'assets/images/r1.png',
      name: 'John Doe',
      designation: 'CEO, Tech Company',
      title: 'Short-term temporary workers',
      description: 'For one-off events and seasonal demand spikes. AI optimization for immediate productivity.',
    },
    {
      image: 'assets/images/r2.png',
      name: 'Jane Smith',
      designation: 'Manager, Retail Company',
      title: 'Long-term temporary workers',
      description: 'For longer-term and project-based work. AI matching for consistent reliability.',
    },
    {
      image: 'assets/images/r3.png',
      name: 'Robert Johnson',
      designation: 'HR Director, Manufacturing Company',
      title: 'Permanent workers to join your team',
      description: 'For hiring your next permanent team member. AI interviews for the perfect fit.',
    },
    {
      image: 'assets/images/r1.png',
      name: 'John Doe',
      designation: 'CEO, Tech Company',
      title: 'Short-term temporary workers',
      description: 'For one-off events and seasonal demand spikes. AI optimization for immediate productivity.',
    },
    {
      image: 'assets/images/r2.png',
      name: 'Jane Smith',
      designation: 'Manager, Retail Company',
      title: 'Long-term temporary workers',
      description: 'For longer-term and project-based work. AI matching for consistent reliability.',
    },
    {
      image: 'assets/images/r3.png',
      name: 'Robert Johnson',
      designation: 'HR Director, Manufacturing Company',
      title: 'Permanent workers to join your team',
      description: 'For hiring your next permanent team member. AI interviews for the perfect fit.',
    },
    {
      image: 'assets/images/r1.png',
      name: 'John Doe',
      designation: 'CEO, Tech Company',
      title: 'Short-term temporary workers',
      description: 'For one-off events and seasonal demand spikes. AI optimization for immediate productivity.',
    },
    {
      image: 'assets/images/r2.png',
      name: 'Jane Smith',
      designation: 'Manager, Retail Company',
      title: 'Long-term temporary workers',
      description: 'For longer-term and project-based work. AI matching for consistent reliability.',
    },
    {
      image: 'assets/images/r3.png',
      name: 'Robert Johnson',
      designation: 'HR Director, Manufacturing Company',
      title: 'Permanent workers to join your team',
      description: 'For hiring your next permanent team member. AI interviews for the perfect fit.',
    },
  ];
}