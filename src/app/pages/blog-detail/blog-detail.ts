import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  imports: [],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export class BlogDetail {
  constructor(private route: ActivatedRoute){}

  slug:any;

ngOnInit(){
this.slug = this.route.snapshot.paramMap.get('slug');
}
}
