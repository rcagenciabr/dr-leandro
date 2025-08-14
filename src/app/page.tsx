import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Star, Phone, PlayCircle, MoveRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const reviews = [
  {
    name: 'Joelmir Carvalho Rodrigues',
    text: 'Prezado Dr. Leandro Santos, é com imensa gratidão que expresso. Vossa prontidão em atender ao pedido de urgência foi de extrema importância no processo judicial. Sua expertise frente a necessidade fez-se fundamental para o desfecho favorável do meu caso. Seu vasto conhecimento profissional e a clareza de suas ideias, não apenas me proporcionaram a segurança, mas também superaram minhas expectativas. Agradeço por ter determinado um resultado definitivo para o processo e principalmente as orientações, que me mostraram que posso ter uma vida mais tranquila.',
    source: 'Enviado por: Joelmir Carvalho Rodrigues e família',
  },
  {
    name: 'Simona Temoteo',
    text: 'Obrigada por ter me direcionado e por ter me ajudado. Dr. Leandro mudou a minha vida e por isso eu serei eternamente grata por tudo que fez por mim e pela minha família. Ele foi um anjo que Deus colocou nas nossas vidas. Obrigada pelas palavras.',
  },
  {
    name: 'Aliny Gomes Fonseca',
    text: 'Quero te agradecer por toda a sua atenção e dedicação, por ter me passado tranquilidade e ter me dado esperança quando eu já não tinha mais. A sua dedicação foi fundamental para o resultado final do processo. Obrigada por ter me ajudado e ter acreditado em mim. Seu trabalho foi incrível e que Deus continue abençoando a sua vida, para que você continue ajudando as pessoas.',
  },
];

const services = [
    {
        title: "Inquérito Policial",
        description: "A importância da atuação do advogado desde o início.",
        videoSrc: "https://leandrosantosadv.com/wp-content/uploads/2025/01/80758d68-8508-49dc-b570-6b17efff354d.MP4",
        posterSrc: "https://leandrosantosadv.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-11-at-12.52.04-2.jpeg"
    },
    {
        title: "Fase Judicial",
        description: "Garantindo o contraditório e a ampla defesa.",
        videoSrc: "https://leandrosantosadv.com/wp-content/uploads/2025/01/c530d7e3-abce-4b79-b48f-6460b20fff71.MP4",
        posterSrc: "https://leandrosantosadv.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-17-at-22.00.26.jpeg"
    },
    {
        title: "Tribunal do Júri",
        description: "Estratégias e atuação em plenário.",
        videoSrc: "https://leandrosantosadv.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-08-at-23.15.23.mp4",
        posterSrc: "https://leandrosantosadv.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-11-at-12.52.04-1.jpeg"
    }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
           <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background/50"></div>
            <div className="absolute inset-0 bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
             <div
              className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
              style={{
                width: '150%',
                maxWidth: '1200px',
                height: '600px',
              }}
            >
              <div
                className="absolute inset-0 animate-aurora rounded-full"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse at 50% 100%, hsl(var(--primary) / 0.3), transparent 70%)',
                }}
              />
            </div>
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left motion-safe:animate-fade-in-up">
                <h1 className="font-headline font-semibold tracking-tighter mb-6">
                  Defesa Estratégica,
                  <br />
                  <span className="text-primary">Resultados Excepcionais.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
                  Advogado especialista na área criminal, com atuação em casos de alta complexidade em Sinop-MT, oferecendo soluções jurídicas personalizadas e eficientes.
                </p>
                <Button asChild size="lg" className="group">
                  <Link href="https://wa.me/556699310339" target="_blank">
                    Fale com um Especialista
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="relative flex justify-center items-center motion-safe:animate-fade-in-right">
                <div className="absolute w-full max-w-md aspect-square bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <Image
                  src="https://leandrosantosadv.com/wp-content/uploads/2025/01/IMG_3553-rotated.jpg"
                  alt="Dr. Leandro Santos"
                  width={350}
                  height={525}
                  className="rounded-2xl shadow-2xl object-cover transform motion-safe:hover:scale-105 transition-transform duration-300 border-4 border-white/10"
                  priority
                  data-ai-hint="attorney portrait"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="atuacao" className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 motion-safe:animate-fade-in-up">
              <h2 className="font-headline font-semibold">
                Áreas de Atuação
              </h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                Atuação especializada em todas as fases do processo criminal, garantindo a defesa dos seus direitos.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-6xl mx-auto motion-safe:animate-fade-in-up"
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                        <div className="group">
                            <div className="rounded-xl overflow-hidden shadow-lg border border-border group-hover:shadow-primary/20 transition-all duration-300 mx-auto">
                                <video
                                    src={service.videoSrc}
                                    poster={service.posterSrc}
                                    controls
                                    playsInline
                                    className="w-full h-full object-cover rounded-xl aspect-[9/16]"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-headline font-semibold text-lg">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">{service.description}</p>
                            </div>
                        </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
             <div className="text-center mt-8 md:hidden flex items-center justify-center text-sm text-muted-foreground motion-safe:animate-fade-in">
                <MoveRight className="h-4 w-4 mr-2" />
                Arraste para ver mais
              </div>
             <div className="text-center mt-12 motion-safe:animate-fade-in-up">
              <Button asChild size="lg" className="group">
                <Link href="https://wa.me/556699310339" target="_blank">
                  Precisa de Ajuda? Fale Conosco
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="avaliacoes" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 motion-safe:animate-fade-in-up">
              <h2 className="font-headline font-semibold">
                O que nossos clientes dizem
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                A confiança e a satisfação de quem representamos é nossa maior conquista.
              </p>
            </div>
             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 motion-safe:animate-fade-in">
              {reviews.map((review, index) => (
                <div key={index} className="h-full flex flex-col">
                  <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-500 mr-2">
                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-4 w-4" />)}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">"{review.text}"</p>
                    <p className="font-semibold text-sm">{review.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Biography Section */}
        <section id="biografia" className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-headline font-semibold mb-6">
                BIOGRAFIA
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Advogado especialista na área criminal e sócio-fundador do escritório Santos e Valentin, localizado no centro de Sinop-MT. Com ampla experiência em demandas criminais de grande complexidade, Leandro já atuou em casos de repercussão regional, conquistando resultados expressivos para seus clientes. Reconhecido pela dedicação e estratégia, é referência em oferecer soluções jurídicas eficientes e personalizadas no âmbito penal.
              </p>
            </div>
          </div>
        </section>

        {/* Office Section */}
        <section id="escritorio" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="motion-safe:animate-fade-in-left text-center md:text-left">
                        <h2 className="font-headline font-semibold mb-4">Conheça Nosso Escritório</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Localizado no centro de Sinop-MT, nosso escritório oferece um ambiente moderno e acolhedor para garantir o melhor atendimento.
                        </p>
                        <Button asChild size="lg" className="group">
                           <Link href="https://wa.me/556699310339" target="_blank">
                            Agende uma Consulta
                            <Phone className="h-5 w-5 ml-2 transition-transform" />
                          </Link>
                        </Button>
                    </div>
                    <div className="motion-safe:animate-fade-in-right mx-auto">
                        <Image
                            src="https://leandrosantosadv.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-06.27.02.jpeg"
                            alt="Foto do escritório"
                            width={500}
                            height={600}
                            className="rounded-xl shadow-lg object-cover w-full border-4 border-white/10 max-h-[60vh]"
                            data-ai-hint="office building exterior"
                        />
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}

    