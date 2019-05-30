#!/usr/bin/env node

var spawn = require('child_process').spawn

var deploy = spawn('ls')
//var deploy = spawn(__dirname + '/deploy.sh')

deploy.stdout.on('data', (data) => {
  console.log(`deploy out: ${data}`)
})

deploy.stderr.on('data', (data) => {
  console.log(`deploy error: ${data}`)
})

deploy.on('close', (code) => {
  console.log(`child deploy process exited with code ${code}`)
})
