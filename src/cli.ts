#!/usr/bin/env node

import program from "commander";
import { mastermind } from "./index";

/// To run this file, use: npm run mastermind

// You can pass arguments to your application by running `npm run mastermind -- --your-argument`. 

// Add as many arguments as you like, by adding .option to program object, as seen below.

// program.args gives an array of provided arguments


program
  .version('0.1.0')
  .option('-e, --example')
  .option('-a, --anotherExample')
  .parse(process.argv)

mastermind(program.args)
