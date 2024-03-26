import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudentsComponent } from './viewstudents.component';

describe('ViewstudentsComponent', () => {
  let component: ViewstudentsComponent;
  let fixture: ComponentFixture<ViewstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewstudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
