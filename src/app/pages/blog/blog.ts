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

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

  blogs = [
    {
      title: 'Best Skin Treatment',
      slug: 'best-skin-treatment',
      image: 'assets/blog1.jpg',
      description: 'Best treatment for glowing skin'
    },
    {
      title: 'Hair Fall Solution',
      slug: 'hair-fall-solution',
      image: 'assets/blog2.jpg',
      description: 'How to stop hair fall'
    }
  ];

}