# JOSL2 Development Roadmap

This roadmap outlines the planned implementation of BOSL2 features in JSCAD:

## Phase 1: Core Functionality

- [x] Project setup
- [ ] Constants and basic math utilities
- [ ] Basic transformation utilities
  - [ ] Translation
  - [ ] Rotation
  - [ ] Scaling
  - [ ] Mirroring

## Phase 2: Basic Shapes

- [ ] 2D Primitives
  - [ ] Squares, rectangles
  - [ ] Circles, arcs
  - [ ] Polygons
  - [ ] Text
- [ ] 3D Primitives
  - [ ] Cubes, cuboids
  - [ ] Cylinders
  - [ ] Spheres
  - [ ] Polyhedra

## Phase 3: Advanced Geometry

- [ ] Paths and regions
  - [ ] Path manipulation
  - [ ] Region operations
  - [ ] Path to region conversion
- [ ] Attachments system
  - [ ] Anchoring
  - [ ] Positioning
  - [ ] Alignment
- [ ] Boolean operations
  - [ ] Union
  - [ ] Difference
  - [ ] Intersection

## Phase 4: Utility Functions

- [ ] Math operations
  - [ ] Vector operations
  - [ ] Matrix operations
  - [ ] Trigonometry
- [ ] Bezier curves
- [ ] NURBS
- [ ] List manipulation
- [ ] String manipulation

## Phase 5: Advanced Features

- [ ] Distributors (arrays, mirrors, etc.)
- [ ] Masks and rounded edges
  - [ ] 2D Masks
  - [ ] 3D Masks
  - [ ] Chamfers and fillets
- [ ] Skin and sweep operations

## Phase 6: Specialized Components

- [ ] Threading and screws
- [ ] Gears
- [ ] Hinges and joiners
- [ ] Linear bearings

## Phase 7: Optimization and Documentation

- [ ] Performance optimization
- [ ] Comprehensive documentation
- [ ] Examples and tutorials
- [ ] Testing suite

## Phase 8: Integration and Additional Features

- [ ] Additional BOSL2 specific components
  - [ ] Bottle caps
  - [ ] Cube trusses
  - [ ] Wiring
  - [ ] Walls
- [ ] Compatibility layer with native JSCAD

## BOSL2 Module Status

Below is a detailed breakdown of specific BOSL2 modules to be implemented:

| Module | Status | Description |
|--------|--------|-------------|
| constants | In Progress | Mathematical and directional constants |
| transforms | Not Started | Translation, rotation, scaling, and reflection operations |
| attachments | Not Started | Attachment positioning and tagging system |
| shapes2d | Not Started | 2D primitive shapes and operations |
| shapes3d | Not Started | 3D primitive shapes and operations |
| drawing | Not Started | Line drawing and path computations |
| masks2d | Not Started | 2D masking shapes |
| masks3d | Not Started | 3D masking (chamfers, roundovers, etc.) |
| distributors | Not Started | Creating arrays and patterns of objects |
| color | Not Started | Coloring utilities |
| partitions | Not Started | Cutting and partitioning objects |
| paths | Not Started | Path manipulation utilities |
| regions | Not Started | Region operations and manipulations |
| skin | Not Started | Surface skinning between profiles |
| vnf | Not Started | Vertex and face structures for polyhedra |
| beziers | Not Started | Bezier curve operations |
| nurbs | Not Started | NURBS surface operations |
| rounding | Not Started | Rounding paths and 3D shapes |
| turtle3d | Not Started | Turtle graphics in 3D |
| isosurface | Not Started | Isosurface and metaball creation |
| math | Not Started | Math functions and operations |
| linalg | Not Started | Linear algebra operations |
| vectors | Not Started | Vector math operations |
| coords | Not Started | Coordinate system operations |
| geometry | Not Started | Geometric calculations |
| threading | Not Started | Thread creation for screws, bolts, etc. |
| screws | Not Started | Screw and bolt models |
| gears | Not Started | Gear generation |
| hinges | Not Started | Hinge and snap lock models |
| joiners | Not Started | Joiner mechanisms for parts |
| polyhedra | Not Started | Platonic and other polyhedra |
