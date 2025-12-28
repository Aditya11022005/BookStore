"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import bookcoverimg1 from "../../../../public/assets/Productimage/productimg1.jpeg"
import bookcoverimg2 from "../../../../public/assets/Productimage/productimg2.jpeg"
import bookcoverimg3 from "../../../../public/assets/Productimage/productimg3.jpeg"
// import { useToast } from "@/hooks/use-toast"

export default function WishlistPage() {
//   const { toast } = useToast()
  // Mock wishlist data
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      price: "$18.50",
      image: bookcoverimg1,
      inStock: true,
    },
    {
      id: 2,
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: "$24.00",
      image: bookcoverimg2,
      inStock: true,
    },
    {
      id: 3,
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      price: "$16.99",
      image: bookcoverimg3,
      inStock: false,
    },
  ])

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id))
    // toast({
    //   title: "Removed from wishlist",
    //   description: "The item has been removed successfully.",
    // })
  }

//   const addToCart = (item) => {
//     toast({
//       title: "Added to cart",
//       description: `${item.title} has been added to your shopping cart.`,
//     })
//   }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Wishlist</h1>
          <p className="text-muted-foreground">Keep track of the books you want to read next.</p>
        </div>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <Card key={item.id} className="flex flex-col h-[80%] overflow-hidden group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                {!item.inStock && (
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
                    <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              <CardHeader className="p-4 pb-0">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <CardTitle className="text-lg line-clamp-1">{item.title}</CardTitle>
                    <CardDescription>{item.author}</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive shrink-0"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-2 flex-grow">
                <p className="text-xl font-bold text-primary">{item.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-[#ED553B] hover:bg-[#ED553B]/90% cursor-pointer" disabled={!item.inStock} onClick={() => addToCart(item)}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="flex flex-col items-center justify-center p-12 text-center border-dashed">
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-muted-foreground" />
          </div>
          <CardTitle className="mb-2">Your wishlist is empty</CardTitle>
          <CardDescription className="mb-6">Explore our collection and save books you love for later.</CardDescription>
          <Button asChild>
            <Link href="/">Browse Books</Link>
          </Button>
        </Card>
      )}
    </div>
  )
}
