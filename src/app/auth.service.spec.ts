import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


let service: AuthService;

const user = {};

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthService, HttpClient ],
      imports: [ RouterTestingModule, HttpClientTestingModule, HttpClientModule ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(AuthService);
});


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should be created', () => {
    expect(service.registerUser(user))
    .toBeTruthy();
  });
});
