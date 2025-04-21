import { BuildOptions, SameShape } from "esbuild";
import { join } from "path";

export function getBuildConfig(
  root: string,
  outDir: string
): SameShape<BuildOptions, BuildOptions> {
  return {
    entryPoints: [join(root, "api/**/*.ts")],
    outdir: outDir,
    bundle: true,
    platform: "node",
    target: "node18",
    minify: true,
    outbase: root,
    format: "cjs",
  };
}
