import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { currentUserProfileResolver } from './current-user-profile-resolver';

describe('currentUserProfileResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => currentUserProfileResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
