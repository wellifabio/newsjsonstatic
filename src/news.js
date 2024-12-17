

const fs = require("fs")
const path = require("path")
const file = path.join(__dirname, '../public/news.json')

const create = (req, res) => {
    const { title, content } = req.body
    const news = JSON.parse(fs.readFileSync(file, 'utf-8'))
    const id = news[news.length - 1].id + 1
    news.push({ id, title, content })
    fs.writeFileSync(file, JSON.stringify(news))
    res.redirect('/')
}

const read = (req, res) => {
    const news = JSON.parse(fs.readFileSync(file, 'utf-8'))
    res.render('index', { news: news })
}

const update = (req, res) => {
    const { id, title, content } = req.body
    const news = JSON.parse(fs.readFileSync(file, 'utf-8'))
    const index = news.findIndex((news) => news.id == id)
    news[index] = { id, title, content }
    fs.writeFileSync(file, JSON.stringify(news))
    res.redirect('/')
}

const del = (req, res) => {
    const id = req.params.id
    const news = JSON.parse(fs.readFileSync(file, 'utf-8'))
    const index = news.findIndex((news) => news.id == id)
    news.splice(index, 1)
    fs.writeFileSync(file, JSON.stringify(news))
    res.redirect('/')
}

module.exports = {
    create,
    read,
    update,
    del
}