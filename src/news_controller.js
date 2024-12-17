

const fs = require("fs")
const path = require("path")
const file = path.join(__dirname, '../public/news_model.json')

const create = (req, res) => {
    const { title, img, content } = req.body
    const news = JSON.parse(fs.readFileSync(file, 'utf-8'))
    const id = news[news.length - 1].id + 1
    news.push({ id, title, img, content })
    fs.writeFileSync(file, JSON.stringify(news))
    res.status(201).json({ id, title, img, content }).end()
}

const read = (req, res) => {
    const news = JSON.parse(fs.readFileSync(file, 'utf-8'))
    res.json(news).end()
}

const update = (req, res) => {
    const { id, title, img, content } = req.body
    const news = JSON.parse(fs.readFileSync(file, 'utf-8'))
    const index = news.findIndex((news) => news.id == id)
    news[index] = { id, title, img, content }
    fs.writeFileSync(file, JSON.stringify(news))
    res.status(202).json({ id, title, img, content }).end()
}

const del = (req, res) => {
    const id = req.params.id
    const news = JSON.parse(fs.readFileSync(file, 'utf-8'))
    const index = news.findIndex((news) => news.id == id)
    news.splice(index, 1)
    fs.writeFileSync(file, JSON.stringify(news))
    res.status(204).end()
}

module.exports = {
    create,
    read,
    update,
    del
}