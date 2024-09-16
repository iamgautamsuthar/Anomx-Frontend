import './globals.css';

export const metadata = {
    title: 'Anomx | Freedom of Speech',
    description: 'We want freedom of speech',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
