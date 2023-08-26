import app from "./app"

const port = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send("Welcome to the Talao Virtual API!")
})

app.listen(port, () => {
    console.log(`🔥 Server running on port ${port}`)
})
