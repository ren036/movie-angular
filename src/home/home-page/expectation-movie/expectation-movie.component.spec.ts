import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectationMovieComponent } from './expectation-movie.component';

describe('ExpectationMovieComponent', () => {
  let component: ExpectationMovieComponent;
  let fixture: ComponentFixture<ExpectationMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpectationMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpectationMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
