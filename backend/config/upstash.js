import { Redis } from "@upstash/redis";
import pkg, { Ratelimit } from "@upstash/ratelimit";
import "dotenv/config";

// const { RateLimit } = pkg;

export const redis = Redis.fromEnv();

export const ratelimit = new Ratelimit({
	redis,
	limiter: Ratelimit.slidingWindow(40, "60 s"),
	analytics: true,
});
