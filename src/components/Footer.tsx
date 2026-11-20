// Footer component — no motion needed here

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0D0D0C] text-[#F5F3F0]">
      {/* Top CTA Strip */}
      <div className="border-b border-[#1E1E1C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-[#D97706]" />
                <span className="font-body text-[#D97706] text-xs font-semibold tracking-[0.3em] uppercase">
                  Reservations
                </span>
              </div>
              <h2 className="font-display text-[#F5F3F0] text-5xl lg:text-6xl font-bold leading-none">
                Venez Vivre
                <br />
                <span className="text-[#D97706]">L Experience.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-body text-[#6B7280] text-base leading-relaxed font-light">
                Reservez votre table ou passez nous rendre visite directement.
                Notre equipe est prete a vous accueillir dans les meilleures conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a
                  href="tel:0660478765"
                  className="inline-flex items-center justify-center gap-3 bg-[#D97706] text-white font-body text-sm font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#B45309] transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.27a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.1a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  Appeler Maintenant
                </a>
                <a
                  href="https://glovoapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-[#2A2A28] text-[#F5F3F0] font-body text-sm font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:border-[#D97706] transition-colors duration-200"
                >
                  Commander sur Glovo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#D97706] flex items-center justify-center">
                <span className="font-display text-white text-xs font-bold tracking-widest">EF</span>
              </div>
              <div>
                <div className="font-display text-white text-lg font-bold tracking-widest leading-none">
                  EAT FACTORY
                </div>
                <div className="font-body text-[#6B7280] text-[9px] tracking-[0.25em] uppercase mt-0.5">
                  El Jadida, Maroc
                </div>
              </div>
            </div>
            <p className="font-body text-[#6B7280] text-sm leading-relaxed max-w-xs font-light mb-8">
              La Fabrique du Gout. Un restaurant moderne dedie a la generosite,
              a la fraicheur et a l ambiance conviviale au coeur d El Jadida.
            </p>
            {/* Social-like badges */}
            <div className="flex gap-3">
              {['Glovo', 'Drive', 'Sur Place'].map((s) => (
                <span
                  key={s}
                  className="font-body text-[10px] text-[#6B7280] border border-[#2A2A28] px-3 py-1.5 tracking-widest uppercase"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-display text-[#F5F3F0] text-sm font-bold tracking-[0.2em] uppercase mb-6">
              Horaires
            </h4>
            <ul className="space-y-3">
              {[
                { day: 'Lundi — Vendredi', hours: '11h00 — 01h00' },
                { day: 'Samedi', hours: '11h00 — 01h00' },
                { day: 'Dimanche', hours: '12h00 — 01h00' },
              ].map((h) => (
                <li key={h.day} className="flex flex-col gap-0.5">
                  <span className="font-body text-[#6B7280] text-xs tracking-wide">{h.day}</span>
                  <span className="font-body text-[#F5F3F0] text-sm font-medium">{h.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              <span className="font-body text-[#22C55E] text-xs tracking-wider">Ouvert maintenant</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[#F5F3F0] text-sm font-bold tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <span className="font-body text-[#6B7280] text-xs tracking-widest uppercase block mb-1">
                  Adresse
                </span>
                <span className="font-body text-[#F5F3F0] text-sm leading-relaxed">
                  01, Res Azizia, Magasin RDC,<br />
                  Imm C N31, El Jadida
                </span>
              </li>
              <li>
                <span className="font-body text-[#6B7280] text-xs tracking-widest uppercase block mb-1">
                  Telephone
                </span>
                <a
                  href="tel:0660478765"
                  className="font-body text-[#F5F3F0] text-sm hover:text-[#D97706] transition-colors"
                >
                  06 60 47 87 65
                </a>
              </li>
              <li>
                <span className="font-body text-[#6B7280] text-xs tracking-widest uppercase block mb-1">
                  Commande en ligne
                </span>
                <a
                  href="https://glovoapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[#F5F3F0] text-sm hover:text-[#D97706] transition-colors"
                >
                  Glovo — Commander
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E1E1C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-body text-[#6B7280] text-xs tracking-widest">
              2025 EAT FACTORY — El Jadida, Maroc. Tous droits reserves.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#D97706]" />
              <span className="font-body text-[#6B7280] text-xs tracking-[0.2em] uppercase">
                La Fabrique du Gout
              </span>
              <div className="w-1 h-1 bg-[#D97706]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
