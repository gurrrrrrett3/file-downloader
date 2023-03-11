import express from 'express';
import { config } from 'dotenv';
import { resolve } from 'path';
import serveIndex from 'serve-index';

config();

const app = express();

const rootPath = resolve(process.env.ROOT_PATH || '');

app.use("/", serveIndex(rootPath, { template: resolve('./index.html') }));
app.use("/", express.static(rootPath));

const port = parseInt(process.env.PORT || "3000")

app.listen(port, () => console.log(`Server is running on port ${port}`));
