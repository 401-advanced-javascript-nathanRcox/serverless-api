'use strict';

const verbModel = require('./verb.schema.js');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('---EVENT---', event);

  const { infinitive, singular, plural, aspect, ofMotion } = JSON.parse(event.body);

  try {
    let data;

    if(id) {
      data = await verbModel.update( {id}, { infinitive, singular, plural, aspect, ofMotion });
    return {
      status: 200,
      body: JSON.stringify(data)
      };
    };
    } catch (error) {
      return {
        status: 500,
        response: JSON.stringify(error)
    }
  }
}

module.exports = exports.handler;