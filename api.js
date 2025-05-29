const apiUrl = "https://sheetdb.io/api/v1/xju5m46mbp1sg"; // Your SheetDB API URL

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Inspect data structure here
    const container = document.querySelector('.messages');
    container.innerHTML = '';

    data.forEach(entry => {
      // Find keys dynamically with trim (handles trailing spaces)
      const nameKey = Object.keys(entry).find(k => k.trim() === 'Name (optional)');
      const wishKey = Object.keys(entry).find(k => k.trim() === 'Your Birthday Wish (required)');

      const name = nameKey ? entry[nameKey].trim() : '';
      const wish = wishKey ? entry[wishKey].trim() : '';

      // Skip entries with empty wish (you can also check name if needed)
      if (!wish) return;

      const blockquote = document.createElement('blockquote');
      blockquote.textContent = name ? `“${wish}” — ${name}` : `“${wish}”`;
      container.appendChild(blockquote);
    });

    if (container.children.length === 0) {
      container.textContent = 'No wishes yet. Be the first to send your greetings!';
    }
  })
  .catch(error => {
    console.error('Error fetching wishes:', error);
    document.querySelector('.messages').textContent = 'Failed to load wishes.';
  });
