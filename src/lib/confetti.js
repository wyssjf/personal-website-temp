const colors = ['#0891b2', '#0e7490', '#111827', '#ffffff', '#5b6472'];

export function launchConfetti(message = 'You found the secret! 🎉') {
  const container = document.createElement('div');
  container.className = 'konami-confetti';
  container.setAttribute('aria-hidden', 'true');
  document.body.appendChild(container);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    const toast = document.createElement('div');
    toast.className = 'konami-toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => container.remove(), 3000);
    return;
  }

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement('span');
    piece.className = 'konami-piece';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2 + Math.random() * 1.5}s`;
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 4500);
}
