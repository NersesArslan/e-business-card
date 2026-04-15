import { defineConfig, envField } from "astro/config";

export default defineConfig({
  env: {
    schema: {
      API_URL: envField.string({ context: "client", access: "public" }),
      SECRET_KEY: envField.string({ context: "server", access: "secret" }),
      PHONE_NUMBER: envField.string({ context: "client", access: "public" }),
      ADDRESS: envField.string({ context: "client", access: "public" }),
    },
  },
});
