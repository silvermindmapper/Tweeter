import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [remixType, setRemixType] = useState('summarize')

  const remixOptions = [
    { value: 'summarize', label: 'Summarize' },
    { value: 'expand', label: 'Expand' },
    { value: 'simplify', label: 'Simplify' },
    { value: 'formal', label: 'Make Formal' },
    { value: 'casual', label: 'Make Casual' },
    { value: 'creative', label: 'Make Creative' }
  ]

  const handleRemix = async () => {
    if (!inputText.trim()) return

    setIsLoading(true)
    setOutputText('')

    try {
      // For now, we'll simulate the AI API call
      // In a real app, you'd call your Claude API endpoint here
      await simulateAIResponse(inputText, remixType)
    } catch (error) {
      setOutputText('Error: Unable to process your request. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const simulateAIResponse = async (text, type) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simple transformations for demo purposes
    let result = ''
    switch (type) {
      case 'summarize':
        result = `Summary: ${text.split(' ').slice(0, 10).join(' ')}...`
        break
      case 'expand':
        result = `Expanded version: ${text} This is additional content that elaborates on the original text.`
        break
      case 'simplify':
        result = `Simplified: ${text.replace(/[^\w\s]/g, '').toLowerCase()}`
        break
      case 'formal':
        result = `Formal version: ${text}. It is imperative to note that the aforementioned content requires careful consideration.`
        break
      case 'casual':
        result = `Hey! So like, here's the casual version: ${text}. Pretty cool, right?`
        break
      case 'creative':
        result = `✨ Creative remix: ${text} ✨\n\nLet your imagination soar as we transform this text into something magical and inspiring!`
        break
      default:
        result = text
    }
    
    setOutputText(result)
  }

  const clearAll = () => {
    setInputText('')
    setOutputText('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Content Remixer</h1>
          <p className="text-gray-600">Transform your content with AI-powered remixing</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label htmlFor="remixType" className="block text-sm font-medium text-gray-700 mb-2">
                Choose Remix Type
              </label>
              <select
                id="remixType"
                value={remixType}
                onChange={(e) => setRemixType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {remixOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="inputText" className="block text-sm font-medium text-gray-700 mb-2">
                Input Text
              </label>
              <textarea
                id="inputText"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your text here..."
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleRemix}
                disabled={!inputText.trim() || isLoading}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Processing...' : 'Remix Content'}
              </button>
              <button
                onClick={clearAll}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div>
              <label htmlFor="outputText" className="block text-sm font-medium text-gray-700 mb-2">
                Remixed Output
              </label>
              <textarea
                id="outputText"
                value={outputText}
                readOnly
                placeholder="Your remixed content will appear here..."
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 resize-none"
              />
            </div>

            {outputText && (
              <div className="flex gap-3">
                <button
                  onClick={() => navigator.clipboard.writeText(outputText)}
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Copy to Clipboard
                </button>
                <button
                  onClick={() => setOutputText('')}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Clear Output
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-2">How to use:</h3>
          <ol className="list-decimal list-inside space-y-1 text-gray-600">
            <li>Choose the type of remixing you want to apply</li>
            <li>Paste your text in the input box</li>
            <li>Click "Remix Content" to process</li>
            <li>View and copy your remixed content</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
