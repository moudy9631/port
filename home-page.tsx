import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Brush, Wallpaper, Phone, Mail, MapPin, ChevronRight } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Brush className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">PaintPro</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#gallery">
            Gallery
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
                    Transform Your Space
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground md:text-xl">
                    Professional house painting and wallpaper services to bring your vision to life.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="secondary">Get a Quote</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="House painting"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="400"
                  src="/placeholder.svg"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative w-40 h-40">
                  <Image
                    alt="House painting service"
                    className="rounded-full object-cover"
                    fill
                    src="/placeholder.svg"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Brush className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">House Painting</h3>
                <p className="text-muted-foreground">
                  Interior and exterior painting services with premium quality paints and expert application.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative w-40 h-40">
                  <Image
                    alt="Wallpaper installation service"
                    className="rounded-full object-cover"
                    fill
                    src="/placeholder.svg"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wallpaper className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Wallpaper Installation</h3>
                <p className="text-muted-foreground">
                  Professional wallpaper hanging services with a wide selection of patterns and textures.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  alt={`Project ${i}`}
                  className="aspect-video overflow-hidden rounded-lg object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline">
                View More Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@paintpro.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Paint Street, Color City, ST 12345</span>
                </div>
              </div>
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone" type="tel" />
                <Textarea placeholder="Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 PaintPro. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}