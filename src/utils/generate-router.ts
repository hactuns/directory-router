import fg from 'fast-glob';
import path from 'path';

function filePathToRoute(file: string, root: string): string {
  const rel = path.relative(root, file);

  return (
    '/' +
    rel
      .replace(/\\/g, '/')
      .replace(/\/route\.ts$/, '')
      .replace(/\[([^\]]+)\]/g, ':$1')
  );
}

export async function generateRouteMapFile(root: string) {
  const files = await fg('api/**/route.ts', { cwd: root, absolute: true });

  const AVAILABLE_METHODS = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'];

  const routeHandlers: Record<string, object> = {};

  await Promise.all(
    files.map(async (file) => {
      const apiPath = filePathToRoute(file, root);
      routeHandlers[apiPath] = await import(file);

      Object.keys(routeHandlers[apiPath]).forEach((key) => {
        if (AVAILABLE_METHODS.includes(key)) {
          console.log(`[CONTROLLER]: Mapped route ${key} ${filePathToRoute(file, root)}`);
        }
      });
    })
  );

  return routeHandlers;
}
