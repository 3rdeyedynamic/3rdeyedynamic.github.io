// app.js - minimal interactions (not inline)
document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '0.5rem';
      nav.style.position = 'absolute';
      nav.style.right = '1rem';
      nav.style.top = '64px';
      nav.style.background = 'white';
      nav.style.padding = '0.75rem';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 8px 30px rgba(12,12,12,0.08)';
    }
  });

  // Contact form - simple front-end validation + faux submit
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = 'Sending message...';
    // simulate async send (note: no background work allowed by assistant)
    setTimeout(() => {
      status.textContent = 'Thank you — your message has been received. We\'ll be in touch soon.';
      form.reset();
    }, 800);
  });

  // Demo button opens a pre-filled email
  const demoBtn = document.getElementById('demoBtn');
  demoBtn.addEventListener('click', () => {
    const subject = encodeURIComponent('Request for app demo — 3rd Eye Dynamic');
    const body = encodeURIComponent('Hi 3rd Eye Dynamic,\n\nI\'d like to request a demo of your mobile app solutions. Here are some details about my ministry/project:\n\n- Church/Ministry:\n- Summary of needs:\n- Preferred platforms (iOS/Android):\n- Estimated timeline:\n\nThanks!');
    window.location.href = `mailto:hello@3rdeyedynamic.example?subject=${subject}&body=${body}`;
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
});
