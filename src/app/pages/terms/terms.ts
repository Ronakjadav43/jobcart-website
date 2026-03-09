import { Component } from '@angular/core';
import data from '../../../data.json';

@Component({
  selector: 'app-terms',
  imports: [],
  templateUrl: './terms.html',
  styleUrl: './terms.css',
})
export class Terms {
  termData = data.terms[0];

  get formattedDate(): string {
    if (!this.termData.createdDt) return '';
    const parts = this.termData.createdDt.split('-');
    if (parts.length !== 3) return this.termData.createdDt;
    
    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const getOrdinalNum = (n: number) => {
      return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
    };

    return `Last update: ${getOrdinalNum(day)}, ${months[monthIndex]} ${year}`;
  }
}
