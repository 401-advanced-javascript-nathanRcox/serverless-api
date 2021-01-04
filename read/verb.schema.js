'use strict';

const dynamoose = require('dynamoose');

const verbSchema = new dynamoose.Schema({
  'id': {
    'type': String,
    'hashkey': true
  },
  'infinitive': String,
  'singular': { // Verb conjugations for я, ты, он/а/о.
    'type': Array,
    'schema': [String]
  },
  'plural': { // Verb conjugations for мы, вы, они.
    'type': Array,
    'schema': [String]
  },
  'aspect': String,
  'ofMotion': { type: Boolean, default: false }
});

module.exports = dynamoose.model('verb', verbSchema);
