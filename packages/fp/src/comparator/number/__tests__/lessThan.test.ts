import { USD } from '@dinero.js/currencies';
import dinero, { lessThan } from '../../../..';

describe('lessThan', () => {
  it('returns true when the first amount is less than the other', () => {
    const d1 = dinero({ amount: 500, currency: USD });
    const d2 = dinero({ amount: 800, currency: USD });

    expect(lessThan(d1, d2)).toBe(true);
  });
  it('returns false when amounts are equal', () => {
    const d1 = dinero({ amount: 500, currency: USD });
    const d2 = dinero({ amount: 500, currency: USD });

    expect(lessThan(d1, d2)).toBe(false);
  });
  it('returns false when the first amount is greater than the other', () => {
    const d1 = dinero({ amount: 800, currency: USD });
    const d2 = dinero({ amount: 500, currency: USD });

    expect(lessThan(d1, d2)).toBe(false);
  });
});
