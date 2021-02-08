import express from 'express';
import * as http from 'http';

let app = require('./server').default;

let httpServer;

if (module.hot) {
  module.hot.accept(['./server', './socket'], () => {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      app = require('./server').default;
      if (httpServer !== undefined) {
        require('./socket').default(httpServer);
      }
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 3000;

const expressServer = express()
  .use((req, res) => app.handle(req, res));

httpServer = http.createServer(expressServer)
  .on('error', (err) => {
    console.error(err);
  })
  .listen(port, () => {
    console.log(`> Started at http://localhost:${port}`);
  });

require('./socket').default(httpServer);

export default httpServer;
