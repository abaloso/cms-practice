import { defineLive } from "next-sanity";
import { client } from "./client";

const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "vX" }), // Replace "vX" with your desired API version
});

export { sanityFetch, SanityLive };
