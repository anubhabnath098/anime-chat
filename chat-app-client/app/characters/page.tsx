"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Heart, MessageCircle } from "lucide-react" // Keep ArrowLeft, Heart, MessageCircle for section headers
import { useRouter } from "next/navigation"

// --- Character Data with Profile Pictures ---
const characters = {
  "Mikasa Ackerman": {
    type: "girlfriend",
    anime: "Attack on Titan",
    description:
      "Strong, loyal, and protective. A skilled warrior with a caring heart who will always stand by your side.",
    traits: ["Loyal", "Strong", "Protective", "Caring"],
    color: "from-red-500 to-pink-500",
    profilePic: "/images/mikasa_ackerman.jpg", // Path to Mikasa's image
    personality: "fierce-loyal",
  },
  "Rias Gremory": {
    type: "girlfriend",
    anime: "High School DxD",
    description: "Confident devil princess with regal presence and warm personality. She's intelligent and caring.",
    traits: ["Confident", "Regal", "Intelligent", "Warm"],
    color: "from-purple-500 to-pink-500",
    profilePic: "/images/rias_gremory.jpg", // Path to Rias's image
    personality: "regal-warm",
  },
  "Chizuru Mizuhara": {
    type: "girlfriend",
    anime: "Rent-a-Girlfriend",
    description: "Professional and kind with strong work ethic. She's genuine and always strives to do her best.",
    traits: ["Professional", "Kind", "Genuine", "Hardworking"],
    color: "from-pink-500 to-rose-500",
    profilePic: "/images/chizuru_mizuhara.jpg", // Path to Chizuru's image
    personality: "professional-kind",
  },
  "Marin Kitagawa": {
    type: "girlfriend",
    anime: "My Dress-Up Darling", // Corrected anime title
    description: "Enthusiastic cosplay lover with bubbly personality. She's supportive and full of energy.",
    traits: ["Enthusiastic", "Supportive", "Energetic", "Passionate"],
    color: "from-yellow-500 to-pink-500",
    profilePic: "/images/marin_kitagawa.jpg", // Path to Marin's image
    personality: "bubbly-energetic",
  },
  "Hinata Hyuga": {
    type: "girlfriend",
    anime: "Naruto",
    description: "Gentle and kind with inner strength. She's caring and has grown into a confident person.",
    traits: ["Gentle", "Kind", "Strong", "Caring"],
    color: "from-purple-500 to-indigo-500",
    profilePic: "/images/hinata_hyuga.jpg", // Path to Hinata's image
    personality: "gentle-strong",
  },
  "Satoru Gojo": {
    type: "boyfriend",
    anime: "Jujutsu Kaisen",
    description: "Confident and playful with immense power. He has a carefree attitude but cares deeply for others.",
    traits: ["Confident", "Playful", "Powerful", "Caring"],
    color: "from-blue-500 to-cyan-500",
    profilePic: "/images/satoru_gojo.jpg", // Path to Gojo's image
    personality: "confident-playful",
  },
  "Levi Ackerman": {
    type: "boyfriend",
    anime: "Attack on Titan",
    description: "Stoic and disciplined with dry humor. He's incredibly skilled and dedicated to his mission.",
    traits: ["Stoic", "Disciplined", "Skilled", "Loyal"],
    color: "from-gray-500 to-blue-500",
    profilePic: "/images/levi_ackerman.jpg", // Path to Levi's image
    personality: "stoic-disciplined",
  },
  "Sasuke Uchiha": {
    type: "boyfriend",
    anime: "Naruto",
    description: "Intense and determined with complex emotions. He has deep feelings beneath his cool exterior.",
    traits: ["Intense", "Determined", "Complex", "Strong"],
    color: "from-indigo-500 to-purple-500",
    profilePic: "/images/sasuke_uchiha.jpg", // Path to Sasuke's image
    personality: "intense-complex",
  },
  "Osamu Dazai": {
    type: "boyfriend",
    anime: "Bungo Stray Dogs",
    description: "Mysterious and intelligent with playful humor. He's unpredictable and charming in his own way.",
    traits: ["Mysterious", "Intelligent", "Playful", "Charming"],
    color: "from-amber-500 to-orange-500",
    profilePic: "/images/osamu_dazai.jpg", // Path to Dazai's image
    personality: "mysterious-charming",
  },
  "Kiyotaka Ayanokoji": {
    type: "boyfriend",
    anime: "Classroom of the Elite",
    description: "Calm and analytical genius who prefers staying in the background. He's highly intelligent.",
    traits: ["Calm", "Analytical", "Intelligent", "Mysterious"],
    color: "from-green-500 to-teal-500",
    profilePic: "/images/kiyotaka_ayanokoji.jpg", // Path to Ayanokoji's image
    personality: "calm-analytical",
  },
}

export default function CharactersPage() {
  const router = useRouter()
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null)
  const [userGender, setUserGender] = useState<string>("")
  const [showGenderDialog, setShowGenderDialog] = useState(false)

  const girlfriends = Object.entries(characters).filter(([_, char]) => char.type === "girlfriend")
  const boyfriends = Object.entries(characters).filter(([_, char]) => char.type === "boyfriend")

  const handleCharacterSelect = (characterName: string) => {
    // Check if there's existing chat data
    const existingChatHistory = localStorage.getItem("chatHistory")
    const existingSessionId = localStorage.getItem("sessionId")
    const existingCharacter = localStorage.getItem("currentCharacter")

    if (existingChatHistory || existingSessionId || existingCharacter) {
      // Don't allow character change if there's existing data
      alert("You have an active chat session. Please leave the current chat to select a new character.")
      return
    }

    setSelectedCharacter(characterName)
    setShowGenderDialog(true)
  }

  const handleGenderSubmit = () => {
    if (userGender && selectedCharacter) {
      // Clear any existing chat data (just in case)
      localStorage.removeItem("chatHistory")
      localStorage.removeItem("sessionId")
      localStorage.removeItem("currentCharacter")
      localStorage.removeItem("userGender")

      // Set new data
      localStorage.setItem("currentCharacter", selectedCharacter)
      localStorage.setItem("userGender", userGender)

      router.push("/chat")
    }
  }

  const handleGoHome = () => {
    // Clear all chat data when going home
    localStorage.removeItem("chatHistory")
    localStorage.removeItem("sessionId")
    localStorage.removeItem("currentCharacter")
    localStorage.removeItem("userGender")
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-gray-900 to-indigo-900 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button onClick={handleGoHome} variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Choose Your Character
            </h1>
            <p className="text-lg md:text-xl text-gray-300">Select an anime character to start your conversation</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Girlfriends Section */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-400" />
            <h2 className="text-2xl md:text-3xl font-bold">Anime Girlfriends</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {girlfriends.map(([name, character]) => {
              // const IconComponent = character.icon; // Removed this line
              return (
                <Card
                  key={name}
                  className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleCharacterSelect(name)}
                >
                  <CardHeader className="text-center p-4">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-r ${character.color} rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg overflow-hidden`} // Added overflow-hidden
                    >
                      {/* --- Image tag replaces IconComponent --- */}
                      <img
                        src={character.profilePic}
                        alt={`${name} profile picture`}
                        className="w-full h-full object-cover" // Ensures the image fills the circle
                      />
                    </div>
                    <CardTitle className="text-white text-base md:text-lg">{name}</CardTitle>
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-500/30 text-xs">
                      {character.anime}
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">
                      {character.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                      {character.traits.map((trait) => (
                        <Badge key={trait} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-sm">
                      <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      Chat Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Boyfriends Section */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
            <h2 className="text-2xl md:text-3xl font-bold">Anime Boyfriends</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {boyfriends.map(([name, character]) => {
              // const IconComponent = character.icon; // Removed this line
              return (
                <Card
                  key={name}
                  className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleCharacterSelect(name)}
                >
                  <CardHeader className="text-center p-4">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-r ${character.color} rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg overflow-hidden`} // Added overflow-hidden
                    >
                      {/* --- Image tag replaces IconComponent --- */}
                      <img
                        src={character.profilePic}
                        alt={`${name} profile picture`}
                        className="w-full h-full object-cover" // Ensures the image fills the circle
                      />
                    </div>
                    <CardTitle className="text-white text-base md:text-lg">{name}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                      {character.anime}
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">
                      {character.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                      {character.traits.map((trait) => (
                        <Badge key={trait} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-sm">
                      <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      Chat Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Gender Selection Dialog */}
      <Dialog open={showGenderDialog} onOpenChange={setShowGenderDialog}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-bold text-center">Select Your Gender</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <p className="text-gray-300 text-center text-sm md:text-base">
              Please select your gender to personalize your chat experience with {selectedCharacter}
            </p>
            <Select value={userGender} onValueChange={setUserGender}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="Choose your gender" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600">
                <SelectItem value="male" className="text-white hover:bg-gray-600">
                  Male
                </SelectItem>
                <SelectItem value="female" className="text-white hover:bg-gray-600">
                  Female
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowGenderDialog(false)}
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Cancel
              </Button>
              <Button
                onClick={handleGenderSubmit}
                disabled={!userGender}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Start Chatting
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}