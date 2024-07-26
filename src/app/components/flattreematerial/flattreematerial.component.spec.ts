import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlattreematerialComponent } from './flattreematerial.component';

describe('FlattreematerialComponent', () => {
  let component: FlattreematerialComponent;
  let fixture: ComponentFixture<FlattreematerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlattreematerialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlattreematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
