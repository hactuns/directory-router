import sade from "sade";
import { drBuild, drDev, drStart } from "./commands";
import { withConfig } from "./middleware/command-config";
import { Program } from "./type";

const prog = sade("dr");

const actions: Program[] = [
  {
    command: "dev",
    description: "Run the development environment",
    example: "dr dev",
    action: drDev,
  },
  {
    command: "build",
    description: "Build the source directory",
    example: "dr build",
    action: drBuild,
  },
  {
    command: "start",
    description: "Start the application",
    example: "dr start",
    action: drStart,
  },
];

actions.map((act) =>
  prog
    .command(act.command)
    .describe(act.description)
    .example(act.example)
    .action(withConfig(act.action))
);

prog.parse(process.argv);
