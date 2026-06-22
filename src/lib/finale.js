import { launchConfetti } from './confetti.js';

export function showFinalePopup() {
  launchConfetti('You found everything! 🎉');

  const overlay = document.createElement('div');
  overlay.className = 'finale-popup';
  overlay.innerHTML = `
    <div class="finale-modal">
      <span class="eyebrow">All Found</span>
      <h2>You found everything! 🎉</h2>
      <p>Taking you to your reward&hellip;</p>
    </div>
  `;
  document.body.appendChild(overlay);

  setTimeout(() => {
    window.location.href = '/secrets';
  }, 2200);
}
