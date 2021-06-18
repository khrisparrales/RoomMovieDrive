import { TestBed } from '@angular/core/testing';

import { FiltermovieService } from './filtermovie.service';

describe('FiltermovieService', () => {
  let service: FiltermovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltermovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
