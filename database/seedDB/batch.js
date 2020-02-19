const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'reviews.csv',
  header: [
    { id: 'experience_id', title: 'experience_id' },
    { id: 'username', title: 'username' },
    { id: 'avatar', title: 'avatar' },
    { id: 'date', title: 'date' },
    { id: 'stars', title: 'stars' },
    { id: 'review', title: 'review' }
  ]
});

// experience_id 1 - 5 = 100 / each
// experience_id 9096 - 100000 = 100 / each
// experience_id 6 - 9095 = Math.ceil(Math.random() * Math.floor(20)); /each

const user = {
  experience_id: null,
  username: faker.name.firstName(),
  avatar: faker.image.avatar(),
  date: faker.date.between('2019-11-01', '2020-02-01'),
  stars: faker.random.number({ min: 0, max: 5 }),
  review: faker.lorem.paragraph(),
};

function batch(expId, numberOfRecords) {
  const records = [];
  if (expId <= 5 || expId >= 999996) {
    numberOfRecords = 100;
  }
  for (var i = expId * numberOfRecords +1 ; i < expId * numberOfRecords + numberOfRecords; i++) {
    user.experience_id = i;
    records.push(user);
  }
};

function writeBatch(rec, callback) {
  csvWriter.writeRecords(rec)
    .then(() => {
      console.log('Record Writing Complete');
      callback();
    })
    .catch(() => {
      console.log('error', error);
    });
};

function writeAll() {
  const exp_id = 0; //the experience id up to 10M
  const randNumOfRecords = Math.ceil(Math.random() * Math.floor(20)); //number of records per experience id
  const numberOfBatches = 1000; //number of batches to run

  function eachBatch() {
    writeBatch(batch(exp_id, randNumOfRecords), () => {
      exp_id++;
      if ( exp_id < numberOfBatches) {
        eachBatch();
      }
    });
  };
  eachBatch();
};

writeAll();

// writeFirst()
//   .then(() => {
//     console.log('before middle');
//     writeMiddle()
//       .then(() => {
//         console.log('before last');
//         writeLast()
//       })
//   })



