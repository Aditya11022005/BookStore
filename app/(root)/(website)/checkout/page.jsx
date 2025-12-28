"use client"

import { useState } from "react"
import { ShoppingCart, CreditCard, ShieldCheck, Truck } from "lucide-react"
import Image from "next/image"
import bookCover1 from "../../../../public/assets/Productimage/productimg1.jpeg"
import bookCover2 from "../../../../public/assets/Productimage/productimg2.jpeg"

const CART_ITEMS = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 18.5,
    image: bookCover1,
    quantity: 1,
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 22.0,
    image: bookCover2,
    quantity: 1,
  },
]

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const subtotal = CART_ITEMS.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Forms */}
          <div className="lg:col-span-8 space-y-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Complete your purchase</h1>
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <a href="#" className="text-foreground underline underline-offset-4">
                Log in
              </a>{" "}
              for a faster checkout.
            </p>

            {/* Step 1: Shipping */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded bg-primary text-primary-foreground font-bold">
                  1
                </span>
                <h2 className="text-2xl font-bold tracking-tight uppercase">Shipping Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Harshal"
                    className="w-full bg-card border border-border p-4 rounded focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mahajan"
                    className="w-full bg-card border border-border p-4 rounded focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    className="w-full bg-card border border-border p-4 rounded focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Literary Lane"
                    className="w-full bg-card border border-border p-4 rounded focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </section>

            {/* Step 2: Payment */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded border border-border text-muted-foreground font-bold">
                  2
                </span>
                <h2 className="text-2xl font-bold tracking-tight uppercase">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 border border-primary bg-card rounded flex justify-between items-center cursor-pointer">
                  <div className="flex items-center gap-3">
                    <CreditCard size={20} />
                    <span className="font-medium">Credit or Debit Card</span>
                  </div>
                  <div className="w-4 h-4 rounded-full border-4 border-primary bg-background"></div>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full bg-card border border-border p-4 rounded focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                        Expiry
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full bg-card border border-border p-4 rounded focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full bg-card border border-border p-4 rounded focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* {comfortm address details here...} */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded border border-border text-muted-foreground font-bold">
                  3
                </span>
                <h2 className="text-2xl font-bold tracking-tight uppercase">Conform your address details</h2>
              </div>

              <div className="grid grid-cols-1 gap-4">

                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                      Adress
                    </label>
                    <input
                      type="text"
                      placeholder="P123-g5 Shivaji nagar pune india"
                      className="w-full bg-card border border-border p-4 rounded focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="(+91) 00000-00000"
                        className="w-full bg-card border border-border p-4 rounded focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                        PIN CODE
                      </label>
                      <input
                        type="text"
                        placeholder="123456"
                        className="w-full bg-card border border-border p-4 rounded focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 h-fit space-y-8">
            <div className="p-8 bg-card border border-border rounded-lg space-y-6">
              <h2 className="text-2xl font-bold tracking-tight uppercase border-b border-border pb-4">Order summary</h2>

              <div className="space-y-4">
                {CART_ITEMS.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-16 h-24 object-cover rounded shadow-md"
                    />
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="text-sm font-bold uppercase leading-tight">{item.title}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.author}</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <input type="number" className="text-xs font-medium uppercase text-muted-foreground" placeholder={`Qty: ${item.quantity}`} />
                        <span className="font-bold">${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold uppercase tracking-tight pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-[#ED553B] text-primary-foreground py-4 rounded font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-4 cursor-pointer">
                Checkout <ShoppingCart size={18} />
              </button>

              <div className="space-y-4 pt-6 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-foreground" />
                  Secure encrypted payment
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={14} className="text-foreground" />
                  Standard delivery 3-5 business days
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
