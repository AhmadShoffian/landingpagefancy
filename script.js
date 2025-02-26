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

document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.querySelector(".chat-container");
    const chatInput = document.getElementById("chatInput");
    const sendChatButton = document.getElementById("sendChat");
    const fileUpload = document.getElementById("fileUpload");

    // Menambahkan pesan ke dalam chat
    function addMessage(text, className) {
        let messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", className);

        let messageText = document.createElement("div");
        messageText.classList.add("message-text");
        messageText.textContent = text;

        let timestamp = document.createElement("div");
        timestamp.classList.add("chat-timestamp");
        timestamp.textContent = new Date().toLocaleTimeString();

        messageElement.appendChild(messageText);
        messageElement.appendChild(timestamp);
        chatContainer.appendChild(messageElement);

        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Mengirim pesan
    function sendMessage() {
        let message = chatInput.value.trim();
        if (message === "") return;

        // Tambahkan pesan user
        addMessage(message, "sent");

        // Respon bot
        setTimeout(() => {
            let botResponse = "Terima kasih! Kami akan segera merespons. 😊";
            addMessage(botResponse, "received");
        }, 1000);

        // Kosongkan input
        chatInput.value = "";
    }

    // Kirim pesan saat tombol diklik
    sendChatButton.addEventListener("click", sendMessage);

    // Kirim pesan saat menekan "Enter"
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    // Unggah file saat dipilih
    fileUpload.addEventListener("change", function () {
        if (fileUpload.files.length > 0) {
            let fileName = fileUpload.files[0].name;
            addMessage(`📂 ${fileName} telah diunggah`, "sent");
        }
    });
});

