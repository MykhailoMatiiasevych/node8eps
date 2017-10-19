import sayHello from './module';
import fromTest from './Test';

import fromJs from './js.js';
import json from './json.json';

sayHello();
fromTest();
fromJs();

console.log(json.message);
