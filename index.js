
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('../appWeb/graphQL/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));
mongoose.connect('mongodb://localhost/webform');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

