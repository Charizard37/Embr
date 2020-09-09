const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require('graphql');

//dummy data for now
const jobDB = [
  {
    id: 1,
    company: 'Google',
    position: 'Software Engineer',
    appliedDate: '9/7',
    interview: 0,
  },
  {
    id: 2,
    company: 'Google',
    position: 'Front End Engineer',
    appliedDate: '9/6',
    interview: 1,
  },
  {
    id: 3,
    company: 'Facebook',
    position: 'Zuckerbergs Personal Assistant',
    appliedDate: '8/6',
    interview: 2,
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
    appliedDate: { type: GraphQLString },
    interview: { type: GraphQLInt },
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
      resolve(parentValue, args) {
        for (let job of jobDB) {
          if (job.id === args.id) return job;
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

module.exports = new GraphQLSchema({
  query: RootQuery,
});
