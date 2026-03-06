// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-blog',
//   imports: [],
//   templateUrl: './blog.html',
//   styleUrl: './blog.css',
// })


// export class Blog {


// blogs = [
//   {
//     title: 'Best Skin Treatment',
//     slug: 'best-skin-treatment',
//     image: 'assets/blog1.jpg',
//     description: 'Best treatment for glowing skin'
//   },
//   {
//     title: 'Hair Fall Solution',
//     slug: 'hair-fall-solution',
//     image: 'assets/blog2.jpg',
//     description: 'How to stop hair fall naturally'
//   }
// ];


// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCard } from "./sections/blog-card/blog-card";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, BlogCard],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

   blogs = [
    {
      title: 'Is a Career in Real Estate Right for You?',
      description: 'Numerous experts from several fields work together in the real estate market. These include mortgage and insurance brokers, real estate agents, financial planners, attorneys, and appraisers. Typically, these experts collaborate to assist homebuyers and sellers, guide clients toward the most competitive mortgage programs, and assess their insurance needs. You may find that this line of work appeals to you more after reading more about the duties and obligations of the job in this field.',
      image: 'https://jcassets.jobcart.ca/blog/blog_8631_22_29_58.jpg',
      date: 'April 4, 2025',
      slug: 'is-a-career-in-real-estate-right-for-you'
    },
    {
      title: '12 Employment in Management Information Systems With Salaries',
      description: 'To develop in many areas, most contemporary companies collect and analyze vast volumes of data. Organization and usage of this data are accomplished by businesses using management information systems (MIS). Finding out more about a profession in management information systems can enable you to compile firm data and provide reports that will enable you to make better, more knowledgeable business choices. In this article, we define management information system jobs and provide a list of twelve such positions along with details on their main responsibilities and pay.',
      image: 'https://jcassets.jobcart.ca/blog/blog_5596_20_07_44.jpg',
      date: 'April 6, 2025',
      slug: '12 Employment in Management Information Systems With Salaries'
    },
    {
      title: 'How a Staff Engineer Differs from a Senior Engineer',
      description: 'Software engineers and developers sometimes get titles that reflect their degree of experience, years of expertise, or length of service to the firm. In a business, two types of advanced individuals manage software development in various ways: staff engineers and software engineers. Acquiring knowledge about these positions may assist you in choosing one that better suits your abilities, background, and aspirations. This article defines these words, discusses their contrasts, and explains why you may hear about staff engineers vs. senior engineers.',
      image: 'https://jcassets.jobcart.ca/blog/blog_3578_18_34_51.jpg',
      date: 'April 10, 2025',
      slug: 'How a Staff Engineer Differs from a Senior Engineer'
    }
  ];

}