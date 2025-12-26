import React from 'react'
import Image from "next/image";
import logo from "../../images/PUSTAK-MAZA-LOGO.png";

const Footer = () => {
  return (
    <div>
       <footer className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Image className="w-10 h-10 bg-muted rounded-full" src={logo} alt="Logo" />
              <span className="text-xl font-bold tracking-tight">PUSTAK MAZA</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex gap-4">
              {/* <Facebook className="w-5 h-5 text-secondary cursor-pointer" />
              <Linkedin className="w-5 h-5 text-secondary cursor-pointer" />
              <Twitter className="w-5 h-5 text-secondary cursor-pointer" /> */}
              <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center text-white text-[10px]">
                P
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-primary uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm font-semibold text-primary uppercase">
              <li>
                <a href="#" className="hover:text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Ebooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  New Release
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6 md:col-span-2">
            <h4 className="font-bold text-primary uppercase tracking-widest">Latest News</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-20 h-20 bg-muted flex-shrink-0" />
                  <div className="space-y-2">
                    <h5 className="font-bold text-primary text-sm">Nostrud exercitation</h5>
                    <p className="text-[10px] text-muted-foreground leading-tight">
                      Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <span className="text-[10px] text-secondary font-bold">15 April 2022</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-20 pt-8 border-t flex flex-col md:flex-row justify-between text-xs text-muted-foreground">
          <p>© 2025 Pustak Maza. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer