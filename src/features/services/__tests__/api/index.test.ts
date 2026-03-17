import { describe, it, expect, vi, beforeEach } from 'vitest';

// We need to mock constants before importing serviceInstance
vi.mock('@/core/constants', () => ({
  API_MODE: 'mock'
}));

describe('Service Factory (index.ts)', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('provides MockService when API_MODE is mock', async () => {
    const { serviceInstance } = await import('../../api/index');
    const { MockService } = await import('../../api/mock-service');
    
    expect(serviceInstance).toBeInstanceOf(MockService);
  });
});
