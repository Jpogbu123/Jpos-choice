import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag, Check, MapPin, User, Phone, Lock, Sparkles } from 'lucide-react';
import { CartItem, OrderDetails } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateCount: (id: string, delta: number) => void;
  onRemoveFromCart: (id: string) => void;
  onClearCart: () => void;
  whatsappNumber: string;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateCount,
  onRemoveFromCart,
  onClearCart,
  whatsappNumber
}: CartDrawerProps) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  const [formData, setFormData] = useState<OrderDetails>({
    fullName: '',
    address: '',
    phone: ''
  });

  const parsedPrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
  };

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + (parsedPrice(item.price) * item.quantity);
  }, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.address || !formData.phone) {
      alert('Please fill in Name, Shipping Address, and Contact Phone number.');
      return;
    }

    // Generate simulated order reference ID
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const reference = `JPO-2026-${randomNum}`;
    setOrderId(reference);

    // Formulate beautiful WhatsApp text
    let orderListText = '';
    cartItems.forEach((item, index) => {
      const typeLabel = item.isStackLayer ? 'Stack Layer' : 'Pillar Bottle';
      orderListText += `${index + 1}. *${item.name}* [${typeLabel}] (${item.price} x ${item.quantity})\n`;
    });

    const text = encodeURIComponent(
      `🏛️ *NEW JPO's CHOICE FRAGRANCE ORDER*\n` +
      `------------------------------------\n` +
      `*Order ID:* ${reference}\n\n` +
      `*ARCHIVE ITEMS:* \n${orderListText}\n` +
      `*TOTAL:* $${subtotal}\n\n` +
      `------------------------------------\n` +
      `*SHIPPING REQUEST DETAILS:* \n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📍 *Address:* ${formData.address}\n` +
      `📞 *Phone:* ${formData.phone}\n\n` +
      `Please confirm availability, custom packaging, and payment methods for delivery. Thank you!`
    );

    // Open WhatsApp link
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanNumber}?text=${text}`;
    window.open(waUrl, '_blank');

    // Trigger Success view and reset cart at the end
    setIsSuccess(true);
    setIsCheckout(false);
  };

  const handleCompleteSuccess = () => {
    onClearCart();
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            id="cart-backdrop"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-lg bg-obsidian-light border-l border-gold/15 flex flex-col justify-between shadow-2xl overflow-hidden font-sans"
            id="cart-drawer-panel"
          >
            {/* Neoclassical corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/40 pointer-events-none" />

            {/* Header */}
            <div className="p-6 border-b border-gold/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-gold stroke-[1.5]" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gold text-obsidian text-[9px] font-bold flex items-center justify-center font-mono animate-pulse">
                      {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg tracking-widest text-[#FFF] uppercase">
                  {isSuccess ? 'Inquiry Dispatched' : isCheckout ? 'Shipping Archive' : 'Olfactory Cart'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 border border-gold/10 hover:border-gold flex items-center justify-center text-[#FFF] hover:text-gold transition-colors cursor-pointer"
                id="btn-close-cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-grow overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gold/10">
              {isSuccess ? (
                /* Success screen */
                <div className="text-center py-12 px-4 space-y-6 flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center text-gold mb-2">
                    <Check className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif text-2xl tracking-widest uppercase text-gold leading-snug">
                    Bespoke Selection Secured
                  </h4>
                  <div className="bg-black/40 border border-gold/15 p-4 w-full text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-cream/40 block mb-1">REFERENCE ID</span>
                    <strong className="font-mono text-gold text-sm tracking-wider">{orderId}</strong>
                  </div>
                  <div className="space-y-4 max-w-sm text-center">
                    <p className="text-xs text-cream-muted leading-relaxed font-light">
                      Your premium reservation summary has been structured and dispatched directly to the JPO's Choice studio concierge via WhatsApp.
                    </p>
                    <p className="text-[11px] text-cream/30 italic">
                      "A formulation consultant will review your selection, check live reserves, and assist you with delivery specifications shortly."
                    </p>
                  </div>
                  <button
                    onClick={handleCompleteSuccess}
                    className="w-full bg-gold hover:bg-gold-hover text-obsidian py-3.5 text-xs tracking-[0.2em] font-bold uppercase transition block cursor-pointer select-none rounded-none"
                    id="btn-confirm-success-close"
                  >
                    Return to Catalogue
                  </button>
                </div>
              ) : isCheckout ? (
                /* Checkout Form Screen */
                <form onSubmit={handleSubmitCheckout} className="space-y-6 text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-serif block">[Step 2 of 2]</span>
                    <h4 className="font-serif text-lg uppercase tracking-wider text-cream">Concierge Shipping Info</h4>
                    <p className="text-[11px] text-cream-muted leading-relaxed">
                      Please enter your details to route customized packaging and checkout logs straight to WhatsApp.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] tracking-widest uppercase text-cream/40 flex items-center gap-1.5 font-serif">
                        <User className="w-3.5 h-3.5 text-gold" /> Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-gold/20 text-[#FFF] placeholder-cream/25 text-xs focus:outline-none focus:border-gold py-3 px-4 font-sans rounded-none transition"
                        placeholder="e.g. Joy Ogbu"
                        id="input-cart-name"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] tracking-widest uppercase text-cream/40 flex items-center gap-1.5 font-serif">
                        <MapPin className="w-3.5 h-3.5 text-gold" /> Shipping Address <span className="text-gold">*</span>
                      </label>
                      <textarea
                        name="address"
                        required
                        rows={3}
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-gold/20 text-[#FFF] placeholder-cream/25 text-xs focus:outline-none focus:border-gold py-3 px-4 font-sans rounded-none transition resize-none leading-relaxed"
                        placeholder="e.g. Royal Estate, Karu, Fct, Abuja"
                        id="input-cart-address"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] tracking-widest uppercase text-cream/40 flex items-center gap-1.5 font-serif">
                        <Phone className="w-3.5 h-3.5 text-gold" /> Contact Phone <span className="text-gold">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-gold/20 text-[#FFF] placeholder-cream/25 text-xs focus:outline-none focus:border-gold py-3 px-4 font-sans rounded-none transition"
                        placeholder="e.g. +234 812 345 6789"
                        id="input-cart-phone"
                      />
                    </div>


                  </div>

                  {/* Summary recap inside checkout */}
                  <div className="border border-gold/10 bg-black/20 p-4 space-y-3 mt-4">
                    <span className="text-[9px] tracking-widest uppercase text-cream/40 font-serif block">Reservation Summary</span>
                    <div className="max-h-24 overflow-y-auto space-y-2 text-[11px] border-b border-gold/5 pb-2">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center text-cream-muted">
                          <span>{item.name} <strong className="font-mono text-gold-light">x{item.quantity}</strong></span>
                          <span>{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs tracking-wider uppercase">
                      <span className="text-gold">Grand Total</span>
                      <strong className="text-gold text-sm">${subtotal}</strong>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsCheckout(false)}
                      className="w-1/3 bg-transparent hover:bg-cream/5 border border-gold/20 text-cream-muted py-3.5 text-xs tracking-wider uppercase transition cursor-pointer"
                      id="btn-checkout-back"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-gold hover:bg-gold-hover text-obsidian py-3.5 text-xs tracking-[0.2em] font-bold uppercase transition flex items-center justify-center gap-2 cursor-pointer select-none rounded-none"
                      id="btn-checkout-confirm"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Dispatch WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : cartItems.length === 0 ? (
                /* Empty Cart screen */
                <div className="text-center py-20 px-4 space-y-6 flex flex-col items-center justify-center h-full">
                  <div className="w-12 h-12 rounded-full border border-gold/15 flex items-center justify-center text-gold/30">
                    <ShoppingBag className="w-5 h-5 stroke-[1.2]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-base tracking-widest uppercase text-cream">Archive is Vacant</h4>
                    <p className="text-xs text-cream-muted leading-relaxed max-w-[280px] mx-auto font-light">
                      No olfactory artifacts have been added to your reservation stack yet.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      const el = document.getElementById('catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border border-gold text-gold py-2.5 px-6 font-bold text-[10px] tracking-widest uppercase hover:bg-gold hover:text-black transition-colors rounded-none"
                    id="btn-cart-empty-browse"
                  >
                    Select a Scent
                  </button>
                </div>
              ) : (
                /* Item List Screen */
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-[10px] tracking-widest uppercase text-gold font-serif">
                    <span>[Step 1 of 2] Selected Formula</span>
                    <span>Subtotal</span>
                  </div>

                  {/* Products Map */}
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-black/30 border border-gold/10 hover:border-gold/30 p-4 flex gap-4 transition duration-300 relative"
                        id={`cart-item-${item.id}`}
                      >
                        {/* Image */}
                        <div className="w-16 h-16 shrink-0 relative bg-black border border-gold/10 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover grayscale-[15%]"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-grow flex flex-col justify-between text-left">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <div>
                                <h5 className="font-serif text-sm tracking-wider uppercase text-cream leading-tight">
                                  {item.name}
                                </h5>
                                <span className="text-[8px] font-serif uppercase tracking-[0.25em] text-gold-light mt-0.5 block">
                                  {item.category}
                                </span>
                              </div>
                              <span className="font-mono text-xs text-gold font-semibold">{item.price}</span>
                            </div>
                            
                            {item.size && (
                              <p className="text-[9px] font-mono text-cream/40 mt-1 uppercase">
                                {item.concentration} &bull; {item.size}
                              </p>
                            )}
                          </div>

                          {/* Action Bar */}
                          <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-gold/5">
                            {/* Quantity selector */}
                            <div className="flex items-center bg-black/60 border border-gold/10 h-7 text-[11px] font-mono">
                              <button
                                onClick={() => onUpdateCount(item.id, -1)}
                                className="w-7 h-full flex items-center justify-center text-cream/60 hover:text-gold transition-colors hover:bg-gold/5 cursor-pointer border-r border-gold/10"
                                aria-label="Decrease count"
                                id={`btn-cart-dec-${item.id}`}
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-gold font-bold">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateCount(item.id, 1)}
                                className="w-7 h-full flex items-center justify-center text-cream/60 hover:text-gold transition-colors hover:bg-gold/5 cursor-pointer border-l border-gold/10"
                                aria-label="Increase count"
                                id={`btn-cart-inc-${item.id}`}
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Delete */}
                            <button
                              onClick={() => onRemoveFromCart(item.id)}
                              className="text-cream/30 hover:text-rose-400 p-1.5 transition-colors cursor-pointer"
                              title="Delete Item"
                              id={`btn-cart-del-${item.id}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Clean cart button */}
                  <button
                    onClick={onClearCart}
                    className="text-[9px] font-serif uppercase tracking-widest text-[#FFF]/30 hover:text-[#FFF]/80 transition-colors mx-auto block cursor-pointer"
                    id="btn-cart-clear-all"
                  >
                    Clear Scent Reservation
                  </button>
                </div>
              )}
            </div>

            {/* Footer Summary (Sticky at bottom, omitted if Success screen is active) */}
            {!isSuccess && cartItems.length > 0 && (
              <div className="p-6 border-t border-gold/15 bg-black/40 text-left space-y-4">
                {!isCheckout ? (
                  <>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs tracking-wider text-cream/50 uppercase font-serif">
                        <span>Items Subtotal</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                        <span className="text-gold">Scent Reservation Stack</span>
                        <span className="text-gold text-lg">${subtotal}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setIsCheckout(true)}
                      className="w-full bg-gold hover:bg-gold-hover text-obsidian py-3.5 text-xs tracking-[0.25em] font-bold uppercase transition flex items-center justify-center gap-2 select-none rounded-none cursor-pointer"
                      id="btn-cart-proceed-checkout"
                    >
                      <span>Proceed to Shipping</span>
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    </button>
                  </>
                ) : null}

                <div className="flex justify-center items-center gap-2 text-[9px] font-sans text-cream/30 uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Curating longevity with 100% lipid longevity.</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
