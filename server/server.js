const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const hbsMiddleware = require("express-handlebars")
const fs = require("fs")

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)
app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const bookPath = path.join(__dirname, "../books.json")

const getBooks = () => {
  return JSON.parse(fs.readFileSync(bookPath).toString())
}

app.get("/", (req, res) => {
  res.render("books/index")
})

app.get("/api/v1/books.json", (req, res) => {
  const books = getBooks()
  res.json(books)
})

app.post("/api/v1/books.json", (req, res) => {
  //retrieve the data from the request
  //save the data from the request
  const books = getBooks()
  books.push({title: req.body.title})
  fs.writeFileSync(bookPath, JSON.stringify(books))

  //respond to the fetch request with the newly created book object
  res.status(201).json({title: req.body.title})
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

module.exports = app
