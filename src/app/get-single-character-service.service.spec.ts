import { TestBed } from '@angular/core/testing';

import { GetSingleCharacterServiceService } from './get-single-character-service.service';

describe('GetSingleCharacterServiceService', () => {
  let service: GetSingleCharacterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSingleCharacterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
