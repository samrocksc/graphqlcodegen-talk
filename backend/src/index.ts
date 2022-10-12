import { readFileSync } from 'node:fs'
import { ApolloServer } from 'apollo-server'
import { Resolvers } from './types'
import { join } from 'node:path'

const typeDefs = readFileSync(join(__dirname, './schema.graphql'), 'utf8')

const resolvers: Resolvers = {
  Query: {
    posts: () => [{
      id: 1,
      title: 'A night to remember',
      author: {
        id: 1,
        firstName: 'Bilbo',
        lastName: 'Baggins'
      }
    }]
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server
server.listen().then(({ url }: { url: any }) => {
  console.log(`🚀  Server ready at ${url}`)
})
