import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { PrismaClient } from '@prisma/client';
import Redis from 'ioredis';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();
const redis = new Redis({
  host: 'localhost',
  port: 6379
});

// Basic GraphQL schema
// test
// test
const typeDefs = `#graphql
  type User {
    id: Int!
    email: String!
    name: String
  }

  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      // Check cache first
      const cachedUsers = await redis.get('users');
      if (cachedUsers) {
        return JSON.parse(cachedUsers);
      }

      // If not in cache, get from database
      const users = await prisma.user.findMany();
      
      // Store in cache for 5 minutes
      await redis.set('users', JSON.stringify(users), 'EX', 300);
      
      return users;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

app.use(cors());
app.use(express.json());
app.use('/graphql', expressMiddleware(server));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 