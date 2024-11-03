import pg from "pg";

export function connect(): pg.Pool {
  const dbConnectionString: string | undefined =
    process.env.NEXT_PUBLIC_DATABASE_URL;
  if (!dbConnectionString) {
    throw new Error("Database connection string is not defined");
  }
  const db: pg.Pool = new pg.Pool({
    connectionString: dbConnectionString,
  });
  return db;
}

export const db: pg.Pool = connect();
