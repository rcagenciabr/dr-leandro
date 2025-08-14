import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function WhatsappFab() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none">
       <div className="container mx-auto max-w-4xl">
        <Button 
            asChild 
            size="lg" 
            className="w-full shadow-lg shadow-green-500/30 bg-green-600 hover:bg-green-700 text-white pointer-events-auto"
        >
            <Link href="https://wa.me/556699310339" target="_blank">
            Fale com um advogado
            <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
        </Button>
      </div>
    </div>
  );
}
