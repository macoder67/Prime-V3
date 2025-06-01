const http = require('http');

const PORT = process.env.PORT || 3000;

const fek = {
  URL: 'https://files.catbox.moe/gndb0q.mp4',
  NAME: 'ᴘʀɪᴍᴇ-ᴠ3',
  OWNER: 'ᴍᴀᴄᴏᴅᴇʀ'
};

const server = http.createServer((req, res) => {
  const url = fek.URL;
  const isVideo = url.endsWith('.mp4') || url.includes('video');

  const mediaHTML = isVideo
    ? `<video controls autoplay loop muted style="max-width:90%; border: 2px solid #444; border-radius: 10px;">
         <source src="${url}" type="video/mp4">
         Your browser does not support the video tag.
       </video>`
    : `<img src="${url}" alt="Menu Image" style="max-width:90%; border: 2px solid #444; border-radius: 10px;" />`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${fek.NAME} - Menu</title>
      <style>
        body {
          background-color: #111;
          color: #fff;
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 40px;
          margin: 0;
        }
        h1, h2 {
          margin-bottom: 20px;
        }
        .media-container {
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to ${fek.NAME}</h1>
      <h2>Owner: ${fek.OWNER}</h2>
      <div class="media-container">${mediaHTML}</div>
    </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
