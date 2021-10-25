const ls = require('./ls');
const pwd = require('./pwd')


process.stdout.write('prompt >');
// pwd()

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  switch(cmd) {
    case 'pwd':
      return pwd();
    case 'ls':
      return ls();
  }


  // process.stdout.write('You typed: ' + cmd)
  process.stdout.write('\nprompt> ')
});


