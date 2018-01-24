/**
 * Types definition for knife_edge_propagation
 * 
 * @author Jayser Mendez
 * https://github.com/jayserdny
 * 
 */

declare module "knife_edge_propagation" {
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

    /**
     * @method knife_edge_compute_pathloss_lee: Method to compute the path loss
     * @param {number} v: variable v to calculate path loss
     * @returns returns a number with the computed path loss
     */
    knife_edge_compute_pathloss_lee(v: number): number;

    /**
     * @method knife_edge_compute_h: Method to computed the height
     * @param {number} d1: Distance 1
     * @param {number} d2: Distance 2
     * @param {number} h1: Height 1
     * @param {number} h2: Height 2
     * @param {number} h3: Height 3
     * @returns
     */
    knife_edge_compute_h(d1: number, d2: number, h1: number, h2: number, h3: number): number;
}