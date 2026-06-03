'use strict';

function parseOperand(value, name) {
  var operand = String(value);

  if (!operand || !operand.match(/^(-)?[0-9.]+(e(-)?[0-9]+)?$/i) || operand.replace(/[-0-9e]/gi, '').length > 1) {
    throw new Error('Invalid ' + name + ': ' + value);
  }

  return Number(value);
}

exports.calculate = function(req, res) {
  req.app.use(function(err, _req, res, next) {
    if (res.headersSent) {
      return next(err);
    }

    res.status(400);
    res.json({ error: err.message });
  });

  var operations = {
    'add':      function(a, b) { return Number(a) + Number(b) },
    'subtract': function(a, b) { return a - b },
    'multiply': function(a, b) { return a * b },
    'divide':   function(a, b) { return a / b },
  };

  if (!req.query.operation) {
    throw new Error("Unspecified operation");
  }

  var operation = operations[req.query.operation];

  if (!operation) {
    throw new Error("Invalid operation: " + req.query.operation);
  }

  var operand1 = parseOperand(req.query.operand1, 'operand1');
  var operand2 = parseOperand(req.query.operand2, 'operand2');

  res.json({ result: operation(operand1, operand2) });
};
