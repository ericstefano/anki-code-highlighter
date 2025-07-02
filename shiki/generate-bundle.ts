import { writeFile } from "fs/promises";
import { themeNames } from "@shikijs/themes";
import { codegen } from "shiki-codegen";
import { BundledLanguage, BundledTheme } from "./shiki.bundle";
import { languageNames } from "./languages";


const { code } = await codegen({
  langs: languageNames as BundledLanguage[],
  themes: themeNames as BundledTheme[],
  engine: "javascript",
});

await writeFile("./shiki.bundle.ts", code);
console.log("shiki.bundle.ts has been generated successfully.");
