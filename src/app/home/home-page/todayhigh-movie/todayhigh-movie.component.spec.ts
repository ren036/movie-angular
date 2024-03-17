import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayhighMovieComponent } from './todayhigh-movie.component';

describe('TodayhighMovieComponent', () => {
  let component: TodayhighMovieComponent;
  let fixture: ComponentFixture<TodayhighMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayhighMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayhighMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
