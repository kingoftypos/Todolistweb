const express = require("express");
const { createTodo, updateTodo } = require("./types");
const cors=require("cors");
const { todo } = require('./db');
const app = express();

app.use(express.json());
app.use(cors());
app.post("/todo", async function (req, res) {
    try {
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload);
        if (!parsedPayload.success)
            return res.status(400).json({ msg: "You sent the wrong input" });

        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false,
        });
        return res.status(200).json({ msg: "Todo created" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal server error" });
    }
});

app.get("/todos", async function (req, res) {
    try {
        const todos = await todo.find({});
        return res.status(200).json({ todos });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal server error" });
    }
});

app.patch("/completed", async function (req, res) {
    try {
        const updatePayload = req.body;
        const completed=req.body.completed;
        const parsedPayload = updateTodo.safeParse(updatePayload.id);
        if (!parsedPayload.success)
            return res.status(400).json({ msg: "You sent the wrong input" });

        await todo.updateOne({
            _id: req.body.id
        }, {
            completed: !completed,
        });
        return res.status(200).json({ msg: "Todo completed" ,
        "completed":!completed
            
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal server error" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
