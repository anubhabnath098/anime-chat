"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles, Heart, Users, Star, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/characters")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mb-6 shadow-2xl">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              AnimeChat
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Chat with Your Favorite
            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Anime Characters
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience immersive conversations with beloved anime personalities powered by advanced AI. Connect with 10
            unique characters in a whole new way.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
              <Users className="w-6 h-6 text-pink-400" />
              <span className="text-lg font-medium">10 Characters</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
              <Heart className="w-6 h-6 text-red-400" />
              <span className="text-lg font-medium">Personalized</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Star className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Immersive Conversations</h3>
              <p className="text-gray-300">
                Engage in realistic conversations with AI that captures each character's unique personality.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Zap className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Real-time Responses</h3>
              <p className="text-gray-300">
                Experience instant, contextual responses that maintain character consistency.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <Button
              onClick={handleGetStarted}
              className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-xl px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Get Started
              <MessageCircle className="w-6 h-6 ml-3" />
            </Button>
          </div>

          {/* Bottom tagline */}
          <p className="text-gray-400 mt-12 text-lg">
            Join thousands of users already chatting with their favorite anime characters
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-32 left-32 w-5 h-5 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-500"></div>
    </div>
  )
}
