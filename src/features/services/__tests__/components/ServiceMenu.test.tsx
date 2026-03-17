import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ServiceMenu from '../../components/ServiceListSection/ServiceMenu';
import { ServiceCategory } from '../../types';

const mockCategories: ServiceCategory[] = [
  { id: 'cat-1', title: 'Category 1', type: 'COMBO', services: [] },
  { id: 'cat-2', title: 'Category 2', type: 'MEDICURE', services: [] },
];

describe('ServiceMenu Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    class MockIntersectionObserver {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }
    window.IntersectionObserver = MockIntersectionObserver as any;
    
    // Mock window.scrollTo
    window.scrollTo = vi.fn();
    // Mock window.history.pushState
    window.history.pushState = vi.fn();
  });

  it('renders all category titles', () => {
    render(<ServiceMenu categories={mockCategories} />);
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
  });

  it('calls window.scrollTo and history.pushState when a category is clicked', async () => {
    const user = userEvent.setup();
    render(<ServiceMenu categories={mockCategories} />);
    
    // Create dummy element so getElementById finds it
    const dummyElement = document.createElement('div');
    dummyElement.id = 'cat-1';
    document.body.appendChild(dummyElement);
    
    // Mock getBoundingClientRect
    dummyElement.getBoundingClientRect = () => ({
      top: 500,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      toJSON: () => {}
    });

    const link = screen.getByText('Category 1');
    await user.click(link);
    
    expect(window.scrollTo).toHaveBeenCalledWith(
        expect.objectContaining({ behavior: 'smooth' })
    );
    expect(window.history.pushState).toHaveBeenCalledWith(null, '', '#cat-1');
    
    document.body.removeChild(dummyElement);
  });
});
