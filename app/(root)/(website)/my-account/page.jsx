"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ProfileUpdateForm from "@/components/ui/ProfileUpdate"
import { Package, MapPin, Phone, Mail, Edit2 } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex.j@example.com",
    address: "789 Storybook Lane, Fiction Heights, NY 10012",
    contactNumber: "+1 (555) 123-4567",
    joinedDate: "January 2024",
    avatar: "/diverse-user-avatars.png",
  })

  // Mock Orders Data
  const orders = [
    {
      id: "ORD-9921",
      date: "Dec 12, 2025",
      status: "Delivered",
      total: "$42.50",
      items: ["The Midnight Library", "Project Hail Mary"],
    },
    {
      id: "ORD-8842",
      date: "Nov 28, 2025",
      status: "Processing",
      total: "$24.99",
      items: ["Tomorrow, and Tomorrow, and Tomorrow"],
    },
  ]

  const handleProfileUpdate = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }))
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: User Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4 border-2 border-primary/20">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{user.name}</CardTitle>
              <p className="text-sm text-muted-foreground">Member since {user.joinedDate}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Separator />
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{user.contactNumber}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-pretty">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span>{user.address}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={() => setIsEditing(!isEditing)}>
                <Edit2 className="h-4 w-4 mr-2" />
                {isEditing ? "View Profile" : "Edit Profile"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Dynamic Content (Update Form or Orders) */}
        <div className="lg:col-span-2 space-y-6">
          {isEditing ? (
            <ProfileUpdateForm user={user} onUpdate={handleProfileUpdate} onCancel={() => setIsEditing(false)} />
          ) : (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Order History
                  </CardTitle>
                  <CardDescription>Track and manage your recent book purchases.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-sm">{order.id}</span>
                            <Badge variant={order.status === "Delivered" ? "success" : "secondary"}>
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                          <p className="text-sm font-medium">{order.items.join(", ")}</p>
                        </div>
                        <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                          <span className="text-lg font-bold text-primary">{order.total}</span>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
