"use client"
import React from "react";
import Image from "next/image";
import productimg from "../../public/assets/Productimage/productimg1.jpeg";

export default function BookInfo() {
  const [quantity, setQuantity] = React.useState(1);

  const hendleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  }

  const hendlequantityminus = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }


  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
      <div className="flex gap-4">
        {/* Thumbnails */}
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              src={productimg.src}
              alt={`Thumbnail ${i}`}
              className="w-20 h-28 object-cover rounded shadow-sm cursor-pointer hover:ring-2 hover:ring-primary transition-all"
            />
          ))}
        </div>
        {/* Main Image */}
        <div className="flex-1 bg-neutral-100 rounded-lg overflow-hidden flex items-center justify-center p-8 shadow-sm">
          <Image
            src={productimg}
            alt="Main Book Cover"
            className="w-full max-w-[350px] object-contain drop-shadow-xl"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold leading-tight mb-6 text-neutral-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>

        <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
          <div className="space-y-4">
            <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Price</span>
            <div className="flex items-center gap-4">
              <span className="text-2xl text-neutral-400 line-through">₹ 1999</span>
              <span className="text-4xl font-bold text-neutral-800">₹ 1599</span>
              <span className="bg-green-100 text-green-600 px-2 py-1 rounded font-bold text-sm">20% off</span>
            </div>
            <p className="text-sm text-neutral-600">
              Hurry up! Offer close in next <span className="text-primary font-bold">03:55:00</span>
            </p>
          </div>

          <div className="text-right">
            <span className="text-2xl font-bold block mb-1">4.5/5</span>
            <div className="text-yellow-400 text-sm tracking-tighter">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

       <div className="block space-y-4">
         <div className="flex items-center border border-neutral-200 rounded overflow-hidden w-32 mb-4">
           <button className="px-4 py-2 hover:bg-neutral-100" onClick={hendlequantityminus}>-</button>
           <input
             type="text"
             value={quantity}
             readOnly
             className="w-12 text-center border-x border-neutral-200 py-2 focus:outline-none"
           />
           <button className="px-4 py-2 hover:bg-neutral-100" onClick={() => hendleQuantityChange(1)}>+</button>
         </div>
       
         <button className="btn btn-outline border border-neutral-300 block mx-auto cursor-pointer w-[80%] px-5 py-3 hover:bg-neutral-100 transition-colors">
           Add to Cart
         </button>
         
         <button className="btn bg-[#f15a24] text-white block mx-auto mt-3 cursor-pointer w-[80%] px-5 py-3 hover:bg-[#d64a1d] transition-colors">
           Buy Now
         </button>
       </div>


      </div>
    </section>
  )
}
