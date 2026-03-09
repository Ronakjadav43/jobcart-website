import { Component } from '@angular/core';
import data from '../../../data.json';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {
  privacyData = data.privacy[0];

  get formattedDate(): string {
    if (!this.privacyData.createdDt) return '';
    const parts = this.privacyData.createdDt.split('-');
    if (parts.length !== 3) return this.privacyData.createdDt;
    
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
