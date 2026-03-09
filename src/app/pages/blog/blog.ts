import { CommonModule } from '@angular/common';
import { BlogCard } from './sections/blog-card/blog-card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, BlogCard, MatPaginatorModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
  blogs: any[] = [];
  pagedBlogs: any[] = [];
  loading: boolean = true;

  pageSize = 6;
  pageIndex = 0;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs(): void {
    this.loading = true;
    this.http.get<any>('/blog-api/web-blog').subscribe({
      next: (response) => {
        if (response && response.data) {
          this.blogs = response.data;
          this.updatePagedBlogs();
        }
        this.loading = false;
        this.cdr.detectChanges(); // Force update view
      },
      error: (error) => {
        console.error('Error fetching blogs:', error);
        this.loading = false;
        this.cdr.detectChanges(); // Force update view
      },
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedBlogs();
  }

  updatePagedBlogs(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedBlogs = this.blogs.slice(startIndex, endIndex);
  }
}
