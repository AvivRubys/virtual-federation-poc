const {gql} = require('apollo-server');
const {buildFederatedSchema} = require('@apollo/federation');

const typeDefs = gql`
    type Organization @key(fields: "OrganizationId") {
        OrganizationId: ID!
        Name: String!
    }

    type Query {
        organization: Organization!
    }
`;

const schema = buildFederatedSchema({
    typeDefs,
    resolvers: {
        Query: {
            organization() {
                return {
                    OrganizationId: 'org-id',
                    Name: 'Soluto',
                };
            },
        },
    },
});

module.exports = schema;
