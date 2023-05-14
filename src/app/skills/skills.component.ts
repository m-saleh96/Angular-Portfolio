import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills:any[]=
  [
    {
      lang:"HTML",
      level:"width:90%"
     },
     {
      lang:"CSS",
      level:"width:80%"
      },
      {
        lang:"JavaScript",
        level:"width:90%"
        },
        {
          lang:"Angular",
          level:"width:50%"
          },
          {
            lang:"Node.js",
            level:"width:90%"
            }
    // "HTML",
    // "CSS",
    // "JavaScript",
    // "Angular",
    // "Node.js"


  ]

  
}
