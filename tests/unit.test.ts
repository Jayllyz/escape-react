import { describe, expect, test } from 'vitest';
import { formatMinutes } from '../src/lib/time';

describe('Units tests', () => {
  test('should pass', () => {
    expect(1 + 1).toBe(2);
  });

  test('should format minutes', () => {
    expect(formatMinutes(120)).toBe('02:00');
    expect(formatMinutes(150)).toBe('02:30');
    expect(formatMinutes(300)).toBe('05:00');
  });
});
