import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TrustedLogo {
  id: string;
  image: string;
}

@Component({
  selector: 'app-trusted-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trusted-logos.html',
  styleUrls: ['./trusted-logos.css'],
})
export class TrustedLogos {

  trustedlogos: TrustedLogo[] = [
    { id: '1', image: 'assets/images/trustedLogos/t1.png' },
    { id: '2', image: 'assets/images/trustedLogos/t2.png' },
    { id: '3', image: 'assets/images/trustedLogos/t3.png' },
    { id: '4', image: 'assets/images/trustedLogos/t4.png' },
    { id: '5', image: 'assets/images/trustedLogos/t5.png' },
  ];
}