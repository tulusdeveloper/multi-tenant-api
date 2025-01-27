import express from 'express';
import userRoutes from './modules/users/userRoutes';
import { tenantMiddleware } from './middleware/tenantMiddleware';

const app = express();
const port = process.env.PORT || 3000;

app.use(tenantMiddleware);

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
