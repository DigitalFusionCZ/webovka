'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.title = "Automatizovaná správa TLS certifikátů | SecureCert Solutions";
    
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#D4AF37" /><stop offset="100%" stop-color="#1A1A1A" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    (faviconLink as HTMLLinkElement).href = faviconUrl;
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#C0C0C0] font-sans">
      <header className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A] bg-opacity-90 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-serif font-bold text-[#D4AF37]">
            SecureCert Solutions s.r.o.
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-[#D4AF37] transition duration-300">Úvod</a>
            <a href="#about" className="hover:text-[#D4AF37] transition duration-300">O nás</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition duration-300">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-[#C0C0C0] focus:outline-none focus:text-[#D4AF37]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#1A1A1A] bg-opacity-95 py-4`}>
          <div className="flex flex-col items-center space-y-4">
            <a href="#hero" onClick={closeMenu} className="text-lg hover:text-[#D4AF37] transition duration-300">Úvod</a>
            <a href="#about" onClick={closeMenu} className="text-lg hover:text-[#D4AF37] transition duration-300">O nás</a>
            <a href="#contact" onClick={closeMenu} className="text-lg hover:text-[#D4AF37] transition duration-300">Kontakt</a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1549646549-052fb5540306?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#D4AF37] leading-tight mb-4 animate-fadeInUp">
              SecureCert Solutions s.r.o.
            </h1>
            <p className="font-light text-2xl md:text-3xl text-[#C0C0C0] mb-8 animate-fadeInUp animate-delay-200">
              Certifikáty pod kontrolou – automatizace, která šetří čas i nervy.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-[#1A1A1A]">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#D4AF37] mb-10 border-b-2 border-[#D4AF37] pb-4 inline-block">
              O nás
            </h2>
            <p className="font-light text-lg md:text-xl text-[#C0C0C0] leading-relaxed mb-6">
              SecureCert Solutions je česká technologická firma specializující se na automatizovanou správu TLS/SSL certifikátů. Vyvíjíme vlastní nástroje, které umožňují bezpečné, rychlé a bezchybné ověřování, generování a obnovu certifikátů v rámci moderní infrastruktury.
            </p>
            <p className="font-light text-lg md:text-xl text-[#C0C0C0] leading-relaxed mb-6">
              Naším cílem je ulehčit IT správcům každodenní rutinu, zvýšit bezpečnost a předejít výpadkům způsobeným expirovanými certifikáty. Zaměřujeme se na zařízení bez snadno přístupného webového rozhraní, přičemž využíváme DNS-01 nebo TLS-ALPN-01 challenge protokolu ACME, ale také umíme pomocí Selenium přímo interagovat s webovými zařízeními a zabezpečit je.
            </p>
            <p className="font-serif italic text-xl md:text-2xl text-[#D4AF37] mt-10">
              Váš klid = naše technologie.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#252525]">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#D4AF37] mb-10 border-b-2 border-[#D4AF37] pb-4 inline-block">
              Kontakt
            </h2>
            <div className="flex flex-col items-center space-y-6 text-lg md:text-xl">
              <p className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <span>info@securecert.cz</span>
              </p>
              <p className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l1.3 9.135a1 1 0 01-.074.846l-1.455 2.518a1 1 0 00.315 1.45c.484.346.99.653 1.516.921A20.359 20.359 0 0018 18a1 1 0 001-1v-2.757a1 1 0 00-.72-.962l-1.455-.486a1 1 0 00-1.127.348l-.94 1.26a1 1 0 01-1.079.16l-3.364-2.313a1 1 0 01-.16-1.079l1.26-.94a1 1 0 00.348-1.127l-.486-1.455A1 1 0 0010.5 3H7a1 1 0 00-1 1v2.122a2 2 0 01-.586 1.414L2 13.586V3z"></path></svg>
                <span>+420 777 123 456</span>
              </p>
              <p className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                <span>Nádražní 10, 110 00 Praha 1, Česká republika</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A1A1A] py-8 text-center text-sm text-[#C0C0C0]">
        <div className="container mx-auto px-6">
          Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">DigitalFusion</a>
        </div>
      </footer>
    </div>
  );
}
