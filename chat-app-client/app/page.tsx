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
        {/* Subtle floating particles - static */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full opacity-20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12 md:py-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full mb-4 sm:mb-6 shadow-2xl">
              <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 sm:mb-4 text-purple-400">
              AnimeChat
            </h1>
            <div className="w-24 sm:w-32 md:w-40 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-2 sm:mt-4"></div>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
            Chat with Your Favorite
            <span className="block mt-1 sm:mt-2 text-pink-400">Anime Characters</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
            Unleash your imagination and experience truly immersive, AI-powered conversations with beloved anime
            personalities. Discover a roster of <strong className="text-purple-300">over 10 unique characters</strong>,
            each with their own distinct voice and story.
          </p>

          {/* CTA Button - Moved to top */}
          <div className="mb-10 sm:mb-12 md:mb-16">
            <Button
              onClick={handleGetStarted}
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-base sm:text-lg md:text-xl px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out hover:shadow-purple-500/50 active:scale-95"
              style={{
                transform: "translateZ(0)", // Force hardware acceleration
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateZ(0) scale(1.05)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateZ(0) scale(1)"
              }}
            >
              Get Started
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 sm:ml-3" />
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 max-w-5xl mx-auto px-2">
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 border border-white/10 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-400 mb-1" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center">
                Intelligent AI
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 border border-white/10 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-pink-400 mb-1" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center">Diverse Cast</span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 border border-white/10 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-400 mb-1" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center">
                Personalized Chats
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 border border-white/10 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Wand2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-400 mb-1" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center">
                Magical Experience
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto px-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-yellow-400 mb-3 sm:mb-4 md:mb-5" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Unparalleled Immersion</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Delve into rich, dynamic conversations where every character's unique voice, quirks, and lore are
                meticulously captured by our advanced AI.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-xl hover:shadow-pink-500/30 transition-shadow duration-300">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400 mb-3 sm:mb-4 md:mb-5" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Blazing Fast Responses</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Enjoy seamless, real-time interactions with contextual responses that keep the conversation flowing
                naturally.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300">
              <Smile className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-400 mb-3 sm:mb-4 md:mb-5" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Tailored Experience</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Our AI adapts to your conversational style, creating a truly personalized experience with each
                character.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-xl hover:shadow-red-500/30 transition-shadow duration-300">
              <Gift className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-red-400 mb-3 sm:mb-4 md:mb-5" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Endless Discovery</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                With a growing cast of characters and evolving AI, there's always something new to explore and discover.
              </p>
            </div>
          </div>

          {/* Bottom tagline */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl px-2">
            Join a vibrant community of anime enthusiasts and redefine your fandom!
          </p>
        </div>
      </div>

      {/* Floating elements - static and hidden on small screens */}
      <div className="absolute top-20 left-1/4 w-4 h-4 bg-purple-400 rounded-full hidden lg:block opacity-60"></div>
      <div className="absolute top-40 right-1/4 w-3 h-3 bg-pink-400 rounded-full hidden lg:block opacity-60"></div>
      <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-blue-400 rounded-full hidden lg:block opacity-60"></div>
      <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-purple-400 rounded-full hidden lg:block opacity-60"></div>
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-red-400 rounded-full hidden xl:block opacity-60"></div>
      <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-green-400 rounded-full hidden xl:block opacity-60"></div>
    </div>
  )
}
