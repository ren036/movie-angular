import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNowComponentComponent } from './add-now-component.component';

describe('AddNowComponentComponent', () => {
  let component: AddNowComponentComponent;
  let fixture: ComponentFixture<AddNowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNowComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
