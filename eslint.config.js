import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    ignores: ["dist", "node_modules", "generated"],
    rules: {
      "linebreak-style": [
        "error",
        process.platform === "win32" ? "windows" : "unix",
      ],
    },
  },
];
