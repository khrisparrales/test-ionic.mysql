import { TestBed } from '@angular/core/testing';

import { ApimysqlnodeService } from './apimysqlnode.service';

describe('ApimysqlnodeService', () => {
  let service: ApimysqlnodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApimysqlnodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
