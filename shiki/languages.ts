import { languageNames } from "@shikijs/langs";
const excludedLangs = [
  "angular-expression",
  "angular-inline-style",
  "angular-inline-template",
  "angular-let-declaration",
  "angular-template-blocks",
  "angular-template",
  "cpp-macro",
  "es-tag-css",
  "es-tag-glsl",
  "es-tag-html",
  "es-tag-sql",
  "es-tag-xml",
  "jinja-html",
  "markdown-vue",
  "vue-directives",
  "vue-interpolations",
  "vue-sfc-style-variable-injection",
];
const parsedLanguageNames = languageNames.filter(
  (lang) => !excludedLangs.includes(lang)
);
export {parsedLanguageNames as languageNames}