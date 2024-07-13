import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsfieldComponent } from './formsfield.component';

describe('FormsfieldComponent', () => {
  let component: FormsfieldComponent;
  let fixture: ComponentFixture<FormsfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsfieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
