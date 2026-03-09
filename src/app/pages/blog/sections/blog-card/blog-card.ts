import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [DatePipe, RouterModule],
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
