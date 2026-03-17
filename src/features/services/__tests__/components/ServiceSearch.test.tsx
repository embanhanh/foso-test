import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ServiceSearch } from '../../components/ServiceListSection/ServiceSearch';

// Hoist mocks so they can be used inside vi.mock
const { mockReplace, mockUseSearchParams } = vi.hoisted(() => ({
  mockReplace: vi.fn(),
  mockUseSearchParams: vi.fn(() => new URLSearchParams())
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: mockReplace,
  }),
  usePathname: () => '/services',
  useSearchParams: mockUseSearchParams,
}));

// Mock useDebounce to be synchronous to avoid timer-related hangs
vi.mock('@/shared/hooks/use-debounce', () => ({
  useDebounce: (value: string) => value
}));

// Mock React's useTransition to run synchronously and avoid fork worker crash
vi.mock('react', async () => {
  const actual = await vi.importActual<typeof import('react')>('react');
  return {
    ...actual,
    useTransition: () => [false, (fn: () => void) => fn()],
  };
});

describe('ServiceSearch Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
  });

  it('renders input correctly', () => {
    render(<ServiceSearch />);
    expect(screen.getByPlaceholderText('Tìm kiếm...')).toBeInTheDocument();
  });

  it('updates input value and calls router.replace after typing', async () => {
    render(<ServiceSearch />);
    const input = screen.getByPlaceholderText('Tìm kiếm...');

    fireEvent.change(input, { target: { value: 'combo' } });
    expect(input).toHaveValue('combo');

    // With synchronous mocks, router.replace should be called immediately
    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledWith('/services?q=combo', { scroll: false });
    });
  });

  it('clears query parameter when input is emptied', async () => {
    // Set the initial state as if the query param 'combo' is in the URL
    const searchParamsWithQuery = new URLSearchParams('q=combo');
    mockUseSearchParams.mockReturnValue(searchParamsWithQuery);

    render(<ServiceSearch />);
    const input = screen.getByPlaceholderText('Tìm kiếm...');
    expect(input).toHaveValue('combo');

    // Clear the input
    fireEvent.change(input, { target: { value: '' } });
    expect(input).toHaveValue('');

    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledWith('/services?', { scroll: false });
    });
  });
});
