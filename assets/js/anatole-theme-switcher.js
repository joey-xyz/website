const getStoredThemeStyle = () => localStorage.getItem('theme');

const setThemeClass = (style) => {
  const html = document.documentElement;
  const prevTheme = [...html.classList].find((c) => c.match(/theme--(light|dark)/));
  if (!prevTheme) return;
  html.classList.remove(prevTheme);
  html.classList.add(`theme--${style}`);
};

const setThemeStyle = (style) => {
  localStorage.setItem('theme', style);
  setThemeClass(style);
};

const switchTheme = () => {
  const currThemeStyle = getStoredThemeStyle();
  switch (currThemeStyle) {
    case 'light':
      setThemeStyle('dark');
      break;
    case 'dark':
      setThemeStyle('light');
      break;
    default:
      setThemeStyle('light');
      break;
  }
};

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const themeSwitcher = document.querySelector('.themeswitch');
    themeSwitcher.addEventListener('click', switchTheme, false);
  },
  false,
);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', switchTheme, false);

const currThemeStyle = getStoredThemeStyle();
if (currThemeStyle) {
  setThemeStyle(currThemeStyle);
} else {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (userPrefersDark) {
    setThemeStyle('dark');
  }
}

const zoom = mediumZoom(document.querySelectorAll('div.post__content img'));

let isDragging = false;
let initialX, initialY, offsetX = 0, offsetY = 0;

document.addEventListener('mousedown', (e) => {
    const zoomedImage = document.querySelector('.medium-zoom-image--opened');
    if (zoomedImage) {
        isDragging = true;
        initialX = e.clientX - offsetX;
        initialY = e.clientY - offsetY;
        zoomedImage.style.cursor = 'grabbing';
    }
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const zoomedImage = document.querySelector('.medium-zoom-image--opened');
        if (zoomedImage) {
            offsetX = e.clientX - initialX;
            offsetY = e.clientY - initialY;
            zoomedImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        const zoomedImage = document.querySelector('.medium-zoom-image--opened');
        if (zoomedImage) {
            zoomedImage.style.cursor = 'grab';
        }
    }
});

