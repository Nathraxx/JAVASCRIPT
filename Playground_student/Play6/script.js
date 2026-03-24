'use strict';

// Put your key here once.
const API_KEY = 'PASTE_YOUR_NEWSAPI_KEY_HERE';
const PAGE_SIZE = 5;

const queryInput = document.querySelector('#queryInput');
const loadBtn = document.querySelector('#loadBtn');
const statusEl = document.querySelector('#status');
const newsListEl = document.querySelector('#newsList');

function clearNews() {
  while (newsListEl.firstChild) {
    newsListEl.removeChild(newsListEl.firstChild);
  }
}

function renderArticles(articles) {
  clearNews();

  if (!articles.length) {
    statusEl.textContent = 'No results found.';
    return;
  }

  for (const article of articles) {
    const box = document.createElement('div');
    box.className = 'article';

    const title = document.createElement('h3');
    title.textContent = article.title || 'Untitled article';

    const desc = document.createElement('p');
    desc.textContent = article.description || 'No description available.';

    const link = document.createElement('a');
    link.href = article.url || '#';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Open article';

    box.appendChild(title);
    box.appendChild(desc);
    box.appendChild(link);
    newsListEl.appendChild(box);
  }

  statusEl.textContent = 'Loaded ' + articles.length + ' articles.';
}

async function fetchNews() {
  const query = queryInput.value.trim() || 'technology';

  if (!API_KEY || API_KEY === 'PASTE_YOUR_NEWSAPI_KEY_HERE') {
    statusEl.textContent = 'Set API_KEY in script.js first.';
    return;
  }

  loadBtn.disabled = true;
  statusEl.textContent = 'Loading news...';
  clearNews();

  try {
    const endpoint =
      'https://newsapi.org/v2/everything?q=' +
      encodeURIComponent(query) +
      '&pageSize=' +
      encodeURIComponent(PAGE_SIZE) +
      '&sortBy=publishedAt&language=en&apiKey=' +
      encodeURIComponent(API_KEY);

    const response = await fetch(endpoint);
    const data = await response.json();

    if (!response.ok || data.status !== 'ok') {
      throw new Error(data.message || ('Request failed with status ' + response.status));
    }

    renderArticles(data.articles || []);
  } catch (error) {
    statusEl.textContent = 'Error: ' + error.message;
  } finally {
    loadBtn.disabled = false;
  }
}

loadBtn.addEventListener('click', fetchNews);
