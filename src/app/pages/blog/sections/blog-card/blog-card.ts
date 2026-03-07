import { Component, Input  } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  imports: [DatePipe],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCard {
 @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() date!: string;
  @Input() slug!: string;
}
