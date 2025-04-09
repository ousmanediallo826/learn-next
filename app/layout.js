// app/layout.js
import './globals.css';  // Import your global styles here
import { Inter } from 'next/font/google'; // Example of a Google Font

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}  {/* This will render the content of your pages */}
      </body>
    </html>
  );
}

