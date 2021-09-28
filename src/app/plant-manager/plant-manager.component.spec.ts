import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlantManagerComponent } from './plant-manager.component';

describe('PlantManagerComponent', () => {
  let component: PlantManagerComponent;
  let fixture: ComponentFixture<PlantManagerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PlantManagerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
