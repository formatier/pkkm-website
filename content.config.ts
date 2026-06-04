import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    policies: defineCollection({
      type: "page",
      source: "policies/*.md",
    }),
  },
});
