#!/usr/bin/env node

var exec = require('child_process').exec

exec(__dirname + '/deploy.sh', {maxBuffer: 1024 * 2000}, function (err, out) {
  if (err) {
    throw err
  }
  console.log(out)
})
