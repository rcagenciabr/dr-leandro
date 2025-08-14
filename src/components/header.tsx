"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Scale, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#atuacao', label: 'Atuação' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#biografia', label: 'Biografia' },
  { href: '#escritorio', label: 'Escritório' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Scale className="h-6 w-6 text-primary" />
            <span>Leandro Santos</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
             <Button asChild>
                <Link href="https://wa.me/556699310339" target="_blank">
                    <Phone className="h-4 w-4 mr-2" />
                    Fale Conosco
                </Link>
             </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw]">
                 <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                       <Link href="/" className="flex items-center gap-2 text-lg font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                            <Scale className="h-5 w-5 text-primary" />
                            <span>Leandro Santos</span>
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Fechar menu</span>
                        </Button>
                    </div>
                    <nav className="flex flex-col gap-6 text-lg">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="font-medium hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto">
                        <Button asChild className="w-full" size="lg">
                            <Link href="https://wa.me/556699310339" target="_blank">
                                <Phone className="h-5 w-5 mr-2" />
                                Fale Conosco
                            </Link>
                        </Button>
                    </div>
                 </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
