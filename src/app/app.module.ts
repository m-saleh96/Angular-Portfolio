import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { SkillChildComponent } from './skill-child/skill-child.component';
import { PortfolioChildComponent } from './portfolio-child/portfolio-child.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    SkillChildComponent,
    PortfolioChildComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
