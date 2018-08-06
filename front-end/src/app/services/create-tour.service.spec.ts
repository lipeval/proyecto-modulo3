import { TestBed, inject } from '@angular/core/testing';

import { CreateTourService } from './create-tour.service';

describe('CreateTourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateTourService]
    });
  });

  it('should be created', inject([CreateTourService], (service: CreateTourService) => {
    expect(service).toBeTruthy();
  }));
});
