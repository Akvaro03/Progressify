import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/prisma/generated/**", // si usás una carpeta de salida personalizada
      "**/lib/generated/**", // si usás una carpeta de salida personalizada
      "**/node_modules/.prisma/**", // los archivos generados internamente por Prisma
    ],
  },

  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-unused-expressions": "warn",
    },
  },
];

export default eslintConfig;
