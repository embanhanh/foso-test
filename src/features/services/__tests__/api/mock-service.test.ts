import { describe, it, expect, vi } from 'vitest';
import { MockService } from '../../api/mock-service';

describe('MockService', () => {
  it('getServiceCategories returns success and data', async () => {
    const service = new MockService();
    const result = await service.getServiceCategories();

    expect(result.success).toBe(true);
    expect(Array.isArray(result.data)).toBe(true);
    if (result.data) {
      expect(result.data.length).toBeGreaterThan(0);
      expect(result.data[0]).toHaveProperty('id');
      expect(result.data[0]).toHaveProperty('title');
      expect(result.data[0]).toHaveProperty('services');
    }
  });

  it('getTestimonials returns success and data', async () => {
    const service = new MockService();
    const result = await service.getTestimonials();

    expect(result.success).toBe(true);
    expect(Array.isArray(result.data)).toBe(true);
  });
});
