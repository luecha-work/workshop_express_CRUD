module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'xxx',
      lastName: 'yyy',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      Age: 22
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};