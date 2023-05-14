import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillChildComponent } from './skill-child.component';

describe('SkillChildComponent', () => {
  let component: SkillChildComponent;
  let fixture: ComponentFixture<SkillChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillChildComponent]
    });
    fixture = TestBed.createComponent(SkillChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
