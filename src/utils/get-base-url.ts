import { getEnvVar } from "./get-env-var";

export function getBaseUrl() {
  return getEnvVar(process.env.NEXT_PUBLIC_SITE_URL, "NEXT_PUBLIC_SITE_URL");
}
