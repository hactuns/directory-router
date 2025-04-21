## 📁 Directory Router (dr) ##

##### `dr` (Directory Router) is a CLI tool for building Node.js API services using file-based routing, inspired by Next.js and Vercel's API route structure. It works with frameworks like Koa, Express, or Hono, and allows seamless development, build, and production deployment workflows.
---
### ✨ Features ###

- 📂 File-based routing for APIs

- 🛠 CLI commands: dev, build, start

- 📦 Bundling with esbuild
---
### 🧾 .drrc Config ###

A `.drrc` file should be located at the root of your API service.
```json
{
  "root": "src",
  "outDir": ".dr",
  "engine": "koa"
}
```
#### Fields:

- **root**: Folder where API routes are defined

- **outDir**: Build output folder

- **engine**: Framework engine to use (e.g., koa)
---
### 🧪 Example Usage in Your API Project ###

#### 📦 Install CLI tool

```sh
yarn add dr
```
#### ⚙️ Install Your Engine

Make sure to also install the server engine defined in your .drrc (e.g., koa).
```sh
yarn add koa
```
Replace koa with express or hono if you're using a different engine.

#### 🗂 Project Structure
```
api-service/
├── src/
│   └── api/
│       ├── hello.ts 
│       └── user/
│           └── profile.ts
├── .drrc
├── package.json
└── tsconfig.json
```

- 👟 Starting server in development mode: `dr dev` 

---
### 🚀 Commands ###

🧑‍💻 `dr dev`

- Watches for file changes

- Hot reload on file update

🔨 `dr build`

- Uses esbuild to bundle API into .dr

- Retains API structure

🔥 `dr start`

- Runs the bundled .dr/server.js for production

### 🧠 Notes ###

- Ensure .drrc is correctly configured.

- You can use middleware or plugins later with .drrc extensions.

- Currently supports koa only.

### 📬 Feedback ###

Open an issue or feature request on the GitHub repo!

