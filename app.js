import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/get', (require, response) =>
{
    response.send('get result');
});

app.post('/post', (require, response) =>
{
    response.send('post result');
});

app.put('/put', (require, response) =>
{
    response.send('put result');
});

app.delete('/delete', (require, response) =>
{
    response.send('delete result');
});

app.listen(PORT, () => console.log('Server running on port: http://localhost:5000'));