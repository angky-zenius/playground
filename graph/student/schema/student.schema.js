const students = [
    { id: 1, name: 'Angky' },
    { id: 2, name: 'Cahaya' },
    { id: 3, name: 'Putra' }
]

exports.StudentType = new GraphQLObjectType({
    name: 'Student',
    description: 'Representation of students',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) }
    })
});