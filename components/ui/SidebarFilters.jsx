"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SidebarFilters() {
  return (
    <div className="space-y-6">
      <Accordion
        type="multiple"
        defaultValue={["price", "product-type", "availability", "brand", "color", "material"]}
        className="w-full"
      >
        {/* PRICE FILTER */}
        <AccordionItem value="price" className="border-b">
          <AccordionTrigger className="text-sm font-bold uppercase py-4">Price</AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <Input type="number" className="pl-6 h-10" placeholder="Min" />
                </div>
                <span className="text-gray-400">to</span>
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <Input type="number" className="pl-6 h-10" placeholder="Max" />
                </div>
              </div>
              <Button className="w-full bg-[#2d323e] hover:bg-[#f15a24] text-white py-6">Filter</Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* OTHER FILTERS WITH TWO OPTIONS EACH */}
        {[
          { name: "Product type", options: ["Fiction", "Non-fiction"] },
          { name: "Availability", options: ["In Stock", "Out of Stock"] },
          { name: "Brand", options: ["Penguin", "HarperCollins"] },
          { name: "Color", options: ["Red", "Blue"] },
          { name: "Material", options: ["Paperback", "Hardcover"] },
        ].map((filter) => (
          <AccordionItem
            key={filter.name}
            value={filter.name.toLowerCase().replace(" ", "-")}
            className="border-b"
          >
            <AccordionTrigger className="text-sm font-bold uppercase py-4">
              {filter.name}
            </AccordionTrigger>

            <AccordionContent className="pb-4 space-y-2">
              {filter.options.map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-[#f15a24] rounded border-gray-300"
                  />
                  {option}
                </label>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
