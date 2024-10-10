document.getElementById("send-button").onclick = function() {
    const userInput = document.getElementById("user-input").value;
    document.getElementById("messages").innerHTML += `<div>User: ${userInput}</div>`;
    // Aqui você fará a chamada para a API do OpenAI
    fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("messages").innerHTML += `<div>Bot: ${data.response}</div>`;
    });
    document.getElementById("user-input").value = '';
};
