# Typify

A lightweight low ceremony APIs for Typescript/Javascript applications.

- Optimized for building HTTP APIs quickly
- Take advantage of easy to understand implementation

### Quick GET implementation

```TypeScript
import express from 'express';

const app = express();

app.get('/', (require, response) =>
{
    response.send('');
});
```

## Develop/Deployment

To use your API you only need to use:
```Typescript
npm start
```
