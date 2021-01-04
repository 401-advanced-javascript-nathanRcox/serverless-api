'use strict';

let AWS = require('aws-sdk-mock');
const create = require('./exports.handler');


AWS.mock('DynamoDB', 'postItem', function (params, callback){
  callback(null, "successfully put item in database");
});
 
let params = id;
let event = { 
  infinitive: 'говорить', 
  singular: ['я говорю', 'ты говоришь', 'он/а/о говорит'], 
  plural: ['мы говорим', 'вы говорите', 'они говорят'], 
  aspect: 'несовершенный вид', 
  ofMotion: false 
};

describe ('the create DB item handler function', () => {

  it ('should create an item with a unique id', async () => {
    
  })
})


// or AWS.restore(); this will restore all the methods and services 
AWS.restore('DynamoDB');
