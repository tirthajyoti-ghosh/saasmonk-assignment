import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;

app.get('/', async (req, res) => {

});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});