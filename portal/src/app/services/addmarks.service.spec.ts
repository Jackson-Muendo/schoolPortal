import { TestBed } from '@angular/core/testing';

import { AddmarksService } from './addmarks.service';

describe('AddmarksService', () => {
  let service: AddmarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
