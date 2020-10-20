import { TestBed } from '@angular/core/testing';

import { ProductCartDisplayService } from './product-cart-display.service';

describe('ProductCartDisplayService', () => {
  let service: ProductCartDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCartDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
