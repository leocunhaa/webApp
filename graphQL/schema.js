const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID } = require('graphql');
const Usuario = require('../models/Usuario');

const UsuarioType = new GraphQLObjectType({
  name: 'Usuario',
  fields: () => ({
    id: { type: GraphQLID },
    nome: { type: GraphQLString },
    email: { type: GraphQLString },
    senha: { type: GraphQLString },
    // Adicione outros campos conforme necessário
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    usuario: {
      type: UsuarioType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Usuario.findById(args.id);
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    adicionarUsuario: {
      type: UsuarioType,
      args: {
        nome: { type: GraphQLString },
        email: { type: GraphQLString },
        senha: { type: GraphQLString },
      },
      resolve(parent, args) {
        const usuario = new Usuario({
          nome: args.nome,
          email: args.email,
          senha: args.senha,
        });
        return usuario.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
