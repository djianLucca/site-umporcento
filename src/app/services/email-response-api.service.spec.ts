import { TestBed } from '@angular/core/testing';

import { EmailResponseApiService } from './email-response-api.service';

describe('EmailResponseApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailResponseApiService = TestBed.get(EmailResponseApiService);
    expect(service).toBeTruthy();
  });
});
