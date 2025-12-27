"use client"
import React, { useState } from "react";
import { SidebarFilters } from "@/components/ui/SidebarFilters"
import BookCard from "@/components/ui/BookcardList"
import { ChevronLeft, ChevronRight, LayoutGrid, List, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import booksimg from "../../../../public/assets/Productimage/productimg1.jpeg"
import booksimg2 from "../../../../public/assets/Productimage/productimg2.jpeg"
import booksimg3 from "../../../../public/assets/Productimage/productimg3.jpeg"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const BOOKS = [
  {
    id: "book-1",
    title: "Simple Way Of Piece Life",
    author: "Armor Ramsey",
    price: 40.0,
    image: booksimg,
    showAddToCart: true,
  },
  {
    id: "book-2",
    title: "Great Travel At Desert",
    author: "Sanchit Howdy",
    price: 38.0,
    image: booksimg2,
  },
  {
    id: "book-3",
    title: "The Lady Beauty Scarlett",
    author: "Arthur Doyle",
    price: 45.0,
    image: booksimg3,
  },
]



export default function ProductListingPage() {

  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState("az");
  const [showCount, setShowCount] = useState(12);


  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      

      <main className="flex-1 container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className={`w-full lg:w-64 flex-shrink-0 bg-white p-4 border-r z-20 transform transition-all duration-300 ease-in-out origin-top lg:translate-y-0 lg:opacity-100 lg:block
            ${showFilters 
              ? "translate-y-0 opacity-100 block" 
              : "-translate-y-full opacity-0 hidden"}
          `}>
            <SidebarFilters />
          </aside>

          <div className="flex-1 space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b pb-8">
              <div className="flex items-center gap-8">
                {/* <button className="flex items-center gap-2 text-sm font-bold text-[#2d323e]">
                  Sort by : Alphabetically, A-Z <ChevronDown className="w-4 h-4" />
                </button> */}
               <DropdownMenu>
                 <DropdownMenuTrigger asChild>
                   <button className="flex items-center gap-2 text-sm font-bold text-[#2d323e]">
                     Sort by : Alphabetically, A-Z <ChevronDown className="w-4 h-4" />
                   </button>
                 </DropdownMenuTrigger>
               
                 <DropdownMenuContent className="w-56">
                   <DropdownMenuItem onClick={() => console.log("A-Z")}>
                     Alphabetically, A-Z
                   </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => console.log("Z-A")}>
                     Alphabetically, Z-A
                   </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => console.log("low-high")}>
                     Price: Low to High
                   </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => console.log("high-low")}>
                     Price: High to Low
                   </DropdownMenuItem>
                 </DropdownMenuContent>
               </DropdownMenu>
               
                <span className="text-sm text-gray-500">Showing 1 - 12 of 26 result</span>
              </div>
              <div className="flex items-center gap-8">
               <DropdownMenu>
                 <DropdownMenuTrigger asChild>
                   <button className="flex items-center gap-2 text-sm font-bold text-[#2d323e]">
                     Show : {showCount} <ChevronDown className="w-4 h-4" />
                   </button>
                 </DropdownMenuTrigger>
               
                 <DropdownMenuContent className="w-40">
                   <DropdownMenuItem onClick={() => setShowCount(12)}>
                     12
                   </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => setShowCount(24)}>
                     24
                   </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => setShowCount(36)}>
                     36
                   </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => setShowCount("All")}>
                     All
                   </DropdownMenuItem>
                 </DropdownMenuContent>
               </DropdownMenu>

                <div className="flex items-center gap-4 text-gray-400">
                  <LayoutGrid className="w-6 h-6 text-[#f15a24]" />
                  <List className="w-6 h-6 cursor-pointer lg:hidden" onClick={() => setShowFilters(!showFilters)}/>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {BOOKS.map((book, i) => (
                <BookCard
                  key={i}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  image={book.image}
                  showAddToCart={book.showAddToCart}
                />
              ))}
            </div>

            <div className="flex justify-center items-center gap-3 pt-12">
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-gray-200 bg-transparent">
                <ChevronLeft className="w-4 h-4 text-gray-400" />
              </Button>
              <Button className="rounded-full w-10 h-10 bg-[#f15a24] hover:bg-[#d64a1d] text-white font-bold">1</Button>
              <Button
                variant="outline"
                className="rounded-full w-10 h-10 border-gray-200 text-gray-500 font-bold hover:bg-gray-50 bg-transparent"
              >
                2
              </Button>
              <Button
                variant="outline"
                className="rounded-full w-10 h-10 border-gray-200 text-gray-500 font-bold hover:bg-gray-50 bg-transparent"
              >
                3
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-gray-200 bg-transparent">
                <ChevronRight className="w-4 h-4 text-[#f15a24]" />
              </Button>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
