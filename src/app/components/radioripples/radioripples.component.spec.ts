import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioripplesComponent } from './radioripples.component';

describe('RadioripplesComponent', () => {
  let component: RadioripplesComponent;
  let fixture: ComponentFixture<RadioripplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioripplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioripplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
