// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-industries',
//   imports: [],
//   templateUrl: './industries.html',
//   styleUrl: './industries.css',
// })
// export class Industries {

// }




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IndustryCard {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.html',
   styleUrl: './industries.css',
})
export class Industries {
  industries: IndustryCard[] = [
    {
      id: 'warehousing',
      title: 'Warehousing',
      subtitle: 'Find workers',
      image: 'assets/images/Link1.png',
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce Fulfillment',
      subtitle: 'Find workers',
      image: '/assets/images/Link2.png',
    },
    {
      id: '3pl',
      title: 'Third-Party Logistics (3PL)',
      subtitle: 'Find workers',
      image: '/assets/images/Link3.png',
    },
    {
      id: 'dining',
      title: 'Dining Facilities',
      subtitle: 'Find workers',
     image: '/assets/images/Link4.png',
    },
    {
      id: 'stadiums',
      title: 'Stadiums & Events',
      subtitle: 'Find workers',
      image: '/assets/images/Link5.png',
    },
    {
      id: 'retail',
      title: 'Retail Operations',
      subtitle: 'Find workers',
      image: '/assets/images/Link6.png',
    },
  ];
}
