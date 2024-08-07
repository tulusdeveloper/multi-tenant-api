import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'Vim@terminal@linux1$',
  database: 'medical_system',
});

export default pool;
