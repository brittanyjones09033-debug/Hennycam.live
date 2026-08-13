// small enhancements: year + fake form submit
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const result = document.getElementById('form-result');
  result.textContent = 'Thanks! Your message was sent (demo).';
  this.reset();
});
