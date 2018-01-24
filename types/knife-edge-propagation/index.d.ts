/**
 * Types definition for knife-edge-propagation
 * 
 * @author Jayser Mendez
 * https://github.com/jayserdny
 * 
 */

declare module "knife-edge-propagation" {
    var kep: KEP;
    export = kep;
}

declare class KEP {

    /**
     * @method knife_edge_compute_v: Method to compute the variable v
     * @param {number} d1: Distance 1
     * @param {number} d2: Distance 2
     * @param {number} h: Height
     * @param {number} r: Radius
     * @returns returns a number with the computed variable v
     */
    knife_edge_compute_v(d1: number, d2: number, h: number, r: number): number;

    /**
     * @method knife_edge_compute_pathloss: Method to compute the path loss
     * @param {number} v: variable v to calculate path loss
     * @returns returns a number with the computed path loss
     */
    knife_edge_compute_pathloss(v: number): number;

    knife_edge_compute_pathloss_lee(): number;
}