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