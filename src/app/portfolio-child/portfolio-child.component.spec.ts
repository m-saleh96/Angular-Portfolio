import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioChildComponent } from './portfolio-child.component';

describe('PortfolioChildComponent', () => {
  let component: PortfolioChildComponent;
  let fixture: ComponentFixture<PortfolioChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioChildComponent]
    });
    fixture = TestBed.createComponent(PortfolioChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
