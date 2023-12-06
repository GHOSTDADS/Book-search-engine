const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
}

type Thought {
    _id: ID
    authors: [String]
    bookId: String
    image: String
    link: String
    title: String
  }



type Auth {
    token: ID!
    user: User
}

type Query {
    me: Me
}


type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteBook
}
`