import Link from 'next/link';
import { Scale, Facebook, Instagram, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border/50 bg-secondary/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="text-center md:text-left">
            <h3 className="font-headline text-2xl font-bold mb-4">Localização</h3>
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://maps.google.com/maps?q=Av.%20dos%20Jacarand%C3%A1s%2C%204179%20-%20St.%20Res.%20Norte%2C%20Sinop%20-%20MT%2C%2078550-362&t=m&z=15&output=embed&iwloc=near"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Endereço do Escritório"
              ></iframe>
            </div>
          </div>

          {/* Contact and Socials */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h3 className="font-headline text-2xl font-bold mb-4">Contato</h3>
            <p className="text-muted-foreground mb-6">
              Pronto para dar o próximo passo? Entre em contato para uma consulta e vamos discutir como posso ajudar.
            </p>
            <ul className="space-y-4">
               <li>
                  <a
                    href="https://wa.me/556699310339"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-primary transition-colors group justify-center md:justify-start"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-lg">WhatsApp</span>
                      <p className="text-sm text-muted-foreground">(66) 99931-0339</p>
                    </div>
                  </a>
                </li>
              <li>
                <a
                  href="https://www.instagram.com/leandroo.santos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-primary transition-colors group justify-center md:justify-start"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                   <div>
                      <span className="font-semibold text-lg">Instagram</span>
                      <p className="text-sm text-muted-foreground">@leandroo.santos</p>
                    </div>
                </a>
              </li>
               <li>
                <a
                  href="#"
                  className="flex items-center gap-4 hover:text-primary transition-colors group justify-center md:justify-start"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Facebook className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                      <span className="font-semibold text-lg">Facebook</span>
                      <p className="text-sm text-muted-foreground">Leandro Santos</p>
                    </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 bg-background">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground pb-24">
          <p>&copy; {new Date().getFullYear()} Leandro Santos Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
