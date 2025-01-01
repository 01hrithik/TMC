// Get all team cards
const teamCards = document.querySelectorAll('.team-card');
const modal = document.getElementById('memberModal');
const closeButton = document.querySelector('.close-button');

// Modal elements
const memberName = document.getElementById('memberName');
const memberRole = document.getElementById('memberRole');
const memberEmail = document.getElementById('memberEmail');

// Open modal with member details
teamCards.forEach(card => {
  card.addEventListener('click', () => {
    memberName.textContent = card.dataset.name;
    memberRole.textContent = card.dataset.role;
    memberEmail.textContent = card.dataset.email;
    modal.style.display = 'flex';
  });
});

// Close modal
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
