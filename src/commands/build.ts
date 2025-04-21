import { build } from "esbuild";
import { AppConfig } from "../type";
import { getBuildConfig } from "../utils/build-config";
import { copyEntryServer } from "../utils/server";

export async function drBuild(config: AppConfig, watch?: boolean) {
  try {
    const { rootDir, buildOutDir } = config;

    await build(getBuildConfig(rootDir, buildOutDir));
    await copyEntryServer(config);

    console.log("Build success at", new Date());
  } catch (error) {
    console.log(error);
  }
}
