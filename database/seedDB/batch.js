const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const mock = require('./MOCK_DATA.json');

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


function set(expId) {
  const records = [];
  let secondaryRecords = null;
  if (expId <= 5 || expId >= 9999996) {
    secondaryRecords = 100;
  } else {
    secondaryRecords = Math.ceil(Math.random() * Math.floor(20));
  }
  for (var i = expId; i < secondaryRecords + expId; i++) {
    var mkdate = mock[Math.floor(Math.random() * mock.length)]["date"];
    const user = {
      experience_id: expId,
      username: faker.name.firstName(),
      avatar: faker.image.avatar(),
      date: mkdate,
      stars: faker.random.number({ min: 0, max: 5 }),
      review: faker.lorem.sentences(2),
    };
    records.push(user);
  }
  return records;
};

function writeSet(sets, callback) {
  csvWriter.writeRecords(sets)
    .then(() => {
      callback();
    })
};

function writeAllRecords() {
  let exp_id = 1;
  let primaryRecords = 10000000;

  function primarySets() {
    writeSet(set(exp_id), () => {
      exp_id++;
      if (exp_id <= primaryRecords) {
        primarySets();
      }
    });
  };
  primarySets();
};


writeAllRecords();


// writeFirst()
//   .then(() => {
//     console.log('before middle');
//     writeMiddle()
//       .then(() => {
//         console.log('before last');
//         writeLast()
//       })
//   })



