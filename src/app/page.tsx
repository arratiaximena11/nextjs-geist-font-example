"use client"

import { useState } from 'react'
import GameEngine from './components/GameEngine'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">
            XIMGAME
          </h1>
          <p className="text-xl text-purple-300 mb-4">
            Aventura del Presente Simple
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Embárcate en una aventura educativa para dominar el presente simple en inglés. 
            Completa 5 etapas progresivas desde principiante hasta experto.
          </p>
        </div>
        <GameEngine />
      </div>
    </main>
  )
}
