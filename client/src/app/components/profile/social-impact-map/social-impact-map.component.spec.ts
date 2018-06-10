import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactMapComponent } from './social-impact-map.component';

describe('SocialImpactMapComponent', () => {
  let component: SocialImpactMapComponent;
  let fixture: ComponentFixture<SocialImpactMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialImpactMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialImpactMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
