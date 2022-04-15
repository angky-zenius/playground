// dummy data
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

exports.BookType = new GraphQLObjectType({
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