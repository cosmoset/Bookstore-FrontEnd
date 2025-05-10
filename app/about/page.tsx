import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Heart, Users, MessageCircle, CheckCircle, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">About Dating App</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              We are on a mission to help people build meaningful connections and find love in a safe, fun environment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dating App was founded in 2020 with a simple mission: to create a dating platform that focuses on
                  meaningful connections rather than superficial swipes.
                </p>
                <p>
                  Our founders, having experienced the frustrations of modern dating apps, set out to build something
                  different—a platform where genuine compatibility and shared values take center stage.
                </p>
                <p>
                  Since our launch, we have helped thousands of couples find love and build lasting relationships. We are
                  proud of the community we have created and the success stories that have emerged from our platform.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=400&width=500" alt="Our team" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Dating App
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Authentic Connections</h3>
                  <p className="text-muted-foreground">
                    We prioritize quality matches over quantity, helping you find people you truly connect with.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                  <p className="text-muted-foreground">
                    Your security is our priority. We implement rigorous verification processes and safety features.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Inclusive Community</h3>
                  <p className="text-muted-foreground">
                    We welcome people of all backgrounds, orientations, and relationship goals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The passionate people behind Dating App</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Johnson", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
              { name: "Sarah Chen", role: "Chief Technology Officer", image: "/placeholder.svg?height=300&width=300" },
              { name: "Michael Rodriguez", role: "Head of Product", image: "/placeholder.svg?height=300&width=300" },
              {
                name: "Emily Williams",
                role: "Chief Marketing Officer",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="rounded-full w-40 h-40 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2M+</div>
              <p className="text-white/80">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500K+</div>
              <p className="text-white/80">Matches Made</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="text-white/80">Success Stories</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-white/80">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets Dating App apart from other dating platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
                <p className="text-muted-foreground">
                  We verify all users to ensure you are connecting with real people. No fake profiles or bots.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Compatibility Matching</h3>
                <p className="text-muted-foreground">
                  Our algorithm goes beyond looks to match you with people who share your values and interests.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Meaningful Conversations</h3>
                <p className="text-muted-foreground">
                  Our chat features are designed to help you have deeper conversations and build real connections.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                <p className="text-muted-foreground">
                  Connect with singles from around the world or focus on people in your local area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of singles looking for meaningful connections. Your perfect match could be just a click
            away.
          </p>
          <Button size="lg" asChild>
            <a href="/signup">Create Your Free Profile</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
