# Knife Edge Propagation Typescript Definitions
This library was originally written by [DoctorLai](https://github.com/DoctorLai/knife_edge_propagation). So, I decide to write the Typescript definition for those who wants to use this library in Typescript and avoid linter errors.

#### Installation
First, you need to copy the "types" folder into the root of your project and tell Typescript your folder for custom typings:

```json
"typeRoots" : ["./types/knife-edge-propagation"]
```

so, your tsconfig.json should look similar to this one:


```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "sourceMap": true,
        "typeRoots" : ["./types/knife-edge-propagation"]
    }
}
```

#### Examples

###### Typescript
```javascript
import * as kep from 'knife_edge_propagation';

let d1 = 15;
let d2 = 25;
let h = 5;
let r = 0.002;
let v = kep.knife_edge_compute_v(d1, d2, h, r);
let p1 = kep.knife_edge_compute_pathloss(v);
let p2 = kep.knife_edge_compute_pathloss_lee(v);

console.log("v: ",v);
console.log("p1: ",p1);
console.log("p2: ",p2);

console.log("h: ",kep.knife_edge_compute_h(10, 100, 5, 60, 7));
```

###### Typescript
```javascript
import * as kep from 'knife_edge_propagation';

let d1 = 15;
let d2 = 25;
let h = 5;
let r = 0.002;
let v = kep.knife_edge_compute_v(d1, d2, h, r);
let p1 = kep.knife_edge_compute_pathloss(v);
let p2 = kep.knife_edge_compute_pathloss_lee(v);

console.log("v: ",v);
console.log("p1: ",p1);
console.log("p2: ",p2);

console.log("h: ",kep.knife_edge_compute_h(10, 100, 5, 60, 7));
```

###### Javascript
```javascript
var kep = require('knife_edge_propagation');

let d1 = 15;
let d2 = 25;
let h = 5;
let r = 0.002;
let v = kep.knife_edge_compute_v(d1, d2, h, r);
let p1 = kep.knife_edge_compute_pathloss(v);
let p2 = kep.knife_edge_compute_pathloss_lee(v);

console.log("v: ",v);
console.log("p1: ",p1);
console.log("p2: ",p2);

console.log("h: ",kep.knife_edge_compute_h(10, 100, 5, 60, 7));
```

###### AMD
```javascript
define(function(require,exports,module){
    var kep = require('knife_edge_propagation');
    let d1 = 15;
    let d2 = 25;
    let h = 5;
    let r = 0.002;
    let v = kep.knife_edge_compute_v(d1, d2, h, r);
    let p1 = kep.knife_edge_compute_pathloss(v);
    let p2 = kep.knife_edge_compute_pathloss_lee(v);

    console.log("v: ",v);
    console.log("p1: ",p1);
    console.log("p2: ",p2);

    console.log("h: ",kep.knife_edge_compute_h(10, 100, 5, 60, 7));
});
```

#### Contributions
1. Fork this repo https://github.com/jayserdny/knife-edge-propagation-types
2. Create a new branch with your feature name. i.e. git checkout -b feature-name
3. Commit the change you've made: git commit -am 'Feature added'
4. Push the changes to your new branch: git push origin feature-name
5. Submit a PR (Pull Request)