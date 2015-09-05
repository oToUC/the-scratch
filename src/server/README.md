# Server 

Implementation of backend server

## Middleware

Middleware is located in [middleware](./middeware) subfolder.

- compresion
- favicon
- static

### Middleware function example

```
// compression.js
import compression from 'compression';

export default function compressionMiddleware(app) {
  app.use(compression());
};
```
