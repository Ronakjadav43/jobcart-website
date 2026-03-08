import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export class BlogDetail implements OnInit {
  slug: string | null = null;
  blogData: any = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    if (this.slug) {
      this.fetchBlogDetail();
    } else {
      this.loading = false;
    }
  }

  fetchBlogDetail() {
    this.http.get<any>('/blog-api/web-blog').subscribe({
      next: (res) => {
        if (res && res.data) {
          const decodedSlug = this.slug ? decodeURIComponent(this.slug) : '';
          console.log('Original slug from route:', this.slug);
          console.log('Decoded slug:', decodedSlug);

          this.blogData = res.data.find((b: any) => b.blogUrl === decodedSlug || b.blogUrl === this.slug);

          if (!this.blogData) {
            console.warn('Could not find blog matching slug:', decodedSlug);
          } else {
            console.log('Successfully found blog123:', this.blogData.blogTitle);
          }
        }
        this.loading = false;
        this.cdr.detectChanges(); // Force update view
      },
      error: (err) => {
        console.error('Error fetching blog details', err);
        this.loading = false;
        this.cdr.detectChanges(); // Force update view
      }
    });
  }
}
