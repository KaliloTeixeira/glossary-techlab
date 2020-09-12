const mongoose = require('mongoose');
const { query } = require('express');

const Word = mongoose.model('Word');

module.exports = {
    async listWords(req, res) {
        const { page = 1 } = req.query;
        const words = await Word.find();
        //const words = await Word.paginate({}, { page, limit: 10 });
        // .json() envia a resposta como Estrutura de Dados (json)
        return res.json(words);
    },

    async showWord(req, res) {
        const word = await Word.findById(req.params.id);

        if (!word) return res.json("Word not found!");
        return res.json(word);
    },

    async createWord(req, res) {
        const alreadyHave = await Word.findOne({ word: req.body.word });

        if (alreadyHave)
            return res.send({
                error: 'Error',
                message: 'Word already registered.'
            });

        else {
            const word = await Word.create(req.body);
            return res.json(word);
        }
    },

    async updateWord(req, res) {
        const word = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!word) return res.json("Word not found!");
        return res.json(word);
    },

    async removeWord(req, res) {
        await Word.findByIdAndRemove(req.params.id);

        return res.send();
    },

};