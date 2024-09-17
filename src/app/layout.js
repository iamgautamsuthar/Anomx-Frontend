import './globals.css';

import Navbar from '@/components/Navbar';
export const metadata = {
    title: 'Anomx | Freedom of Speech',
    description: 'We want freedom of speech',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='bg-background w-screen h-screen'>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
