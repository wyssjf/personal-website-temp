import { playUnlockSound } from './sound.js';

const STORAGE_KEY = 'jw_achievements';

export const ACHIEVEMENTS = [
  {
    id: 'konami',
    label: 'Konami Master',
    clue: 'Don\'t know what a "Konami Code" is? Look it up — then try it anywhere on this site.',
    explanation: 'You entered the Konami code. Some things never die.',
  },
  {
    id: 'squiggle',
    label: 'Squiggle Squasher',
    clue: 'I drew a line under "Jay!" by hand, on the homepage. Lines like that get restless if you keep bothering them.',
    explanation: 'You clicked the squiggle under "Jay!" ten times. I hope it was worth it.',
  },
  {
    id: 'codeword',
    label: 'Code Cracker',
    clue: 'There\'s a code word box in the footer. The answer is, statistically, the worst password on Earth — same as <a href="https://www.youtube.com/watch?v=a6iW-8xPw3k" target="_blank" rel="noopener noreferrer">President Skroob\'s luggage</a>.',
    explanation: 'You typed "12345" into the footer code box. Truly, humanity\'s finest password.',
  },
];

export function getAchievements() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function unlock(id) {
  const current = getAchievements();
  if (current[id]) return;
  current[id] = true;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // localStorage unavailable, fail silently
  }

  playUnlockSound();
  window.dispatchEvent(new CustomEvent('achievements-updated'));

  const allFound = ACHIEVEMENTS.every((a) => current[a.id]);
  const onSecretsPage = window.location.pathname.replace(/\/$/, '').endsWith('/secrets');

  if (allFound && !onSecretsPage) {
    import('./finale.js').then(({ showFinalePopup }) => showFinalePopup());
  }
}
