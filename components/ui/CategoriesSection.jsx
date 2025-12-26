import React from "react";  
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img1 from '../../public/assets/images/Gig-Image-1-1.png'
import img2 from '../../public/assets/images/Gig-Image-1-2.png'
import img3 from '../../public/assets/images/Gig-Image-1.png'
import img4 from '../../public/assets/images/images-1.png'
import img5 from '../../public/assets/images/index-1.png'


const CategoriesSection = () => {
  const categories = [
  {
    "title": "Higher Education",
    "image": img1
  },
  {
    "title": "Management Books",
    "image": img2
  },
  {
    "title": "Finance Books",
    "image": img3
  },
  {
    "title": "Engineering Books",
    "image": img4
  },
  {
    "title": "Commerce Books",
    "image": img5
  }
]

  return (
    <>
      {/* FIRST CATEGORY (your first card) */}
      <div className="relative group overflow-hidden h-[300px]">
        <Image src={categories[0].image} alt={categories[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{categories[0].title}</h3>
        </div>
      </div>

      {/* YOUR CENTER SECTION (same CSS) */}
      <div className="bg-white p-12 flex flex-col items-center justify-center text-center space-y-6 border border-muted">
        <h3 className="text-3xl font-bold text-primary uppercase">Explore Our Top Categories</h3>
        <Button
          variant="[#ED553B]"
          size="lg"
          className="bg-[#ED553B] hover:bg-secondary/90 text-white rounded-md px-10"
        >
          View All
        </Button>
      </div>

      {/* REST OF THE CATEGORIES */}
      {categories.slice(1).map((item, index) => (
        <div key={index} className="relative group overflow-hidden h-[300px]">
          <Image src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoriesSection;
