import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  imports: [],
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
