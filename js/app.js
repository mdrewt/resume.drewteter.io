import { ReactDOM } from '/js/deps.js';
import Resume from '/js/Resume.js';

const resume = fetchResume();

async function fetchResume() {
  const response = await fetch('/assets/resume.json');
  const data = await response.json();
  return data;
}

document.addEventListener('DOMContentLoaded', function () {
  const appRoot = ReactDOM.createRoot(document.getElementById('appRoot'));
  resume.then(data => {
    appRoot.render(Resume(data));
  });
});