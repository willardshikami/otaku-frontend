import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsComponent } from './events.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsComponent],
      imports: [ HttpClientTestingModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
