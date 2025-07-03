// Dark mode toggle script
const toggleBtn = document.getElementById('toggle-theme');
const root = document.documentElement;

// Load theme from localStorage or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', savedTheme);

toggleBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
