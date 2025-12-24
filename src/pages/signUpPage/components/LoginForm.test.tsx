import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { LoginForm } from './LoginForm';

// Mock react-router-dom to avoid Link context issues
vi.mock('react-router-dom', () => ({
    Link: ({ children, to, ...props }: any) => (
        <a href={to} {...props}>
            {children}
        </a>
    ),
}));

// Helper function to render with Router
const renderWithRouter = (component: React.ReactElement) => {
    const router = createMemoryRouter(
        [
            {
                path: '/',
                element: component,
            },
        ],
        {
            initialEntries: ['/'],
        }
    );

    return render(<RouterProvider router={router} />);
};

describe('LoginForm Component', () => {
    test('renders form fields', () => {
        renderWithRouter(<LoginForm />);

        expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });
});