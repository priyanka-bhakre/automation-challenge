const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const users = [{ username: 'admin', password: 'password' }];
let todos = [];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) return res.status(200).send({ token: 'dummy-token' });
  res.status(401).send({ error: 'Invalid credentials' });
});

app.get('/items', (req, res) => res.send(todos));

app.post('/items', (req, res) => {
  const item = { id: Date.now().toString(), ...req.body };
  todos.push(item);
  res.status(201).send(item);
});

app.put('/items/:id', (req, res) => {
  const idx = todos.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).send();
  todos[idx] = { ...todos[idx], ...req.body };
  res.send(todos[idx]);
});

app.delete('/items/:id', (req, res) => {
  todos = todos.filter(i => i.id !== req.params.id);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));