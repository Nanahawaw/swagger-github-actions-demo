import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Serve Swagger UI
const swaggerDocument = JSON.parse(fs.readFileSync(join(__dirname, '../swagger-output.json'), 'utf-8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Sample route
app.use('/api/example', (req, res) => {
    res.send('Example endpoint');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
