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



const records = [];

//beginning
function firstBatch(expId, numberOfRecords) {
  user.experience_id = expId;
  records.push(user);
  numberOfRecords -= 1;
  if (numberOfRecords > 0) {
    firstBatch(expId, numberOfRecords);
  } else if (numberOfRecords === 0 && expId < 5) {
    firstBatch(expId++, 100);
  }
}

async function writeFirst() {

  firstBatch();
  console.log('records');

  await csvWriter.writeRecords(records)
    .then(() => {
      console.log('Record Writing Complete first batch');
    })
    .catch(() => {
      console.log('error', error);
    });

}


const randNum = Math.ceil(Math.random() * Math.floor(20));
const records2 = [];

//middle

function midBatch(expId, numberOfRecords) {
  user.experience_id = expId;
  records2.push(user);
  numberOfRecords -= 1;
  if (numberOfRecords > 0) {
    midBatch(expId, numberOfRecords);
  } else if (numberOfRecords === 0 && expId < 999995) {
    midBatch(expId++, randNum);
  }
};

async function writeMiddle() {
  midBatch(6, randNum);
  console.log('records2');

  await csvWriter.writeRecords(records2)
    .then(() => {
      console.log('Record Writing Complete middle batch');
    })
    .catch(() => {
      console.log('error', error);
    });
};


//end

const records3 = [];

function lastBatch(expId, numberOfRecords) {
  user.experience_id = expId;
  records3.push(user);
  numberOfRecords -= 1;
  if (numberOfRecords > 0) {
    lastBatch(expId, numberOfRecords);
  } else if (numberOfRecords === 0 && expId < 1000000) {
    lastBatch(expId++, 100);
  }
}

async function writeLast() {
  lastBatch(999996, 100);
  console.log('records3');

  await csvWriter.writeRecords(records3)
    .then(() => {
      console.log('Record Writing Complete final batch');
    })
    .catch(() => {
      console.log('error', error);
    });
}


writeFirst()
  .then(() => {
    console.log('before middle');
    writeMiddle()
      .then(() => {
        console.log('before last');
        writeLast()
      })
  })



