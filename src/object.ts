/**
 * JOSL2 Base Object3d Class
 * 
 * This file provides the foundational Object3d class that will be used
 * as a base for much of the JOSL2 library. It wraps JSCAD geometry and
 * provides additional functionality for manipulation and transformation.
 */

import { geom3 } from '@jscad/modeling/geometries';
import { translate, rotate, scale, mirror } from '@jscad/modeling/transforms';
import { union, subtract, intersect } from '@jscad/modeling/operations/booleans';

/**
 * Base class for all 3D objects in JOSL2
 * Provides a common interface for working with JSCAD geometric objects
 */
export class Object3d {
  /** The underlying JSCAD geometry */
  protected _geometry: any;
  
  /** Metadata and properties for the object */
  protected _metadata: Record<string, any> = {};
  
  /**
   * Create a new Object3d instance
   * @param geometry JSCAD geometry object (or compatible)
   * @param metadata Optional metadata to attach to the object
   */
  constructor(geometry: any, metadata: Record<string, any> = {}) {
    this._geometry = geometry;
    this._metadata = { ...metadata };
  }
  
  /**
   * Get the raw JSCAD geometry
   * @returns The underlying JSCAD geometry
   */
  get geometry(): any {
    return this._geometry;
  }
  
  /**
   * Get a specific metadata value
   * @param key The metadata key to retrieve
   * @param defaultValue Default value if key doesn't exist
   * @returns The metadata value or default
   */
  getMetadata<T>(key: string, defaultValue?: T): T | undefined {
    return (key in this._metadata) ? this._metadata[key] : defaultValue;
  }
  
  /**
   * Set a metadata value
   * @param key The metadata key
   * @param value The value to set
   * @returns This object for method chaining
   */
  setMetadata<T>(key: string, value: T): Object3d {
    this._metadata[key] = value;
    return this;
  }
  
  /**
   * Apply a translation to the object
   * @param x X translation or [x,y,z] vector
   * @param y Y translation (if x is a number)
   * @param z Z translation (if x is a number)
   * @returns A new Object3d with the transformation applied
   */
  translate(x: number | number[], y?: number, z?: number): Object3d {
    let vector: number[];
    
    if (Array.isArray(x)) {
      vector = x;
    } else {
      vector = [x, y || 0, z || 0];
    }
    
    return new Object3d(
      translate(vector, this._geometry),
      { ...this._metadata }
    );
  }
  
  /**
   * Apply a rotation to the object
   * @param angles Rotation angles in degrees [x,y,z] or single z angle
   * @returns A new Object3d with the transformation applied
   */
  rotate(angles: number | number[]): Object3d {
    const angleVec = Array.isArray(angles) ? angles : [0, 0, angles];
    // Convert from degrees to radians
    const radians = angleVec.map(angle => angle * Math.PI / 180);
    
    return new Object3d(
      rotate(radians, this._geometry),
      { ...this._metadata }
    );
  }
  
  /**
   * Apply scaling to the object
   * @param factors Scale factor(s) as number or [x,y,z] vector
   * @returns A new Object3d with the transformation applied
   */
  scale(factors: number | number[]): Object3d {
    const scaleVec = Array.isArray(factors) ? factors : [factors, factors, factors];
    
    return new Object3d(
      scale(scaleVec, this._geometry),
      { ...this._metadata }
    );
  }
  
  /**
   * Mirror the object across a plane
   * @param normal Normal vector of the plane to mirror across
   * @returns A new Object3d with the transformation applied
   */
  mirror(normal: number[]): Object3d {
    return new Object3d(
      mirror(normal, this._geometry),
      { ...this._metadata }
    );
  }
  
  /**
   * Union this object with another
   * @param other The object to union with
   * @returns A new Object3d with the boolean operation applied
   */
  union(other: Object3d): Object3d {
    return new Object3d(
      union(this._geometry, other._geometry),
      { ...this._metadata }
    );
  }
  
  /**
   * Subtract another object from this one
   * @param other The object to subtract
   * @returns A new Object3d with the boolean operation applied
   */
  subtract(other: Object3d): Object3d {
    return new Object3d(
      subtract(this._geometry, other._geometry),
      { ...this._metadata }
    );
  }
  
  /**
   * Intersect this object with another
   * @param other The object to intersect with
   * @returns A new Object3d with the boolean operation applied
   */
  intersect(other: Object3d): Object3d {
    return new Object3d(
      intersect(this._geometry, other._geometry),
      { ...this._metadata }
    );
  }
  
  /**
   * Create a copy of this object
   * @returns A new Object3d with the same geometry and metadata
   */
  clone(): Object3d {
    return new Object3d(this._geometry, { ...this._metadata });
  }
  
  /**
   * Static method to create an Object3d from a JSCAD geometry
   * @param geometry JSCAD geometry
   * @returns A new Object3d instance
   */
  static fromGeometry(geometry: any): Object3d {
    return new Object3d(geometry);
  }
}
