import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedtreematerialComponent } from './nestedtreematerial.component';

describe('NestedtreematerialComponent', () => {
  let component: NestedtreematerialComponent;
  let fixture: ComponentFixture<NestedtreematerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedtreematerialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedtreematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
