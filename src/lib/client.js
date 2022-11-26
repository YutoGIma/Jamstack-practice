import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "jamstackpractice",
	apiKey: process.env.API_KEY,
});
