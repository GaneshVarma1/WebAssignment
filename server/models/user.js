const users = [
    {
      userId: 10101,
      userName: 'Black Panther',
      petName: 'Nemo',
      emailId: 'blackpanther@gmail.com',
      password: 'panther#123',
    },
    {
      userId: 20202,
        userName: 'Spider Man',
        petName: 'Heidi',
        emailId: 'spiderman@gmail.com',
        password: 'spider#345',
    },
    {
      userId: 30303,
        userName: 'Hulk',
        petName: 'Pokemon',
        emailId: 'hulk@gmail.com',
        password: 'hulk#678',
    },

  ];

  let getUsers = () => users;
  module.exports = { getUsers };
