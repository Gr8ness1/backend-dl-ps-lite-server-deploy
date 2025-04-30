import React, { useState } from 'react';

function AIAssistant({ property }) {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          property
        })
      });
      const data = await res.json();
      setResponse(data.answer);
    } catch (err) {
      console.error('AI Request Error:', err);
      setResponse("Error contacting AI assistant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full p-4 border rounded bg-white flex flex-col">
      <h2 className="text-lg font-bold mb-2">AI Assistant</h2>
      <textarea
        className="border p-2 mb-2 rounded"
        rows="4"
        placeholder="Ask a question about the property..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={askAI}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-2"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>
      {response && <div className="border p-2 rounded bg-gray-50 mt-2"><strong>Response:</strong><p>{response}</p></div>}
    </div>
  );
}

export default AIAssistant;
