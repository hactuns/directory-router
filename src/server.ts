import { AppConfig } from './type';
import { withConfig } from './middleware/command-config';
import { createServer } from 'http';

export async function startServer(config: AppConfig) {
  try {
    const port = Number(process.env.PORT || 3000);

    const server = createServer((req, res) => {
      //
    });

    server.listen(port, () => {
      console.log(`> Application running on port ${process.env.PORT}`, config);
    });
  } catch (error) {
    console.log(error);
  }
}

withConfig(startServer)();
