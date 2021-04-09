export interface Score {
  final: number;
  detail: {
    quality: number;
    popularity: number;
    maintenance: number;
  };
}
