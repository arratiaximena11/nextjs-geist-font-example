"use client"

import { useState } from 'react'

interface Stage1Props {
  onComplete: () => void
  updateScore: (points: number) => void
}

export default function Stage1({ onComplete, updateScore }: Stage1Props) {
  const questions = [
    {
      question: "Elige la forma correcta: I ___ to school every day.",
      questionSpanish: "Elijo ir a la escuela todos los días.",
      options: ["go", "goes", "going", "went"],
      correct: "go",
      explanation: "Con 'I' (yo) usamos la forma base del verbo: 'go'"
    },
    {
      question: "She ___ coffee every morning.",
      questionSpanish: "Ella toma café todas las mañanas.",
      options: ["drink", "drinks", "drinking", "drank"],
      correct: "drinks",
      explanation: "Con 'She' (ella) agregamos '-s' al verbo: 'drinks'"
    },
    {
      question: "They ___ in the park on weekends.",
      questionSpanish: "Ellos juegan en el parque los fines de semana.",
      options: ["play", "plays", "playing", "played"],
      correct: "play",
      explanation: "Con 'They' (ellos) usamos la forma base del verbo: 'play'"
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    const correct = answer === questions[currentQuestion].correct
    setIsCorrect(correct)
    setShowResult(true)
    
    if (correct) {
      updateScore(10)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer("")
      setShowResult(false)
    } else {
      onComplete()
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">Etapa 1: Introducción Básica</h2>
        <p className="text-purple-300 text-lg">Aprende la estructura básica del presente simple</p>
      </div>
      
      <div className="mb-8">
        <div className="bg-purple-900/30 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">💡 Regla Básica:</h3>
          <p className="text-gray-300">
            • Con I, you, we, they → usa la forma base del verbo<br/>
            • Con he, she, it → agrega '-s' al verbo
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Pregunta {currentQuestion + 1} de {questions.length}
        </h3>
        
        <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
          <p className="text-xl mb-2">{questions[currentQuestion].question}</p>
          <p className="text-sm text-gray-400 italic">{questions[currentQuestion].questionSpanish}</p>
        </div>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={showResult}
              className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                selectedAnswer === option
                  ? isCorrect
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-white/20 hover:bg-white/30'
              } ${showResult && option === questions[currentQuestion].correct ? 'ring-2 ring-green-400' : ''}`}
            >
              <span className="text-lg font-medium">{option}</span>
            </button>
          ))}
        </div>
      </div>

      {showResult && (
        <div className="text-center bg-slate-800/50 rounded-lg p-6">
          <p className={`text-xl mb-3 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {isCorrect ? '¡Correcto! ¡Muy bien!' : 'No es correcto. La respuesta correcta está resaltada.'}
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Explicación:</strong> {questions[currentQuestion].explanation}
          </p>
          <button
            onClick={nextQuestion}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg transition-colors text-lg font-semibold"
          >
            {currentQuestion < questions.length - 1 ? 'Siguiente Pregunta' : 'Completar Etapa'}
          </button>
        </div>
      )}
    </div>
  )
}
