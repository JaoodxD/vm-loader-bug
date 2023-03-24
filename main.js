'use strict';

const { load } = require('./load');

const main = async () => {
  const sandbox = {
    console
  };

  // ok
  await load('./arrowFunctionModule.js', sandbox);

  // ReferenceError: hello is not defined
  await load('./functionDeclarationModule.js', sandbox);
};
main();
