import {defineConfig} from "drizzle-kit";
import { DB_URL } from "./src/config/env.config.js";

if(!DB_URL){
    throw new Error('Database Url not set in .env file');
}

export default defineConfig({
    schema: "./src/db/schema.js",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: DB_URL
    }
})
