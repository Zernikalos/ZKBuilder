import {BufferGeometry} from "three";
import _ from "lodash";
import {ATTRS} from "../constants";

/**
 * Filters only recognized attributes by the parser
 * @param geometry
 */
export function filterAttributes(geometry: BufferGeometry) {
    return Object.entries(geometry.attributes).filter(([key, _attr]) => !_.isNil(ATTRS.findByThreeName(key)))
}
