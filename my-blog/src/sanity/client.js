// sanity/client.js
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "y2oj2zi4", // Replace with your actual project ID
  dataset: "production", // Ensure this dataset exists
  apiVersion: "2023-03-25", // Use a valid API version, e.g. "2023-03-25"
  useCdn: true, // Use CDN for faster and cached responses
});
