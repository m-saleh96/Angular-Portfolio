import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  cards:any[] = 
  [
    "web Design",
    "web Development",
    "mobile App",
    "web App",
    "web Design",
    "web Development"

  ]
}
