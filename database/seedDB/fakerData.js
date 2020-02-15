const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'reviews.csv',
  header: [
    { id: 'experience_id', title: 'experience_id'},
    {id: 'username', title: 'username'},
    {id: 'avatar', title: 'avatar'},
    {id: 'date', title: 'date'},
    {id: 'stars', title: 'stars'},
    {id: 'review', title: 'review'}
  ]
})


const records = [];

var createFakeData = () => {
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
      records.push(user);
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
      records.push(user);
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
      records.push(user);
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
      records.push(user);
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
      records.push(user);
    }
  };

//middle
  for (var i = 0; i < 499000; i += 1) {
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
    records.push(user);
  };

  //end
  for (let i = 1; i <= 500; i += 1) {
    if (i < 101) {
      const user = {
        experience_id: 9096,
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: faker.date.between('2019-11-01', '2020-02-01'),
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      records.push(user);
    }
    if (i > 100 && i < 201) {
      const user = {
        experience_id: 9097,
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: faker.date.between('2019-08-01', '2019-11-01'),
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      records.push(user);
    }
    if (i > 200 && i < 301) {
      const user = {
        experience_id: 9098,
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: faker.date.between('2019-05-01', '2019-08-01'),
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      records.push(user);
    }
    if (i > 300 && i < 401) {
      const user = {
        experience_id: 9099,
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: faker.date.between('2019-05-01', '2019-03-01'),
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      records.push(user);
    }
    if (i > 400 && i < 501) {
      const user = {
        experience_id: 10000,
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: faker.date.between('2019-03-01', '2019-01-01'),
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      records.push(user);
    }
  };

  return records;
};
var start = new Date().getTime();
console.log(start);
createFakeData();

csvWriter.writeRecords(records)
  .then(() => {
    console.log('Record Writing Complete');
  })
  .catch(() => {
    console.log('error', error);
  });

  var elapsed = new Date().getTime() - start;
  console.log(elapsed);