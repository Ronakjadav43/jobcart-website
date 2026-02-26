import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Menu, X, ChevronRight, BookOpen, TrendingUp, Calendar } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  mobileMenuOpen = false;
  showBusinessSubmenu = false;

  icons = {
    Menu,
    X,
    ChevronRight,
    BookOpen,
    TrendingUp,
    Calendar
  };

  navItems = [
    { label: 'How It Works', href: '#' },
    { label: 'Business', href: '/business' },
     { label: 'Worker', href: '/worker' },
  ];

  businessSubmenuItems = [
    {
      title: 'Blog',
      description: 'Explore the latest trends in flexible work',
      icon: this.icons.BookOpen,
    },
    {
      title: 'Economic Research',
      description: 'Labor market data analysis and insights',
      icon: this.icons.TrendingUp,
    },
    {
      title: 'Events',
      description: 'Upcoming live events and webinars',
      icon: this.icons.Calendar,
    },
  ];

  openMenu() {
    this.mobileMenuOpen = true;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
    this.showBusinessSubmenu = false;
  }
}
