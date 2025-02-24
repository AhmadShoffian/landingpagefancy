const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");

// Fungsi untuk mengirim pesan
function sendMessage() {
    let message = messageInput.value.trim();
    if (message === "") return;

    // Tambahkan pesan user
    addMessage(message, "user-message");

    // Simulasikan respon bot setelah 1 detik
    setTimeout(() => {
        let botResponse = "Ini adalah respon otomatis! 😊";
        addMessage(botResponse, "bot-message");
    }, 1000);

    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Fungsi untuk menampilkan pesan di chat-box
function addMessage(text, className) {
    let messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", className);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
}

// Kirim pesan saat menekan "Enter"
function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
