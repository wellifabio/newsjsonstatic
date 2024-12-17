

const fs = require("fs")
const { get } = require('@vercel/edge-config')

const create = async(req, res) => {
    const { title, img, content } = req.body;
    const news = await get('news');
    const id = news[news.length - 1].id + 1;
    news.push({ id, title, img, content });
    res.status(201).json({ id, title, img, content }).end();
}

const read = async (req, res) => {
    const news = await get('news');
    res.json(news).end();
}

const update = async (req, res) => {
    const { id, title, img, content } = req.body
    const news = await get('news');
    const index = news.findIndex((news) => news.id == id)
    news[index] = { id, title, img, content }
    res.status(202).json({ id, title, img, content }).end()
}

const del = async (req, res) => {
    const id = req.params.id
    const news = await get('news');
    const index = news.findIndex((news) => news.id == id)
    news.splice(index, 1)
    res.status(204).end()
}

module.exports = {
    create,
    read,
    update,
    del
}