#! /usr/bin/env node

const boxen = require('boxen');
const { bold, cyan } = require('chalk').default;

const lines = [
  bold('Lars Graubner'),
  'Creating apps with React and React Native',
  '',
  bold('       Web: ') + cyan('https://larsgraubner.com'),
  bold('   Twitter: ') + cyan('https://twitter.com/larsgraubner'),
  bold('    GitHub: ') + cyan('https://github.com/lgraubner'),
  bold('  LinkedIn: ') + cyan('https://linkedin.com/in/larsgraubner')
];

const message = lines.join('\n');

const box = boxen(message, {
  borderColor: 'cyan',
  borderStyle: 'round',
  margin: 1,
  padding: 1
});

process.stdout.write(box + '\n');
