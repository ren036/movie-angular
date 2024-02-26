import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUpcomingComponent } from './detail-upcoming.component';

describe('DetailUpcomingComponent', () => {
  let component: DetailUpcomingComponent;
  let fixture: ComponentFixture<DetailUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailUpcomingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
