"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, RotateCcw, Home } from "lucide-react"
import { useRouter } from "next/navigation"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: number
}

interface ChatResponse {
  session_id: string
  reply: string
}

const characterInfo = {
  "Mikasa Ackerman": {
    type: "girlfriend",
    anime: "Attack on Titan",
    color: "from-red-500 to-pink-500",
    bgPattern: "bg-gradient-to-br from-red-900/10 via-gray-900 to-pink-900/10",
    chatBg: "from-red-900/20 to-pink-900/20",
    profilePic: "/images/mikasa_ackerman.jpg", // Changed from icon to profilePic
    personality: "fierce-loyal",
  },
  "Rias Gremory": {
    type: "girlfriend",
    anime: "High School DxD",
    color: "from-purple-500 to-pink-500",
    bgPattern: "bg-gradient-to-br from-purple-900/10 via-gray-900 to-pink-900/10",
    chatBg: "from-purple-900/20 to-pink-900/20",
    profilePic: "/images/rias_gremory.jpg", // Changed from icon to profilePic
    personality: "regal-warm",
  },
  "Chizuru Mizuhara": {
    type: "girlfriend",
    anime: "Rent-a-Girlfriend",
    color: "from-pink-500 to-rose-500",
    bgPattern: "bg-gradient-to-br from-pink-900/10 via-gray-900 to-rose-900/10",
    chatBg: "from-pink-900/20 to-rose-900/20",
    profilePic: "/images/chizuru_mizuhara.jpg", // Changed from icon to profilePic
    personality: "professional-kind",
  },
  "Marin Kitagawa": {
    type: "girlfriend",
    anime: "My Dress-Up Darling", // Corrected anime title
    color: "from-yellow-500 to-pink-500",
    bgPattern: "bg-gradient-to-br from-yellow-900/10 via-gray-900 to-pink-900/10",
    chatBg: "from-yellow-900/20 to-pink-900/20",
    profilePic: "/images/marin_kitagawa.jpg", // Changed from icon to profilePic
    personality: "bubbly-energetic",
  },
  "Hinata Hyuga": {
    type: "girlfriend",
    anime: "Naruto",
    color: "from-purple-500 to-indigo-500",
    bgPattern: "bg-gradient-to-br from-purple-900/10 via-gray-900 to-indigo-900/10",
    chatBg: "from-purple-900/20 to-indigo-900/20",
    profilePic: "/images/hinata_hyuga.jpg", // Changed from icon to profilePic
    personality: "gentle-strong",
  },
  "Satoru Gojo": {
    type: "boyfriend",
    anime: "Jujutsu Kaisen",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "bg-gradient-to-br from-blue-900/10 via-gray-900 to-cyan-900/10",
    chatBg: "from-blue-900/20 to-cyan-900/20",
    profilePic: "/images/satoru_gojo.jpg", // Changed from icon to profilePic
    personality: "confident-playful",
  },
  "Levi Ackerman": {
    type: "boyfriend",
    anime: "Attack on Titan",
    color: "from-gray-500 to-blue-500",
    bgPattern: "bg-gradient-to-br from-gray-900/10 via-gray-900 to-blue-900/10",
    chatBg: "from-gray-900/20 to-blue-900/20",
    profilePic: "/images/levi_ackerman.jpg", // Changed from icon to profilePic
    personality: "stoic-disciplined",
  },
  "Sasuke Uchiha": {
    type: "boyfriend",
    anime: "Naruto",
    color: "from-indigo-500 to-purple-500",
    bgPattern: "bg-gradient-to-br from-indigo-900/10 via-gray-900 to-purple-900/10",
    chatBg: "from-indigo-900/20 to-purple-900/20",
    profilePic: "/images/sasuke_uchiha.jpg", // Changed from icon to profilePic
    personality: "intense-complex",
  },
  "Osamu Dazai": {
    type: "boyfriend",
    anime: "Bungo Stray Dogs",
    color: "from-amber-500 to-orange-500",
    bgPattern: "bg-gradient-to-br from-amber-900/10 via-gray-900 to-orange-900/10",
    chatBg: "from-amber-900/20 to-orange-900/20",
    profilePic: "/images/osamu_dazai.jpg", // Changed from icon to profilePic
    personality: "mysterious-charming",
  },
  "Kiyotaka Ayanokoji": {
    type: "boyfriend",
    anime: "Classroom of the Elite",
    color: "from-green-500 to-teal-500",
    bgPattern: "bg-gradient-to-br from-green-900/10 via-gray-900 to-teal-900/10",
    chatBg: "from-green-900/20 to-teal-900/20",
    profilePic: "/images/kiyotaka_ayanokoji.jpg", // Changed from icon to profilePic
    personality: "calm-analytical",
  },
}

export default function ChatPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentCharacter, setCurrentCharacter] = useState<string>("")
  const [userGender, setUserGender] = useState<string>("")
  const [sessionId, setSessionId] = useState<string>("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load data from localStorage
    const character = localStorage.getItem("currentCharacter")
    const gender = localStorage.getItem("userGender")
    const savedMessages = localStorage.getItem("chatHistory")
    const savedSessionId = localStorage.getItem("sessionId")

    if (!character || !gender) {
      router.push("/characters")
      return
    }

    setCurrentCharacter(character)
    setUserGender(gender)

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }

    if (savedSessionId) {
      setSessionId(savedSessionId)
    }
  }, [router])

  useEffect(() => {
    // Save messages to localStorage whenever messages change
    if (messages.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(messages))
    }
  }, [messages])

  useEffect(() => {
    // Save session ID to localStorage whenever it changes
    if (sessionId) {
      localStorage.setItem("sessionId", sessionId)
    }
  }, [sessionId])

  useEffect(() => {
    // Scroll to bottom when new messages are added
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const character = characterInfo[currentCharacter as keyof typeof characterInfo]

  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
          user_gender: userGender,
          character: currentCharacter,
          message: messageContent,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      const data: ChatResponse = await response.json()

      // Update session ID if it's new
      if (data.session_id && data.session_id !== sessionId) {
        setSessionId(data.session_id)
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply,
        timestamp: Date.now(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleChangeCharacter = () => {
    // Check if there's existing chat data
    const existingChatHistory = localStorage.getItem("chatHistory")
    const existingSessionId = localStorage.getItem("sessionId")

    if (!existingChatHistory && !existingSessionId) {
      // No existing data, allow character change
      router.push("/characters")
      return
    }

    // Clear all chat data
    localStorage.removeItem("chatHistory")
    localStorage.removeItem("sessionId")
    localStorage.removeItem("currentCharacter")
    localStorage.removeItem("userGender")
    router.push("/characters")
  }

  const handleGoHome = () => {
    // Clear all chat data
    localStorage.removeItem("chatHistory")
    localStorage.removeItem("sessionId")
    localStorage.removeItem("currentCharacter")
    localStorage.removeItem("userGender")
    router.push("/")
  }

  if (!currentCharacter || !character) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    )
  }

  // Removed: const IconComponent = character.icon; // No longer needed

  return (
    <div className={`min-h-screen ${character.bgPattern} text-white flex flex-col`}>
      {/* Header */}
      <div className={`bg-gradient-to-r ${character.color} p-3 md:p-4 shadow-2xl`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                {/* --- Replaced IconComponent with img --- */}
                <img
                  src={character.profilePic}
                  alt={`${currentCharacter} profile picture`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold">{currentCharacter}</h1>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                  {character.anime}
                </Badge>
              </div>
            </div>
            <div className="flex gap-1 md:gap-2">
              <Button
                onClick={handleChangeCharacter}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 text-xs md:text-sm px-2 md:px-3"
              >
                <RotateCcw className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Change</span>
              </Button>
              <Button
                onClick={handleGoHome}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 text-xs md:text-sm px-2 md:px-3"
              >
                <Home className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-3 md:p-6">
        <Card
          className={`bg-gradient-to-br ${character.chatBg} border-gray-700/50 h-[calc(100vh-180px)] md:h-[calc(100vh-200px)] flex flex-col shadow-2xl backdrop-blur-sm`}
        >
          <CardContent className="flex-1 overflow-y-auto p-3 md:p-6 space-y-3 md:space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 py-6 md:py-8">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-r ${character.color} rounded-full flex items-center justify-center mb-4 shadow-lg overflow-hidden`}
                >
                  {/* --- Replaced IconComponent with img --- */}
                  <img
                    src={character.profilePic}
                    alt={`${currentCharacter} profile picture`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-base md:text-lg mb-2">Start a conversation with {currentCharacter}!</p>
                <p className="text-sm">They're excited to chat with you.</p>
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] md:max-w-[80%] p-3 md:p-4 rounded-2xl shadow-lg ${
                    message.role === "user"
                      ? `bg-gradient-to-r ${character.color} text-white`
                      : "bg-gray-800/80 text-white backdrop-blur-sm border border-gray-700/50"
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm md:text-base">{message.content}</div>
                  <div className="text-xs opacity-70 mt-2">{new Date(message.timestamp).toLocaleTimeString()}</div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800/80 text-white p-3 md:p-4 rounded-2xl backdrop-blur-sm border border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-3 md:p-6 border-t border-gray-700/50">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message ${currentCharacter}...`}
                className="flex-1 bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm text-sm md:text-base"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={`bg-gradient-to-r ${character.color} hover:opacity-90 shadow-lg px-3 md:px-4`}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  )
}