import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksManangerComponent } from './tasks-mananger.component';

describe('TasksManangerComponent', () => {
  let component: TasksManangerComponent;
  let fixture: ComponentFixture<TasksManangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksManangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksManangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
