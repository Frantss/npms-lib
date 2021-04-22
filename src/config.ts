export const config: {
  fetch: (url: RequestInfo, init?: RequestInit) => Promise<Response>;
} = {
  fetch: (...args) => window?.fetch(...args),
};
