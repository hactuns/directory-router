import { AppConfig } from './type';
import { withConfig } from './middleware/command-config';
import { createServer } from 'http';

export async function startServer(config: AppConfig) {
  try {
    const port = +(process.env.PORT || 3000);

    const server = createServer((req, res) => {
      console.log(req);
    });

    server.listen(port, () => {
      console.log(`> Application running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

withConfig(startServer)();
