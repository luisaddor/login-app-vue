module.exports = function () {
  var faker = require("faker");
  var _ = require("lodash");

  const user_list = _.times(5, function (n) {
    return {
      id: n,
      name: faker.name.findName(),
      title: faker.name.jobTitle(),
      username: faker.internet.userName(),
      password: faker.random.number(),
    }
  });


  return {
    users: user_list,
    login: {
      token: 'jwt_token'
    }
  }
}
