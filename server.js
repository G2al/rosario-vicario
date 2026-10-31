// File di avvio per Plesk (Node.js / Passenger): avvia il sito già compilato con `npm run build`.
// Passenger intercetta listen() e assegna lui la porta; PORT serve solo per provarlo in locale.
const { createServer } = require("node:http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV === "development";
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => handle(req, res)).listen(port, () => {
      console.log(`> Sito pronto sulla porta ${port} (${dev ? "sviluppo" : "produzione"})`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
