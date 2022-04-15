const express = require('express');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt
} = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const PORT = 8080;

// dummy data
const students = [
    { id: 1, name: 'Angky' },
    { id: 2, name: 'Cahaya' },
    { id: 3, name: 'Putra' }
]

const borrowedBooks = [
    { id: 1, name: 'Harry Potter and the Chamber of Secrets', borrowerId: 1 },
    { id: 2, name: 'Harry Potter and the Prisoner of Azkaban', borrowerId: 1 },
    { id: 3, name: 'Harry Potter and the Goblet of Fire', borrowerId: 1 },
    { id: 4, name: 'The Fellowship of the Ring', borrowerId: 2 },
    { id: 5, name: 'The Two Towers', borrowerId: 2 },
    { id: 6, name: 'The Return of the King', borrowerId: 2 },
    { id: 7, name: 'The Way of Shadows', borrowerId: 3 },
    { id: 8, name: 'Beyond the Shadows', borrowerId: 3 }
]

const StudentType = new GraphQLObjectType({
    name: 'Student',
    description: 'Representation of students',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) }
    })
});

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'Representation of books and who borrows it',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        borrowerId: { type: GraphQLNonNull(GraphQLInt) },
        student: {
            type: StudentType,
            resolve: (book) => {
                return students.find(student => student.id === book.borrowerId);
            }
        }
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Query',
    fields: () => ({
        book: {
            type: BookType,
            description: 'Book Detail',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => {
                return borrowedBooks.find(book => book.id === args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            description: 'List of all books and borrowers',
            resolve: () => borrowedBooks
        },
        student: {
            type: StudentType,
            description: 'Student Detail',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => {
                return students.find(student => student.id === args.id);
            }
        },
        students: {
            type: new GraphQLList(StudentType),
            description: 'List of all students',
            resolve: () => students
        }
    })
});

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'Add a Book in Library',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                borrowerId: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve: (parent, args) => {
                const borrowedBook = {
                    id: borrowedBooks.length + 1,
                    name: args.name,
                    borrowerId: args.borrowerId
                }
                borrowedBooks.push(borrowedBook);
                return borrowedBook;
            }
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(PORT, () => console.log("server is running: " + PORT));