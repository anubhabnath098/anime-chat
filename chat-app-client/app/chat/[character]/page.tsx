"use client"

import { useChat } from "ai/react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

const characterInfo = {
  "Mikasa Ackerman": {
    type: "girlfriend",
    anime: "Attack on Titan",
    description: "Strong, loyal, and protective. A skilled warrior with a caring heart.",
    color: "from-red-500 to-pink-500",
  },
  "Rias Gremory": {
    type: "girlfriend",
    anime: "High School DxD",
    description: "Confident devil princess with regal presence and warm personality.",
    color: "from-purple-500 to-pink-500",
  },
  "Chizuru Mizuhara": {
    type: "girlfriend",
    anime: "Rent-a-Girlfriend",
    description: "Professional and kind with strong work ethic and genuine nature.",
    color: "from-pink-500 to-rose-500",
  },
  "Marin Kitagawa": {
    type: "girlfriend",
    anime: "My Dress-Up Darling",
    description: "Enthusiastic cosplay lover with bubbly and energetic personality.",
    color: "from-yellow-500 to-pink-500",
  },
  "Hinata Hyuga": {
    type: "girlfriend",
    anime: "Naruto",
    description: "Gentle and kind with inner strength and caring nature.",
    color: "from-purple-500 to-indigo-500",
  },
  "Satoru Gojo": {
    type: "boyfriend",
    anime: "Jujutsu Kaisen",
    description: "Confident and playful with immense power and carefree attitude.",
    color: "from-blue-500 to-cyan-500",
  },
  "Levi Ackerman": {
    type: "boyfriend",
    anime: "Attack on Titan",
    description: "Stoic and disciplined with dry humor and incredible skills.",
    color: "from-gray-500 to-blue-500",
  },
  "Sasuke Uchiha": {
    type: "boyfriend",
    anime: "Naruto",
    description: "Intense and determined with complex emotions beneath cool exterior.",
    color: "from-indigo-500 to-purple-500",
  },
  "Osamu Dazai": {
    type: "boyfriend",
    anime: "Bungo Stray Dogs",
    description: "Mysterious and intelligent with playful yet dark sense of humor.",
    color: "from-amber-500 to-orange-500",
  },
  "Kiyotaka Ayanokoji": {
    type: "boyfriend",
    anime: "Classroom of the Elite",
    description: "Calm and analytical genius who prefers staying in the background.",
    color: "from-green-500 to-teal-500",
  },
}

export default function ChatPage() {
  const params = useParams()
  const router = useRouter()
  const characterName = decodeURIComponent(params.character as string)
  const character = characterInfo[characterName as keyof typeof characterInfo]

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: {
      character: characterName,
    },
  })

  if (!character) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Character not found</h1>
          <Link href="/">
            <Button>Go back home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className={`bg-gradient-to-r ${character.color} p-6`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
              {characterName.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{characterName}</h1>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-2">
                {character.anime}
              </Badge>
              <p className="text-white/90">{character.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="max-w-4xl mx-auto p-6">
        <Card className="bg-gray-800 border-gray-700 h-[70vh] flex flex-col">
          <CardHeader className="border-b border-gray-700">
            <CardTitle className="text-white">Chat with {characterName}</CardTitle>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 py-8">
                <p className="text-lg mb-2">Start a conversation with {characterName}!</p>
                <p className="text-sm">They're excited to chat with you.</p>
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-4 rounded-lg ${
                    message.role === "user"
                      ? `bg-gradient-to-r ${character.color} text-white`
                      : "bg-gray-700 text-white"
                  }`}
                >
                  <div className="whitespace-pre-wrap">
                    {message.parts?.map((part, i) => {
                      if (part.type === "text") {
                        return <span key={i}>{part.text}</span>
                      }
                      return null
                    }) || message.content}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-white p-4 rounded-lg">
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
          </CardContent>

          <div className="p-6 border-t border-gray-700">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder={`Message ${characterName}...`}
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={`bg-gradient-to-r ${character.color} hover:opacity-90`}
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
