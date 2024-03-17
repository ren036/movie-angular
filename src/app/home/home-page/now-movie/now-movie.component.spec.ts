import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowMovieComponent } from './now-movie.component';

describe('NowMovieComponent', () => {
  let component: NowMovieComponent;
  let fixture: ComponentFixture<NowMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NowMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
