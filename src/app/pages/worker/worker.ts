import { Component } from '@angular/core';
import {  fullControl } from "./sections/fullControl/full-control";
import {  Work } from "./sections/work/work";
import { Steps } from "./sections/steps/steps";

@Component({
  selector: 'app-worker',
  imports: [fullControl, Steps, Work],
  templateUrl: './worker.html',
  styleUrl: './worker.css',
})
export class worker {

}
