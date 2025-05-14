/**
 * Constants and configuration values used throughout the JOSL2 library
 * 
 * This module is roughly equivalent to the constants.scad file in BOSL2.
 */

// Mathematical constants
export const PI = Math.PI;
export const TAU = 2 * Math.PI;
export const PHI = (1 + Math.sqrt(5)) / 2; // Golden ratio

// Common angles in radians
export const ANG90 = PI / 2;
export const ANG180 = PI;
export const ANG270 = PI * 1.5;
export const ANG360 = TAU;

// Resolution related constants
export const DEFAULT_RESOLUTION = 32; // Number of facets in a full circle

// Tolerance for use in boolean operations to prevent z-fighting
export const EPSILON = 1e-9;

// Special values
export const UNDEF = undefined;
export const INCH = 25.4; // mm
