
function addMessageToChat(message, className) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("div");
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    
    chatBox.scrollTop = chatBox.scrollHeight;
}

function Button1() {
    addMessageToChat("Olá, tenho problemas com a minha conexão, pode me ajudar ?", "user-message");

    setTimeout(() => {
        addMessageToChat("Claro! Verifique se o cabo do seu roteador está posicionado corretamente, caso....", "bot-message");
    }, 500);
}

function Button2() {
    addMessageToChat("Olá, tenho problemas para efetuar o pagamento, pode me ajudar ?", "user-message");

    setTimeout(() => {
        addMessageToChat("Oi! Como posso ajudar você?", "bot-message");
    }, 500);
}

function Button3() {
    addMessageToChat("Olá, tenho problemas com o alcance do wifi, pode me ajudar ?", "user-message");

    setTimeout(() => {
        addMessageToChat("Oi! Como posso ajudar você?", "bot-message");
    }, 500);
}