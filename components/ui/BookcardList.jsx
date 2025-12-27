"use client"
import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const BookCard = ({ title, author, price, image, showAddToCart }) => {
  return (
    <Card className="border-none shadow-none group cursor-pointer text-center bg-white">
      <CardContent className="p-0 space-y-4">
        <div className="aspect-[3/4] bg-[#f8f9fa] overflow-hidden relative border border-gray-100 shadow-sm">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-[#f15a24] text-white py-3 font-bold text-sm transition-opacity duration-300 ${showAddToCart ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          >
            ADD TO CART
          </div>
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-[#1a1a1a] transition-colors line-clamp-1">{title}</h4>
          <p className="text-xs text-muted-foreground">{author}</p>
          <div className="pt-2">
            <span className="text-[#f15a24] font-bold text-lg">${price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BookCard
