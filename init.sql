CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

TRUNCATE TABLE products RESTART IDENTITY;

INSERT INTO products (name, price) VALUES
  ('Laptop Dell XPS 13', 25000000),
  ('iPhone 15 Pro Max', 30000000),
  ('Samsung Galaxy S24', 22000000),
  ('AirPods Pro Gen 2', 6000000),
  ('iPad Air M2', 15000000);
