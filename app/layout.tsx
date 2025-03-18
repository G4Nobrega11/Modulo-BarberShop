import type { Metadata } from 'next';
      import { Inter } from 'next/font/google';
      import './globals.css';
      import AuthButton from './components/AuthButton.client';

      const inter = Inter({ subsets: ['latin'] });

      export const metadata: Metadata = {
        title: 'Barbershop Scheduler',
        description: 'Schedule appointments with ease.',
      };

      export default function RootLayout({
        children,
      }: {
        children: React.ReactNode;
      }) {
        return (
          <html lang="en">
            <body className={inter.className}>
              <header>
                <nav>
                  <AuthButton />
                </nav>
              </header>
              <main>{children}</main>
            </body>
          </html>
        );
      }
