exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { messages } = JSON.parse(event.body);
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data)
    };
    
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
```

---

## **YOUR FINAL REPOSITORY SHOULD LOOK LIKE THIS:**

When you look at your GitHub repository main page, you should see:
```
vito-coach
│
├── 📄 index.html
├── 📄 netlify.toml  
├── 📄 README.md (GitHub created this automatically)
└── 📁 netlify
    └── 📁 functions
        └── 📄 chat.js
