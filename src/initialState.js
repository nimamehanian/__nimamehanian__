const initialState = {
  isOpen: false,
  isPeeking: false,
  activeIndex: 0,
  links: [
    { name: 'home', isActive: true },
    { name: 'about', isActive: false },
    { name: 'services', isActive: false },
    { name: 'work', isActive: false },
    { name: 'blog', isActive: false },
    { name: 'connect', isActive: false }
  ]
};

export default initialState;
