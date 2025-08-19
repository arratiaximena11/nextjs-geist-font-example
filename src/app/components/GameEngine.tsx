"use client"

import { useState } from 'react'
import Stage1 from './stages/Stage1'
import Stage2 from './stages/Stage2'
import Stage3 from './stages/Stage3'
import Stage4 from './stages/Stage4'
import Stage5 from './stages/Stage5'

interface GameState {
  currentStage: number
  score: number
  completedStages: number[]
}

export default function GameEngine() {
  const [gameState, setGameState] = useState<GameState>({
    currentStage: 1,
    score: 0,
    completedStages: []
  })

  const advanceStage = () => {
    setGameState(prev => ({
      ...prev,
      currentStage: Math.min(prev.currentStage + 1, 5),
      completedStages: [...prev.completedStages, prev.currentStage]
    }))
  }

  const updateScore = (points: number) => {
    setGameState(prev => ({
      ...prev,
      score: prev.score + points
    }))
  }

  const resetGame = () => {
    setGameState({
      currentStage: 1,
      score: 0,
      completedStages: []
    })
  }

  const renderStage = () => {
    switch (gameState.currentStage) {
      case 1:
        return <Stage1 onComplete={advanceStage} updateScore={updateScore} />
      case 2:
        return <Stage2 onComplete={advanceStage} updateScore={updateScore} />
      case 3:
        return <Stage3 onComplete={advanceStage} updateScore={updateScore} />
      case 4:
        return <Stage4 onComplete={advanceStage} updateScore={updateScore} />
      case 5:
        return <Stage5 onComplete={resetGame} updateScore={updateScore} score={gameState.score} />
      default:
        return <Stage1 onComplete={advanceStage} updateScore={updateScore} />
    }
  }

  const getStageTitle = () => {
    const titles = [
      "Introducción Básica",
      "Conjugación de Verbos", 
      "Reglas de Pronombres",
      "Formas Negativas",
      "Desafío Final"
    ]
    return titles[gameState.currentStage - 1] || "Introducción Básica"
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center text-white mb-4">
          <div>
            <span className="text-lg font-semibold">Etapa: {gameState.currentStage}/5</span>
            <p className="text-sm text-purple-300">{getStageTitle()}</p>
          </div>
          <div>
            <span className="text-lg font-semibold">Puntuación: {gameState.score}</span>
          </div>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(gameState.currentStage / 5) * 100}%` }}
          />
        </div>
      </div>
      
      {renderStage()}
    </div>
  )
}
