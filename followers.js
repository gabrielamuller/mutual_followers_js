// Checking Bob's and Tina's mutual followers on social media

const bobsFollowers = ['Maria', 'Peter', 'Sarah', 'Anna'];
const tinasFollowers = ['Peter', 'Anna', 'Ellen'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers [i] === tinasFollowers[j]) {
      console.log('Mutual follower: ' + tinasFollowers[j])
    }
  }
};