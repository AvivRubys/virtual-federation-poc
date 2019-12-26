const {gql} = require('apollo-server');
const {buildFederatedSchema} = require('@apollo/federation');

const typeDefs = gql`
    type Employee @key(fields: "EmployeeId") {
        EmployeeId: ID!
        Name: String!
    }

    extend type Team @key(fields: "TeamId") {
        TeamId: ID! @external
        Employees: [Employee!]!
    }
`;

const schema = buildFederatedSchema({
    typeDefs,
    resolvers: {
        Team: {
            Employees() {
                return [
                    {
                        EmployeeId: 1,
                        Name: 'Aviv',
                    },
                    {
                        EmployeeId: 2,
                        Name: 'Natalya',
                    },
                ];
            },
        },
    },
});

module.exports = schema;
