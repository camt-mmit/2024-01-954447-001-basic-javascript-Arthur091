import readline from 'node:readline';
import {stdin,stdout} from 'node:process';
import { argv } from 'node:process';

const rl = readline.createInterface({input:stdin,output:stdout});
const n = parseInt(argv[2]);

for (let i = 1; i <= n; i++) {
   for (let j = 1; j <= i; j++) {
      rl.write(`*`);
   }
   rl.write('\n'); //space
}
rl.close();