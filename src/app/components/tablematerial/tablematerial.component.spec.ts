import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablematerialComponent } from './tablematerial.component';

describe('TablematerialComponent', () => {
  let component: TablematerialComponent;
  let fixture: ComponentFixture<TablematerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablematerialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
