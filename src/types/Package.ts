export interface Package {
  name: string;
  scope: string;
  version: string;
  description?: string;
  keywords?: string[];
  date: string;
  links?: Record<string, string>;
  author?: Record<string, string>;
  publisher: {
    username: string;
    email: string;
  };
  maintainers: {
    username: string;
    email: string;
  }[];
}
