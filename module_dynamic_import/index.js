fs = require('fs')
testFolder = './actions/'

actions = {}
command = 'add'

fs.readdirSync(testFolder).forEach(file => {
  console.log(file)
  if (file.endsWith('.js')) {
    name = file.split('.js')[0]
    console.log(file, name)

    actions[name] = require(testFolder+file)
  }
})

console.log(actions, actions[command](2, 3) )