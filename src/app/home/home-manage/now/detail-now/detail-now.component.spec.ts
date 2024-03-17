import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNowComponent } from './detail-now.component';

describe('DetailNowComponent', () => {
  let component: DetailNowComponent;
  let fixture: ComponentFixture<DetailNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
