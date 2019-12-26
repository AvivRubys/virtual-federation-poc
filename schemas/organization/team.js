const {gql} = require('apollo-server');
const {buildFederatedSchema} = require('@apollo/federation');

const typeDefs = gql`
    type Team @key(fields: "TeamId") {
        TeamId: ID!
        Name: String!
    }

    extend type Organization @key(fields: "OrganizationId") {
        OrganizationId: ID! @external
        Team: Team!
    }
`;

const schema = buildFederatedSchema({
    typeDefs,
    resolvers: {
        Organization: {
            Team() {
                return {
                    TeamId: 'team-backend-platform',
                    Name: 'Backend Platform',
                };
            },
        },
    },
});

module.exports = schema;
