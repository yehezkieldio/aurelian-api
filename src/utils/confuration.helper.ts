import { ConfigurationError } from "@/core/error-handling/errors";

export function getConfig<T>(key: string): T {
    const value = process.env[key];

    if (!value) {
        throw new ConfigurationError(`Missing configuration for ${key}`);
    }

    return value as unknown as T;
}
