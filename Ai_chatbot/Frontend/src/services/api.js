const API_URL = import.meta.env.VITE_API_URL;

export async function sendMessage(message, conversationHistory = []) {
  const response = await fetch(`${API_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history: conversationHistory }),
  });

  if (!response.ok) {
    throw new Error('Failed to get response');
  }

  const data = await response.json();
  console.log(data);
  
  return data;
}
