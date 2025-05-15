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
    // Aplica reglas adicionales
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Desactiva la regla que prohíbe `any`
      "@typescript-eslint/no-empty-object-type": "off", // Permite `{}` como tipo
    },
  },
];

export default eslintConfig;
