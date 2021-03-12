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
## Features of Typify

This are the plans for Typify. Some things are still a work in progress.

- ✅ - implemented
- ❌ - not yet implemented

### List of features

| option                            | status | notes                                                                               |
| --------------------------------  | ------ | ----------------------------------------------------------------------------------- |
| Standard HTTP methods             | ✅     |
| Workable way to connect mongo     | ❌     | Started                                                                             |
| Workable way to connect mysql     | ❌     | Not yet started                                                                     |
| Body information                  | ❌     | Not yet started                                                                     |
| Query params                      | ❌     | Not yet started                                                                     |

## Develop/Deployment

To use your API you only need to use:
```Typescript
npm start
```

### Supported

 <p>All database systems down below are supported from Typify. Were trying to target the more popular databases to create more diversity in support</p>
 <h4> Workable</h4>
        <li>MongoDB</li></ul>
 <h4> Workable in the future</h4>
        <li>MySQL</li></ul>

