// server.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get('/api/items', async (req, res) => {
  try {
    const items = await prisma.item.findMany();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
