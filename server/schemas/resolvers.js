const { } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await users.find({}).populate('').populate({
        path: '',
        populate: ''
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    professors: async () => {
      return await Professor.find({});
    }
  }
};

module.exports = resolvers;                             