const { useMemo, useState } = React

const Icon = ({ children, size = 20, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

const ShoppingBag = ({ size = 20, className = '' }) => <Icon size={size} className={className}><path d="M6 8h12l-1 13H7L6 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></Icon>
const Menu = ({ size = 20 }) => <Icon size={size}><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></Icon>
const X = ({ size = 20 }) => <Icon size={size}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></Icon>
const Plus = ({ size = 16 }) => <Icon size={size}><path d="M12 5v14" /><path d="M5 12h14" /></Icon>
const Minus = ({ size = 16 }) => <Icon size={size}><path d="M5 12h14" /></Icon>
const Trash2 = ({ size = 18 }) => <Icon size={size}><path d="M3 6h18" /><path d="M8 6V4h8v2" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /></Icon>
const MapPin = ({ size = 18 }) => <Icon size={size}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Icon>
const Instagram = ({ size = 18 }) => <Icon size={size}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></Icon>
const Facebook = ({ size = 18 }) => <Icon size={size}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" /></Icon>

const WHATSAPP_NUMBER = '+569 5319 4098'

const products = [
  {
    id: 'diagonal-roll',
    category: 'Rolls',
    name: 'Diagonal Roll',
    description: 'Queso crema, palta, camarón y salsa acevichada.',
    price: 6900,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'tori-coreano',
    category: 'Rolls',
    name: 'Tori Coreano',
    description: 'Pollo crispy, queso crema, cebollín, salsa coreana y sésamo.',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ebi-furai-roll',
    category: 'Rolls',
    name: 'Ebi Furai Roll',
    description: 'Camarón apanado, palta y queso crema.',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'avocado-roll',
    category: 'Rolls',
    name: 'Avocado Roll',
    description: 'Envuelto en palta, relleno de pollo, queso crema y cebollín.',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'handroll-pollo',
    category: 'Handrolls',
    name: 'Handroll Pollo',
    description: 'Pollo, queso crema y cebollín.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'handroll-camaron',
    category: 'Handrolls',
    name: 'Handroll Camarón',
    description: 'Camarón, queso crema y palta.',
    price: 3900,
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ceviche-mixto',
    category: 'Ceviches',
    name: 'Ceviche Mixto',
    description: 'Pescado, camarón, cebolla morada, cilantro y limón.',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1663186572387-c3c69a010d71?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ceviche-diagonal',
    category: 'Ceviches',
    name: 'Ceviche Diagonal',
    description: 'Preparación especial de la casa.',
    price: 9500,
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'promo-30',
    category: 'Promociones',
    name: 'Promo 30 piezas',
    description: 'Variedad de rolls seleccionados.',
    price: 18990,
    image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'promo-50',
    category: 'Promociones',
    name: 'Promo 50 piezas',
    description: 'Ideal para compartir.',
    price: 29990,
    image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bebida-lata',
    category: 'Bebidas',
    name: 'Bebida lata',
    description: 'Bebida individual helada.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'agua-mineral',
    category: 'Bebidas',
    name: 'Agua mineral',
    description: 'Agua mineral con o sin gas.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80',
  },
]

const categories = ['Rolls', 'Handrolls', 'Ceviches', 'Promociones', 'Bebidas']
const formatPrice = (value) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(value)
const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function Header({ cartCount, onCartOpen }) {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { label: 'Carta', action: () => scrollToId('carta') },
    { label: 'Locales', action: () => scrollToId('locales') },
    { label: 'TALCA', action: () => scrollToId('talca') },
  ]

  const handleNav = (action) => {
    action()
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 shadow-2xl shadow-black/30 backdrop-blur-xl" style={{ background: 'rgba(10, 10, 12, 0.88)', backdropFilter: 'blur(14px)' }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button className="flex items-center gap-3" onClick={() => scrollToId('inicio')} aria-label="Ir al inicio">
          <img src="./public/logo-diagonal.svg" alt="Diagonal Sushi" className="h-11 w-11 rounded-2xl" />
          <div className="text-left leading-none">
            <span className="block text-lg font-black tracking-[0.16em] text-white">DIAGONAL</span>
            <span className="block text-xs font-bold tracking-[0.32em] text-brand-red">SUSHI</span>
          </div>
        </button>

        <div className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => handleNav(item.action)} className="rounded-full px-5 py-2 text-sm font-bold uppercase tracking-[0.16em] text-white/80 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={onCartOpen} className="relative rounded-full bg-brand-red px-4 py-3 text-white shadow-lg shadow-brand-red/30 transition hover:-translate-y-0.5 hover:bg-red-600" aria-label="Abrir carrito">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-black text-brand-red">{cartCount}</span>}
          </button>
          <button className="rounded-full border border-white/15 p-3 text-white md:hidden" onClick={() => setIsOpen((value) => !value)} aria-label="Abrir menú">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-graphite px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => handleNav(item.action)} className="mt-2 block w-full rounded-2xl bg-white/5 px-4 py-3 text-left text-sm font-bold uppercase tracking-[0.16em] text-white">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

function HeroBanner({ onCartOpen }) {
  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden bg-graphite pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(226,31,38,0.35),transparent_26%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.12),transparent_22%)]" />
      <div className="absolute -left-20 top-28 h-72 w-72 rounded-full border border-brand-red/40" />
      <div className="diagonal-stripe absolute right-0 top-0 h-full w-1/2 opacity-70" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
            <span className="rounded-full bg-brand-red px-3 py-1 text-xs font-black uppercase tracking-[0.22em]">Nuevo</span>
            <span className="text-sm font-semibold text-white/80">Edición limitada</span>
          </div>
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Roll Especial <span className="text-brand-red">Diagonal</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/75 sm:text-xl">
            Sushi, ceviche y sabores frescos en el corazón de Talca.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => scrollToId('carta')} className="rounded-full bg-brand-red px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-2xl shadow-brand-red/30 transition hover:-translate-y-1 hover:bg-red-600">
              Ver carta
            </button>
            <button onClick={onCartOpen} className="rounded-full border-2 border-white bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#101114] shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-brand-red hover:bg-brand-red hover:text-white hover:shadow-brand-red/30">
              Ir al carrito
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <div className="absolute -inset-5 rotate-[-7deg] rounded-[3rem] bg-brand-red/90 blur-sm" />
          <div className="absolute -right-6 -top-8 z-10 rounded-3xl bg-white px-5 py-4 text-graphite shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">Desde</p>
            <p className="text-3xl font-black">$6.900</p>
          </div>
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white p-3 shadow-2xl shadow-black/40">
            <img src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1300&q=85" alt="Roll Especial Diagonal" className="h-[360px] w-full rounded-[2.4rem] object-cover sm:h-[520px]" />
            <div className="absolute bottom-8 left-8 rounded-3xl bg-graphite/90 px-5 py-4 backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-red">Diagonal Sushi</p>
              <p className="mt-1 text-2xl font-black">Fresco · Urbano · Talca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, quantity = 0, onAdd, onDecrease }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-xl shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-red/10">
      <div className="relative h-52 overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
        <div className="absolute left-4 top-4 rounded-full bg-graphite px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">{product.category}</div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-black text-graphite">{product.name}</h3>
          <p className="shrink-0 text-lg font-black text-brand-red">{formatPrice(product.price)}</p>
        </div>
        <p className="mt-2 min-h-12 text-sm leading-6 text-neutral-600">{product.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          {quantity > 0 ? (
            <div className="flex items-center rounded-full bg-neutral-100 p-1">
              <button onClick={() => onDecrease(product.id)} className="grid h-9 w-9 place-items-center rounded-full bg-white text-graphite shadow-sm" aria-label={`Disminuir ${product.name}`}><Minus size={16} /></button>
              <span className="w-10 text-center text-sm font-black">{quantity}</span>
              <button onClick={() => onAdd(product)} className="grid h-9 w-9 place-items-center rounded-full bg-brand-red text-white shadow-sm" aria-label={`Aumentar ${product.name}`}><Plus size={16} /></button>
            </div>
          ) : (
            <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">Listo para pedir</span>
          )}
          <button onClick={() => onAdd(product)} className="rounded-full bg-graphite px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-red">
            Agregar
          </button>
        </div>
      </div>
    </article>
  )
}

function MenuSection({ cart, onAdd, onDecrease }) {
  return (
    <section id="carta" className="bg-stone-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-red">Carta</p>
            <h2 className="mt-3 text-4xl font-black text-graphite sm:text-5xl">Sabores directos al carrito</h2>
          </div>
          <p className="max-w-md text-neutral-600">Elige rolls, handrolls, ceviches, promociones y bebidas. Tu pedido queda listo para enviarlo por WhatsApp.</p>
        </div>

        <div className="space-y-14">
          {categories.map((category) => (
            <div key={category}>
              <div className="mb-6 flex items-center gap-4">
                <h3 className="text-2xl font-black text-graphite">{category}</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-brand-red/60 to-transparent" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.filter((product) => product.category === category).map((product) => (
                  <ProductCard key={product.id} product={product} quantity={cart[product.id]?.quantity} onAdd={onAdd} onDecrease={onDecrease} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CartDrawer({ isOpen, cartItems, subtotal, onClose, onAdd, onDecrease, onRemove }) {
  const total = subtotal
  const whatsappLink = useMemo(() => {
    const detail = cartItems
      .map(({ product, quantity }) => `${quantity}x ${product.name} - Unitario: ${formatPrice(product.price)} - Subtotal: ${formatPrice(product.price * quantity)}`)
      .join('\n')
    const message = `Hola, quiero hacer el siguiente pedido en Diagonal Sushi:\n\n${detail}\n\nTotal: ${formatPrice(total)}`

    return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  }, [cartItems, total])

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-neutral-200 p-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-red">Tu pedido</p>
            <h2 className="text-2xl font-black text-graphite">Carrito</h2>
          </div>
          <button onClick={onClose} className="rounded-full bg-neutral-100 p-3 text-graphite" aria-label="Cerrar carrito"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="grid h-full place-items-center rounded-[2rem] border border-dashed border-neutral-300 p-8 text-center">
              <div>
                <ShoppingBag className="mx-auto text-brand-red" size={42} />
                <p className="mt-4 text-xl font-black text-graphite">Tu carrito está vacío</p>
                <p className="mt-2 text-sm text-neutral-500">Agrega productos de la carta para armar tu pedido.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="rounded-3xl border border-neutral-200 p-4">
                  <div className="flex gap-4">
                    <img src={product.image} alt={product.name} className="h-20 w-20 rounded-2xl object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between gap-3">
                        <h3 className="font-black text-graphite">{product.name}</h3>
                        <button onClick={() => onRemove(product.id)} className="text-neutral-400 transition hover:text-brand-red" aria-label={`Eliminar ${product.name}`}><Trash2 size={18} /></button>
                      </div>
                      <p className="mt-1 text-sm text-neutral-500">Unitario: {formatPrice(product.price)}</p>
                      <p className="mt-1 text-sm font-black text-brand-red">Total producto: {formatPrice(product.price * quantity)}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-neutral-500">Cantidad</span>
                    <div className="flex items-center rounded-full bg-neutral-100 p-1">
                      <button onClick={() => onDecrease(product.id)} className="grid h-9 w-9 place-items-center rounded-full bg-white"><Minus size={16} /></button>
                      <span className="w-10 text-center text-sm font-black">{quantity}</span>
                      <button onClick={() => onAdd(product)} className="grid h-9 w-9 place-items-center rounded-full bg-brand-red text-white"><Plus size={16} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-neutral-200 p-5">
          <div className="space-y-2 rounded-3xl bg-neutral-100 p-4">
            <div className="flex justify-between text-sm font-bold text-neutral-600"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="flex justify-between text-xl font-black text-graphite"><span>Total final</span><span>{formatPrice(total)}</span></div>
          </div>
          {cartItems.length > 0 && (
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 block w-full rounded-full bg-brand-red px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white shadow-xl shadow-brand-red/25 transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-brand-red/40">
              Finalizar pedido
            </a>
          )}
          <p className="mt-3 text-center text-xs text-neutral-400">Pedido vía WhatsApp: {WHATSAPP_NUMBER}</p>
        </div>
      </aside>
    </div>
  )
}

function Locales() {
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Av.%20Isidoro%20del%20Solar%20211%2C%20Talca'

  return (
    <>
      <section id="locales" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="rounded-[2.5rem] bg-graphite p-8 text-white shadow-2xl shadow-black/20 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-red">Locales</p>
              <h2 className="mt-4 text-4xl font-black">Diagonal Sushi Talca</h2>
              <div className="mt-6 space-y-3 text-white/80">
                <p><strong className="text-white">Dirección:</strong> Av. Isidoro del Solar 211, Talca</p>
                <p><strong className="text-white">Horario:</strong> Lun–Dom 12:00 a 23:30 hrs</p>
              </div>
            </div>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-red-700 lg:mt-0">
              <MapPin size={18} /> Ver ubicación
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="min-h-[360px] overflow-hidden rounded-[2.5rem] bg-stone-100 shadow-2xl shadow-black/10">
              <iframe
                title="Mapa de Diagonal Sushi Talca"
                src="https://www.google.com/maps?q=Av.%20Isidoro%20del%20Solar%20211,%20Talca,%20Chile&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[360px] w-full"
              />
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[2.5rem] bg-stone-100 p-8 shadow-2xl shadow-black/10 sm:p-10">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(226,31,38,0.95)_0_18%,transparent_18%_100%)]" />
              <div className="absolute bottom-8 right-8 h-48 w-48 rounded-full bg-brand-red/15" />
              <div className="relative max-w-lg">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-red">Sushi bar urbano</p>
                <h3 className="mt-4 text-4xl font-black leading-tight text-graphite">Retira, comparte y disfruta fresco en Talca.</h3>
                <p className="mt-5 text-neutral-600">Carta breve, sabores potentes y preparación con estética Diagonal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="talca" className="bg-graphite px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-red">TALCA</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">Estamos en Talca, a pasos de la Alameda, con sushi fresco, ceviche y preparaciones llenas de sabor.</h2>
            </div>
            <p className="rounded-3xl bg-brand-red px-6 py-5 text-lg font-black shadow-xl shadow-brand-red/20">Te esperamos en Av. Isidoro del Solar 211.</p>
          </div>
        </div>
      </section>
    </>
  )
}

function Footer() {
  return (
    <footer className="bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src="./public/logo-diagonal.svg" alt="Diagonal Sushi" className="h-10 w-10 rounded-xl" />
          <p className="text-sm text-white/60">© 2026 Diagonal Sushi. Todos los derechos reservados.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-3 transition hover:bg-brand-red"><Instagram size={18} /></a>
          <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-3 transition hover:bg-brand-red"><Facebook size={18} /></a>
          <a href="#" aria-label="TikTok" className="rounded-full bg-white/10 px-3 py-2 text-sm font-black transition hover:bg-brand-red">TikTok</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [cart, setCart] = useState({})
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartItems = useMemo(() => Object.values(cart), [cart])
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)

  const addToCart = (product) => {
    setCart((current) => ({
      ...current,
      [product.id]: { product, quantity: (current[product.id]?.quantity || 0) + 1 },
    }))
  }

  const decreaseQuantity = (productId) => {
    setCart((current) => {
      const item = current[productId]
      if (!item) return current
      if (item.quantity === 1) {
        const { [productId]: _removed, ...rest } = current
        return rest
      }
      return { ...current, [productId]: { ...item, quantity: item.quantity - 1 } }
    })
  }

  const removeFromCart = (productId) => {
    setCart((current) => {
      const { [productId]: _removed, ...rest } = current
      return rest
    })
  }

  return (
    <>
      <Header cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
      <main>
        <HeroBanner onCartOpen={() => setIsCartOpen(true)} />
        <MenuSection cart={cart} onAdd={addToCart} onDecrease={decreaseQuantity} />
        <Locales />
      </main>
      <Footer />
      <CartDrawer isOpen={isCartOpen} cartItems={cartItems} subtotal={subtotal} onClose={() => setIsCartOpen(false)} onAdd={addToCart} onDecrease={decreaseQuantity} onRemove={removeFromCart} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
