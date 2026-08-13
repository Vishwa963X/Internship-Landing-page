const buttons = [
  document.getElementById('applyBtn'),
  document.getElementById('learnBtn'),
  document.getElementById('ctaBtn')
];

buttons[0].addEventListener('click', () => {
  alert('Application submitted successfully! 🎉');
});

buttons[1].addEventListener('click', () => {
  alert('The internship lasts 4 weeks with mentorship and real projects.');
});

buttons[2].addEventListener('click', () => {
  alert('Thank you for applying to Cognifyz Technologies! 🚀');
});