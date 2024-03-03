const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#B99976'; 
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#74503E'; 
  });
});


