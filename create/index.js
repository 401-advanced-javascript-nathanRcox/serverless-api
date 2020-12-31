'use strict';

const uuid = require('uuid').v4;
const verbModel = require('./verb.schema');

// Lambda function (in AWS-ease).
exports.handler = async (event) => {
  // Get the event.body from AWS and save into a constant with keys matching the dynamoose table schema.
  const { infinitive, singular, plural, aspect, ofMotion } = JSON.parse(event.body);

  const id = uuid();

  try {
    // Create the record for dynamoose.
    const record = new verbModel({ id, infinitive, singular, plural, aspect, ofMotion });
    // Save the record to dynamoose.
    const data = await record.save();

    return { // Return the body to the client.
      status: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      status: 500,
      response: error.message
    };
  };
}
