import { Component } from '@angular/core';
import { Hero } from "./sections/hero/hero";
import { Comparison } from "./sections/comparison/comparison";
import { Industries } from "./sections/industries/industries";
import { Solutions } from "./sections/solutions/solutions";
import { AppPromo } from "./sections/app-promo/app-promo";
import { Faq } from "./sections/faq/faq";

@Component({
  selector: 'app-home',
  imports: [Hero, Comparison, Industries, Solutions, AppPromo, Faq],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
