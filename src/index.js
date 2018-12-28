#!/usr/bin/env node

const boxen = require('boxen');
const { bold, blue } = require('chalk').default;

const message = `  ${bold('Lars Graubner')}
  Creating apps with React and React Native

  ${bold('       Web: ')} ${blue('https://larsgraubner.com')}
  ${bold('   Twitter: ')} ${blue('https://twitter.com/larsgraubner')}
  ${bold('    GitHub: ')} ${blue('https://github.com/lgraubner')}
  ${bold('  LinkedIn: ')} ${blue('https://linkedin.com/in/larsgraubner')}`;

const box = boxen(message, {
  borderColor: 'blue',
  borderStyle: 'round',
  margin: 1,
  padding: 1
});

process.stdout.write(box);
