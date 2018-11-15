import { TestBed } from '@angular/core/testing';
import { EventService } from './event.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';


let eventService: EventService;

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ EventService ],
      imports: [ HttpClientTestingModule, ]
    });
  });

  beforeEach(() => {
    eventService = TestBed.get(EventService);
  });

  it('should be created', () => {
    expect(eventService).toBeTruthy();
  });
});
