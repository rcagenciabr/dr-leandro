import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { Inter, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsappFab } from '@/components/whatsapp-fab';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const pt_sans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'Leandro Santos | Advogado Criminalista em Sinop - MT',
  description: 'Advogado especialista na área criminal em Sinop - MT. Atuação em inquérito policial, audiência de custódia, tribunal do júri e mais.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased bg-background text-foreground',
          inter.variable,
          pt_sans.variable
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsappFab />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
