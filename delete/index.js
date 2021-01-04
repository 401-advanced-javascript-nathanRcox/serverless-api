'use strict';

const verbModel = require('./verb.schema.js');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('---EVENT---', event);

  const { infinitive, singular, plural, aspect, ofMotion } = JSON.parse(event.body);

  console.log('---EVENT.BODY---:', event.body);

  try {
    if(id) {
      await verbModel.delete({id});
      return {
        status: 200,
        body: `The verb ${infinitive} was deleted.`
      };
    };
  } catch (error) {
    return {
      status: 500,
      response: JSON.stringify(error)
    }
  }
}