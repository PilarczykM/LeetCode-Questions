import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    test: 'vitest',
    coverage: 'vitest run --coverage',
  },
});
