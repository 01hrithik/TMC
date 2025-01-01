const contacts = document.querySelectorAll('.contact');
const chatWith = document.getElementById('chatWith');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendMessage = document.getElementById('sendMessage');

// Current chat state
let currentContact = 'Admin';

// Handle contact switching
contacts.forEach(contact => {
  contact.addEventListener('click', () => {
    contacts.forEach(c => c.classList.remove('active'));
    contact.classList.add('active');
    currentContact = contact.dataset.contact;
    chatWith.textContent = currentContact;
    chatMessages.innerHTML = ''; // Clear previous messages
  });
});

// Handle message sending
sendMessage.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message) {
    // Append the message
    const msgElement = document.createElement('div');
    msgElement.classList.add('chat-message', 'sent');
    msgElement.textContent = message;
    chatMessages.appendChild(msgElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate receiving a reply
    setTimeout(() => {
      const reply = document.createElement('div');
      reply.classList.add('chat-message', 'received');
      reply.textContent = `Reply from ${currentContact}`;
      chatMessages.appendChild(reply);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Show notification if chat is switched
      if (currentContact !== 'Admin') {
        document.querySelector(`[data-contact="${currentContact}"] .notification`).style.display = 'block';
      }
    }, 1000);

    // Clear input
    messageInput.value = '';
  }
});

// Remove notification on click
contacts.forEach(contact => {
  contact.addEventListener('click', () => {
    contact.querySelector('.notification').style.display = 'none';
  });
});
