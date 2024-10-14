/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DictionaryToolService } from './dictionary-tool.service';

describe('Service: DictionaryTool', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictionaryToolService]
    });
  });

  it('should ...', inject([DictionaryToolService], (service: DictionaryToolService) => {
    expect(service).toBeTruthy();
  }));
});
