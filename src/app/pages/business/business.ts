import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { TrustedLogos } from './sections/trusted-logos/trusted-logos';
import { HiringSection } from './sections/hiring-section/hiring-section';
import { Reviews } from './sections/reviews/reviews';
import { Solutions } from '../home/sections/solutions/solutions';
import { AppPromo } from '../home/sections/app-promo/app-promo';
import { Faq } from '../home/sections/faq/faq';

@Component({
  selector: 'app-business',
  imports: [Hero, TrustedLogos, HiringSection, Reviews, Solutions, AppPromo, Faq],
  templateUrl: './business.html',
  styleUrl: './business.css',
})
export class Business {}
