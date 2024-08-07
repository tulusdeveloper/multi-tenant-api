import { Request, Response, NextFunction } from 'express';

export const tenantMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const tenantId = req.header('X-Tenant-ID');
  if (!tenantId) {
    return res.status(400).send('Tenant ID is missing');
  }

  // Store tenantId in the request object for further use
  (req as any).tenantId = tenantId;
  next();
};
