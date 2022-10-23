import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import { db } from "./mockDB.mjs";
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json())

app.get('/tokens', (req, res) => {
    res.send(db)
})

app.post('/add-token', (req, res) => {
    const domain = req.body.domain;
    const token = uuidv4();
    const id = Date.now();

    const newToken = {
        id,
        domain,
        token,
    };

    db.data.push(newToken);
    res.send(newToken);
})

app.delete('/token/:id/delete', (req, res) => {
    const id = req.params?.id;
    if (id) {
        db.data = db.data.filter(({ id: tokenId }) => tokenId !== Number(id))
        res.send('ok');
    } else {
        res.send('id doesnt exist in request')
    }
})

app.listen(PORT, () => {
    console.log('this server started on PORT:', PORT)
})