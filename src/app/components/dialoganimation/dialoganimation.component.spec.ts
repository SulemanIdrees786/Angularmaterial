import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoganimationComponent } from './dialoganimation.component';

describe('DialoganimationComponent', () => {
  let component: DialoganimationComponent;
  let fixture: ComponentFixture<DialoganimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialoganimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialoganimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
