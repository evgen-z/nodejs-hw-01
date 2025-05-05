import path from "node:path";

const pathToRoot = path.join(process.cwd());

export const PATH_DB = path.join(pathToRoot,"src/db", "db.json");
