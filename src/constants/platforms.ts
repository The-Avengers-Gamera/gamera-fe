export const PLATFORMS = ['All', 'PlayStation', 'Nintendo', 'Xbox', 'PC'] as const;

declare global {
  type Platform = (typeof PLATFORMS)[number];
}
