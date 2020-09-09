const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');

//dummy data for now
const jobDB = [
  {
    id: 1,
    company: 'Google',
    position: 'Software Engineer',
    applied: true,
    interview: true,
  },
  {
    id: 2,
    company: 'Google',
    position: 'Front End Engineer',
    applied: true,
    interview: true,
  },
  {
    id: 3,
    company: 'Facebook',
    position: 'Zuckerbergs Personal Assistant',
    applied: false,
    interview: false,
  },
];

//Users
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    location: { type: GraphQLString },
    contact_information: { type: ContactInfo },
    about_me: { type: GraphQLString },
    applied_jobs: { type: JobType },
  }),
});

//Contact Info
const ContactInfoType = new GraphQLObjectType({
  name: 'ContactInfo',
  fields: () => ({
    email: { type: GraphQLString },
    phone_number: { type: GraphQLInt },
    linked_in_url: { type: GraphQLString },
    address: { type: GraphQLString },
  }),
});

//Job Applications
const JobType = new GraphQLObjectType({
  name: 'Job',
  fields: () => ({
    id: { type: GraphQLInt },
    company: { type: GraphQLString },
    position: { type: GraphQLString },
    applied: { type: GraphQLBoolean },
    phoneScreen: { type: GraphQLBoolean },
    interview: { type: GraphQLBoolean },
    takeHome: { type: GraphQLBoolean },
    doubleDown: { type: GraphQLBoolean },
  }),
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    job: {
      type: JobType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parentValue, { id }) {
        for (let job of jobDB) {
          if (job.id === id) return job;
        }
      },
    },
    jobs: {
      type: new GraphQLList(JobType),
      resolve(parentValue, args) {
        return jobDB;
      },
    },
  },
});

//Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addJob: {
      type: JobType,
      args: {
        company: { type: new GraphQLNonNull(GraphQLString) },
        position: { type: new GraphQLNonNull(GraphQLString) },
        applied: { type: GraphQLBoolean },
        phoneScreen: { type: GraphQLBoolean },
        interview: { type: GraphQLBoolean },
        takeHome: { type: GraphQLBoolean },
        doubleDown: { type: GraphQLBoolean },
      },
      resolve(parentValue, args) {
        jobDB.push({
          id: jobDB.length,
          ...args,
        });
        return jobDB[jobDB.length - 1];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
