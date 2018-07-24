import { TestBed, inject } from '@angular/core/testing';

import { SpaceService } from './space.service';

describe('SpaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceService]
    });
  });

  it('should be created', inject([SpaceService], (service: SpaceService) => {
    expect(service).toBeTruthy();
  }));
});
