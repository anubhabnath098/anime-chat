"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles, Heart, Users, Star, Zap, Wand2, Smile, Gift } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/characters")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden relative">
      {/* Background elements - static for visual depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        {/* Subtle floating particles - static (adjust opacity if desired) */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full opacity-0"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 md:py-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full mb-6 shadow-2xl">
              <MessageCircle className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
            </div>
            {/* AnimeChat text - now solid color */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-4 text-purple-400"> {/* Changed to solid purple-400 */}
              AnimeChat
            </h1>
            <div className="w-32 sm:w-40 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Chat with Your Favorite
            {/* Anime Characters text - now solid color */}
            <span className="block mt-2 text-pink-400"> {/* Changed to solid pink-400 */}
              Anime Characters
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed px-2">
            Unleash your imagination and experience truly immersive, AI-powered conversations with beloved anime personalities. Discover a roster of <strong className="text-purple-300">over 10 unique characters</strong>, each with their own distinct voice and story.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto px-4">
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-5 border border-white/10 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-1 sm:mb-2" />
              <span className="text-sm sm:text-lg font-semibold text-center">Intelligent AI</span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-5 border border-white/10 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 mb-1 sm:mb-2" />
              <span className="text-sm sm:text-lg font-semibold text-center">Diverse Cast</span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-5 border border-white/10 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mb-1 sm:mb-2" />
              <span className="text-sm sm:text-lg font-semibold text-center">Personalized Chats</span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-5 border border-white/10 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Wand2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-1 sm:mb-2" />
              <span className="text-sm sm:text-lg font-semibold text-center">Magical Experience</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 mb-4 sm:mb-5" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Unparalleled Immersion</h3>
              <p className="text-base sm:text-lg text-gray-300">
                Delve into rich, dynamic conversations where every character's unique voice, quirks, and lore are meticulously captured by our advanced AI. Feel like you're truly interacting with them.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl hover:shadow-pink-500/30 transition-shadow duration-300">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mb-4 sm:mb-5" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Blazing Fast Responses</h3>
              <p className="text-base sm:text-lg text-gray-300">
                Enjoy seamless, real-time interactions with contextual responses that keep the conversation flowing naturally. No more awkward pauses, just pure, uninterrupted chat.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300">
              <Smile className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 mb-4 sm:mb-5" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Tailored Experience</h3>
              <p className="text-base sm:text-lg text-gray-300">
                Our AI adapts to your conversational style, creating a truly personalized experience with each character. Every chat is unique and memorable.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl hover:shadow-red-500/30 transition-shadow duration-300">
              <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-red-400 mb-4 sm:mb-5" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Endless Discovery</h3>
              <p className="text-base sm:text-lg text-gray-300">
                With a growing cast of characters and evolving AI, there's always something new to explore. Uncover hidden dialogues and character insights.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleGetStarted}
            className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-extrabold text-lg sm:text-xl md:text-2xl px-10 py-5 sm:px-12 sm:py-6 md:px-16 md:py-7 rounded-full transform hover:scale-105 transition-all duration-400 shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-70"
          >
            Start Your Anime Journey Now
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ml-3 sm:ml-4" />
          </Button>

          {/* Bottom tagline */}
          <p className="text-gray-400 mt-10 sm:mt-12 md:mt-16 text-base sm:text-lg md:text-xl">
            Join a vibrant community of anime enthusiasts and redefine your fandom!
          </p>
        </div>
      </div>

      {/* Floating elements - static */}
      <div className="absolute top-20 left-1/4 w-5 h-5 bg-purple-400 rounded-full hidden sm:block"></div>
      <div className="absolute top-40 right-1/4 w-4 h-4 bg-pink-400 rounded-full hidden sm:block"></div>
      <div className="absolute bottom-32 left-1/3 w-6 h-6 bg-blue-400 rounded-full hidden sm:block"></div>
      <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-purple-400 rounded-full hidden sm:block"></div>
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-red-400 rounded-full hidden md:block"></div>
      <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-green-400 rounded-full hidden md:block"></div>
    </div>
  )
}