const faker = require('faker');

module.exports.createFakeData = () => {
  const results = [];
  for (let i = 1; i <= 500; i += 1) {
    if (i < 101) {
      const user = {
        experience_id: 1,
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: faker.date.between('2019-11-01', '2020-02-01'),
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 100 && i < 201) {
      const user = {
        experience_id: 2,
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: faker.date.between('2019-08-01', '2019-11-01'),
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 200 && i < 301) {
      const user = {
        experience_id: 3,
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: faker.date.between('2019-05-01', '2019-08-01'),
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 300 && i < 401) {
      const user = {
        experience_id: 4,
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: faker.date.between('2019-05-01', '2019-03-01'),
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 400 && i < 501) {
      const user = {
        experience_id: 5,
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: faker.date.between('2019-03-01', '2019-01-01'),
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
  };

    for (var i = 0; i < 500; i += 1) {
      i % 10 === 0 ? exp_id++ : null;
      var exp_id = 6;
      const user = {
        experience_id: exp_id,
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: faker.date.between('2019-03-01', '2019-01-01'),
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    };

  return results;
};
