'use strict';

const verbModel = require('./verb.schema.js');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('--ID--', id);

  try {
    let data;
    if (id) {
      data = await verbModel.query('id').eq(id).limit(1).exec();
      // data = list; // What is this renaming for?
    } else {
      data = await verbModel.scan().exec();
    } return {
      status: 200,
      body: JSON.stringify(data)
    };
    } catch (error) {
      return {
        status: 500,
        response: JSON.stringify(error)
    }
  }
}
