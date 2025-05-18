"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { toast } from "sonner"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        toast.error("Incorrect email or password")
        return
      }

      toast.success("Login successful! Redirecting to home page...")
      router.push('/') 
    } catch (error) {
      toast.error("Failed to login. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <form onSubmit={handleSubmit}>
          <Card className="w-full backdrop-blur-sm bg-white/80 shadow-xl border-0">
            <CardHeader className="space-y-1 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex justify-center mb-2"
              >
                <BookOpen className="h-12 w-12 text-purple-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Welcome back
                </CardTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <CardDescription className="text-gray-600">
                  Enter your credentials to access your account
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="email@example.com" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-200"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-700">Password</Label>
                  <Link 
                    href="#" 
                    className="text-sm text-purple-600 hover:text-purple-700 hover:underline transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-200"
                />
              </motion.div>
            </CardContent>
            <CardFooter>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg transition-all duration-200"
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </motion.div>
            </CardFooter>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center pb-6"
            >
              <span className="text-sm text-gray-600">
                Dont have an account?{" "}
                <Link href="/signup" className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                  Sign up
                </Link>
              </span>
            </motion.div>
          </Card>
        </form>
      </motion.div>
    </div>
  )
}
