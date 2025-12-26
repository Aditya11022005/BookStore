"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
// import AuthorImg from "../../public/assets/images/AuthorImg.png";
import NewLonchImg from "../../public/assets/images/newLo.png";
import Image from "next/image";


const BannerSlide = () => {

  const bannerArray = [
  {
    title: "Coming Soon",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet.",
    authorImg: "../../public/assets/images/AuthorImg.png",
    books: [NewLonchImg],
  },
  {
    title: "New Release",
    desc: "Another book is on the way! Stay tuned for the latest updates.",
    authorImg: "../../public/assets/images/AuthorImg.png",
    books: [NewLonchImg],
  },
  {
    title: "Latest Publication",
    desc: "Great stories, powerful emotions, timeless characters. Releasing next month!",
    authorImg: "../../public/assets/images/AuthorImg.png",
    books: [NewLonchImg],
  },
];

  return (
    <section className="bg-[#e3ecf0] py-16">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={30}
        className="container mx-auto px-4"
      >
        {bannerArray.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

              <div className="flex-1">
                <Image 
                  src="/assets/images/AuthorImg.png" 
                  width={350}
                  height={350}
                  alt="Author"
                />
              </div>

              <div className="flex-[2] space-y-6">
                <h2 className="text-5xl font-black text-primary uppercase italic">{item.title}</h2>
                <p className="text-primary/70 leading-relaxed max-w-lg">{item.desc}</p>

                <Button
                  variant="outline"
                  className="rounded-none border-primary/30 text-primary hover:bg-primary hover:text-white px-10 py-6 uppercase text-sm font-bold bg-transparent"
                >
                  View More <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4">
                {item.books.map((book, bookIndex) => (
                  <Image key={bookIndex} src={book} alt="Book" className="shadow-xl" width={350}
  height={350} />
                ))}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BannerSlide;