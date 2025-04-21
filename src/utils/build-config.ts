import { BuildOptions, SameShape } from "esbuild";
import { join } from "path";

export function getBuildConfig(
  rootDir: string,
  buildOutDir: string
): SameShape<BuildOptions, BuildOptions> {
  return {
    entryPoints: [join(rootDir, "api/**/*.ts")],
    outdir: buildOutDir,
    bundle: true,
    platform: "node",
    target: "node18",
    minify: true,
    outbase: rootDir,
    format: "cjs",
  };
}
