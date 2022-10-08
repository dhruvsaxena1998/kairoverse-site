import type { APIRoute } from "astro";

export const get: APIRoute = async (args) => {
  return {
    body: JSON.stringify({
      message: "hello world",
    }),
  };
};
