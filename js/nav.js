navToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('show');
    });
  });