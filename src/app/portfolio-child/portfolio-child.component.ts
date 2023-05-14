import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-child',
  templateUrl: './portfolio-child.component.html',
  styleUrls: ['./portfolio-child.component.css']
})
export class PortfolioChildComponent {
@Input() card:any;
@Input() i:any;
}
