
function addMessageToChat(message, className) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("div");
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    
    chatBox.scrollTop = chatBox.scrollHeight;
}

function Button1() {
    addMessageToChat("Porque meu plano de internet de 1 Giga não chega correspondente?", "user-message");

    setTimeout(() => {
        addMessageToChat("O plano de internet é correspondente, mas talvez seja a limitação da placa de rede em seu dispositivo.", "bot-message");
    }, 500);
}

function Button2() {
    addMessageToChat("Porque o acesso ao plano de internet está limitada?", "user-message");

    setTimeout(() => {
        addMessageToChat("A rede pode estar em manutenção devido a uma chuva forte ou por melhorias nos sistemas.", "bot-message");
    }, 500);
}

function Button3() {
    addMessageToChat("Como aumentar a cobertura do sinal Wi-Fi em minha residência?", "user-message");

    setTimeout(() => {
        addMessageToChat("Sua casa ou apartamento tem planta em L, mais de 60 metros quadrados, ou mais de um andar? Se sim, recomendamos que você aumente a cobertura do sinal Wi-Fi e o repetidor é perfeito para isso.", "bot-message");
    }, 500);
}



// const predefinedQuestions = {
//     "qual e o seu nome?": "Ryan",
//     "Como você está?": "Estou funcionando perfeitamente!",
//     "Qual é a sua função?": "Minha função é responder às suas perguntas programadas.",
//     "O que você pode fazer?": "Posso responder a perguntas básicas definidas pelos programadores."
// };

// function sendMessage() {
//     const userInput = document.getElementById("userInput").value;
//     if (userInput.trim() === "") return;

//     // Adicionar a mensagem do usuário ao chat
//     addMessageToChat(userInput, "user-message");

//     // Verificar se a pergunta do usuário está programada
//     const botResponse = predefinedQuestions[userInput] || "Desculpe, esta pergunta não está em meu database.";
    
//     // Adicionar a resposta do bot ao chat
//     setTimeout(() => {
//         addMessageToChat(botResponse, "bot-message");
//     }, 500); // Simulando um pequeno atraso na resposta

//     // Limpar o campo de entrada de texto
//     document.getElementById("userInput").value = "";
// }

// function addMessageToChat(message, className) {
//     const chatBox = document.getElementById("chatBox");
//     const messageElement = document.createElement("div");
//     messageElement.className = `chat-message ${className}`;
//     messageElement.textContent = message;
//     chatBox.appendChild(messageElement);
    
//     // Rolagem automática para a última mensagem
//     chatBox.scrollTop = chatBox.scrollHeight;
// }
// function CreateIframe() {
//     const NewIframe = document.createElement("iframe");
//     NewIframe.className = "Iframe-Class";
//     NewIframe.src = "AtendimentoComandos.html";
//     const Div = document.getElementById("iframe-container");
//     Div.appendChild(NewIframe);

//     const NewButton = document.createElement("button");
//     NewButton.className = "butao";
//     NewButton.textContent = "Voltar";
//     NewButton.id = "voltarButton";
    
    
//     NewButton.addEventListener("click", function() {

//         Div.removeChild(NewIframe);
        

//         Div2.removeChild(NewButton);
        
//         const OriginalButton = document.createElement("button");
//         OriginalButton.className = "butao";
//         OriginalButton.id = "CriarIframe";

//         const strongText = document.createElement("strong");
//         strongText.textContent = "Ver Perguntas";
        
//         OriginalButton.appendChild(strongText);
        
//         OriginalButton.addEventListener("click", CreateIframe);
        
//         Div2.appendChild(OriginalButton);
//     });

//     const Div2 = document.getElementById("buton");
//     Div2.appendChild(NewButton);
    
//     const IframeButton = document.getElementById("CriarIframe");
//     IframeButton.remove();
// }