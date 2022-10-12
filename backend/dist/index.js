"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { readFileSync } from 'node:fs'
const load_files_1 = require("@graphql-tools/load-files");
const node_1 = require("@graphql-yoga/node");
// const typeDefs = readFileSync('./schema.graphql', 'utf8')
const typeDefs = [...(0, load_files_1.loadFilesSync)(join(__dirname, './*.graphql'))];
const resolvers = {
    Query: {
    // typed resolvers
    }
};
const server = (0, node_1.createServer)({ typeDefs, resolvers });
server.start();
//# sourceMappingURL=index.js.map