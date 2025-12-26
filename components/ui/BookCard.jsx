"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

import bookimg1 from "../../public/assets/Productimage/productimg1.jpeg";
import bookimg2 from "../../public/assets/Productimage/productimg2.jpeg";
import bookimg3 from "../../public/assets/Productimage/productimg3.jpeg";
import bookimg4 from "../../public/assets/Productimage/productimg4.jpeg";
import bookimg5 from "../../public/assets/Productimage/productimg5.jpeg";

const bookImages = [bookimg1, bookimg2, bookimg3, bookimg4, bookimg5];

const BookCard = () => {
  return (
    <div className="flex space-x-10 overflow-x-auto snap-x snap-mandatory px-4">
      {bookImages.map((img, i) => (
        <Card
          key={i}
          className="min-w-[250px] sm:min-w-[300px] snap-center border-none shadow-none group cursor-pointer text-left"
        >
          <CardContent className="p-0 space-y-4">
            <div className="aspect-[3/4] bg-muted overflow-hidden relative">
              <Image
                src={img}
                alt="Book"
                width={300}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-1 text-center">
              <h4 className="font-bold text-primary group-hover:text-[#007bff] transition-colors uppercase">
                The Road to Recognition
              </h4>
              <p className="text-xs text-muted-foreground">Seth Price / Barry Feldman</p>
              <div className="flex justify-center gap-0.5 pt-1">
                {[1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-secondary text-secondary" />
                ))}
                <Star className="w-3 h-3 text-muted" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BookCard;
