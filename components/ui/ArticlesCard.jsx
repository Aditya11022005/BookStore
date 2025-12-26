import React from "react";
import Image from "next/image";
import articleImg1 from "../../public/assets/images/articleimg1.png";
import articleImg2 from "../../public/assets/images/articleimg2.png";
import articleImg3 from "../../public/assets/images/articleimg3.png";

const ArticlesCard = () => {
return(
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
   {[1, 2, 3].map((i) => (
     <div key={i} className="group space-y-6">
       <div className="aspect-video overflow-hidden bg-muted">
         <Image
           src={i === 1 ? articleImg1 : i === 2 ? articleImg2 : articleImg3}
           alt="Article"
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
         />
       </div>
       <div className="space-y-4">
         <span className="text-xs font-bold text-muted-foreground">2 Aug, 2021</span>
         <h3 className="text-xl font-bold text-primary group-hover:text-[#007bff] transition-colors">
           Reading Books Always Makes The Moments Happy
         </h3>
         <div className="flex items-center gap-4 text-primary">
           {/* <Facebook className="w-4 h-4 hover:text-secondary cursor-pointer" />
           <Twitter className="w-4 h-4 hover:text-secondary cursor-pointer" />
           <Instagram className="w-4 h-4 hover:text-secondary cursor-pointer" /> */}
         </div>
       </div>
     </div>
   ))}
 </div>
)};
export default ArticlesCard;