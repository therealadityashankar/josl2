# JOSL2

A TypeScript library to convert the BOSL2 OpenSCAD library to JSCAD

## Overview

This project aims to port the functionality of [BOSL2](https://github.com/revarbat/BOSL2) (The Belfry OpenSCAD Library v2) to [JSCAD](https://github.com/jscad/OpenJSCAD.org), allowing users to utilize BOSL2's powerful CAD features in a JavaScript/TypeScript environment.

Importantly, JOSL2 is not a direct one-to-one port of BOSL2, but rather a JavaScript-focused implementation that leverages the strengths and idioms of the JavaScript/TypeScript ecosystem. This approach ensures that the resulting code is not only functionally equivalent but also natural and pleasant to use for JavaScript developers. Nevertheless, the library aims to implement all the functionality available in BOSL2.

## Project Structure

```
josl2/
├── src/           # Source code directory
├── dist/          # Compiled output (both CommonJS and ESM)
├── package.json   # Dependencies and scripts
├── tsconfig.json  # TypeScript configuration
├── ROADMAP.md      # Development roadmap
└── README.md      # Project documentation
```

## Installation

```bash
npm install josl2
```

## Development

```bash
# Install dependencies
npm install

# Build for both CommonJS and ESM
npm run build

# Run tests
npm test
```

## Roadmap

See the [ROADMAP.md](ROADMAP.md) file for the detailed development plan.
