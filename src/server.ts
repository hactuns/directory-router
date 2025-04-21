import { serve } from "@hono/node-server";
import { isClass } from "./utils/general";
import { routeHandler } from "./middleware/route-handler";
import { AppConfig } from "./type";
import { withConfig } from "./middleware/command-config";

export async function getServer(provider: string, port: number) {
  const providerMapper: Record<string, string> = {
    express: "default",
    koa: "default",
    hono: "Hono",
    default: "default",
  };

  const Provider = (await import(provider))?.[
    providerMapper[provider] || "default"
  ];

  if (isClass(Provider)) {
    if (provider === "hono") {
      const app = new Provider();

      serve({
        fetch: app.fetch,
        port,
      });

      return app;
    }

    return new Provider();
  }

  return Provider();
}

export async function startServer(config: AppConfig) {
  try {
    const provider = config.provider.toLowerCase();

    const port = Number(process.env.PORT || 3000);

    const app = await getServer(provider, port);

    app.use(routeHandler(config));

    app?.listen?.(port);

    console.log(`> Application running on port ${process.env.PORT}`, config);
  } catch (error) {
    console.log(error);
  }
}

withConfig(startServer)();
