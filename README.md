3rd Eye Dynamic – Landing Site
Overview
A lightweight, responsive static site showcasing 3rd Eye Dynamic’s services, projects, testimonials, and contact information.

Quick Start
# Clone the repo
git clone https://github.com/your‑username/3rdeyedynamic-site.git
cd 3rdeyedynamic-site

# Serve locally (Python 3)
python -m http.server 8000
# Open http://localhost:8000 in a browser
Build / Deploy
The site consists of static files only.

Platform	Steps
Netlify	Connect the GitHub repo → Deploy (no build command).
Vercel	Import the repo → Deploy (static site).
GitHub Pages	Push to gh-pages (or enable Pages on main).
Cloudflare Pages	Add project → Deploy (no build command).
All deployments serve the site over HTTPS automatically.

Folder Structure
├─ css/
│   └─ styles.css
├─ js/
│   └─ app.js
├─ index.html
└─ README.md
Customisation
Logo / Brand name – edit the <a class="brand"> block in index.html.
Colors – modify the CSS variables in css/styles.css.
Contact details – update the list in the Contact section of index.html.
Form handling – add an action attribute to the <form> (e.g., Formspree, Netlify Forms).
License
MIT © 2025 3rd Eye Dynamic. Feel free to use, modify, and redistribute.
