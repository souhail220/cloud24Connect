import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { SignUpForm } from './SignUpForm';

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

describe('SignUpForm Component', () => {
    test('renders form fields', () => {
        renderWithRouter(<SignUpForm />);

        expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
    });
});