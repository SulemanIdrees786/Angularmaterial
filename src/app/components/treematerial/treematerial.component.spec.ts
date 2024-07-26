import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreematerialComponent } from './treematerial.component';

describe('TreematerialComponent', () => {
  let component: TreematerialComponent;
  let fixture: ComponentFixture<TreematerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreematerialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
