import express from "express";
import { lcup } from "./lib/lcup.js";

const app = express();

app.use(express.json());

app.get('/util/number/:action', (req, res) => {
    const { input } = req.body;
    const action = req.params.action

    const result = {
        action,
        input,
        output: lcup (action, input)
    }
    console.log(result);
    res.json(result); 


});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 
