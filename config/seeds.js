/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */

let faker = require('faker');
const numsOfUsers = 20;
let users = [];
for (let i = 0; i < numsOfUsers; i++) {
  users.push({
    email: faker.internet.email(),
    username : faker.internet.userName(),
    avatar: faker.image.avatar(),
    password: '123456'
  });
}

module.exports.seeds = {
  user : users
}
