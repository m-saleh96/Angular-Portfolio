import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-skill-child',
  templateUrl: './skill-child.component.html',
  styleUrls: ['./skill-child.component.css']
})
export class SkillChildComponent {
  @Input()  skill:any;
  
}
