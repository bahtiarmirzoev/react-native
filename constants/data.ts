// Категории для главной страницы
export const CATEGORIES = [
  'Business names',
  'Human names', 
  'Games name',
  'Pet names',
  'Dish names',
  'Character names'
];

// Примеры сообщений
export const WELCOME_MESSAGES = [
  'Hi, you can ask me anything about names',
  'I suggest you some names you can ask me'
];

// Навигационные элементы
export const TAB_ITEMS = [
  { key: 'home', label: 'Home', route: '/home' },
  { key: 'saved', label: 'Saved', route: '/saved' },
  { key: 'chat', label: 'Chatbot', route: '/chat' },
  { key: 'profile', label: 'Profile', route: '/profile' }
] as const; 