const {ApolloGateway, LocalGraphQLDataSource} = require('@apollo/gateway');

const serviceList = {
    organization: require('./organization'),
    team: require('./team'),
    employee: require('./employee'),
};

module.exports = new ApolloGateway({
    serviceList: Object.keys(serviceList).map(name => ({name, url: `http://fake-url/${name}/`})),
    buildService(definition) {
        return new LocalGraphQLDataSource(serviceList[definition.name]);
    },
});
