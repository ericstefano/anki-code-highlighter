/* Generate by @shikijs/codegen */
import type {
  DynamicImportLanguageRegistration,
  DynamicImportThemeRegistration,
  HighlighterGeneric,
} from '@shikijs/types'
import {
  createSingletonShorthands,
  createdBundledHighlighter,
} from '@shikijs/core'
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript'

type BundledLanguage =
  | 'abap'
  | 'actionscript-3'
  | 'ada'
  | 'angular-html'
  | 'angular-ts'
  | 'apache'
  | 'apex'
  | 'apl'
  | 'applescript'
  | 'ara'
  | 'asciidoc'
  | 'adoc'
  | 'asm'
  | 'astro'
  | 'awk'
  | 'ballerina'
  | 'bat'
  | 'batch'
  | 'beancount'
  | 'berry'
  | 'be'
  | 'bibtex'
  | 'bicep'
  | 'blade'
  | 'bsl'
  | '1c'
  | 'c'
  | 'cadence'
  | 'cdc'
  | 'cairo'
  | 'clarity'
  | 'clojure'
  | 'clj'
  | 'cmake'
  | 'cobol'
  | 'codeowners'
  | 'codeql'
  | 'ql'
  | 'coffee'
  | 'coffeescript'
  | 'common-lisp'
  | 'lisp'
  | 'coq'
  | 'cpp'
  | 'c++'
  | 'crystal'
  | 'csharp'
  | 'c#'
  | 'cs'
  | 'css'
  | 'csv'
  | 'cue'
  | 'cypher'
  | 'cql'
  | 'd'
  | 'dart'
  | 'dax'
  | 'desktop'
  | 'diff'
  | 'docker'
  | 'dockerfile'
  | 'dotenv'
  | 'dream-maker'
  | 'edge'
  | 'elixir'
  | 'elm'
  | 'emacs-lisp'
  | 'elisp'
  | 'erb'
  | 'erlang'
  | 'erl'
  | 'fennel'
  | 'fish'
  | 'fluent'
  | 'ftl'
  | 'fortran-fixed-form'
  | 'f'
  | 'for'
  | 'f77'
  | 'fortran-free-form'
  | 'f90'
  | 'f95'
  | 'f03'
  | 'f08'
  | 'f18'
  | 'fsharp'
  | 'f#'
  | 'fs'
  | 'gdresource'
  | 'gdscript'
  | 'gdshader'
  | 'genie'
  | 'gherkin'
  | 'git-commit'
  | 'git-rebase'
  | 'gleam'
  | 'glimmer-js'
  | 'gjs'
  | 'glimmer-ts'
  | 'gts'
  | 'glsl'
  | 'gnuplot'
  | 'go'
  | 'graphql'
  | 'gql'
  | 'groovy'
  | 'hack'
  | 'haml'
  | 'handlebars'
  | 'hbs'
  | 'haskell'
  | 'hs'
  | 'haxe'
  | 'hcl'
  | 'hjson'
  | 'hlsl'
  | 'html'
  | 'html-derivative'
  | 'http'
  | 'hxml'
  | 'hy'
  | 'imba'
  | 'ini'
  | 'properties'
  | 'java'
  | 'javascript'
  | 'js'
  | 'jinja'
  | 'jison'
  | 'json'
  | 'json5'
  | 'jsonc'
  | 'jsonl'
  | 'jsonnet'
  | 'jssm'
  | 'fsl'
  | 'jsx'
  | 'julia'
  | 'jl'
  | 'kotlin'
  | 'kt'
  | 'kts'
  | 'kusto'
  | 'kql'
  | 'latex'
  | 'lean'
  | 'lean4'
  | 'less'
  | 'liquid'
  | 'llvm'
  | 'log'
  | 'logo'
  | 'lua'
  | 'luau'
  | 'make'
  | 'makefile'
  | 'markdown'
  | 'md'
  | 'marko'
  | 'matlab'
  | 'mdc'
  | 'mdx'
  | 'mermaid'
  | 'mmd'
  | 'mipsasm'
  | 'mips'
  | 'mojo'
  | 'move'
  | 'narrat'
  | 'nar'
  | 'nextflow'
  | 'nf'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'nushell'
  | 'nu'
  | 'objective-c'
  | 'objc'
  | 'objective-cpp'
  | 'ocaml'
  | 'pascal'
  | 'perl'
  | 'php'
  | 'plsql'
  | 'po'
  | 'pot'
  | 'potx'
  | 'polar'
  | 'postcss'
  | 'powerquery'
  | 'powershell'
  | 'ps'
  | 'ps1'
  | 'prisma'
  | 'prolog'
  | 'proto'
  | 'protobuf'
  | 'pug'
  | 'jade'
  | 'puppet'
  | 'purescript'
  | 'python'
  | 'py'
  | 'qml'
  | 'qmldir'
  | 'qss'
  | 'r'
  | 'racket'
  | 'raku'
  | 'perl6'
  | 'razor'
  | 'reg'
  | 'regexp'
  | 'regex'
  | 'rel'
  | 'riscv'
  | 'rst'
  | 'ruby'
  | 'rb'
  | 'rust'
  | 'rs'
  | 'sas'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'sdbl'
  | '1c-query'
  | 'shaderlab'
  | 'shader'
  | 'shellscript'
  | 'bash'
  | 'sh'
  | 'shell'
  | 'zsh'
  | 'shellsession'
  | 'console'
  | 'smalltalk'
  | 'solidity'
  | 'soy'
  | 'closure-templates'
  | 'sparql'
  | 'splunk'
  | 'spl'
  | 'sql'
  | 'ssh-config'
  | 'stata'
  | 'stylus'
  | 'styl'
  | 'svelte'
  | 'swift'
  | 'system-verilog'
  | 'systemd'
  | 'talonscript'
  | 'talon'
  | 'tasl'
  | 'tcl'
  | 'templ'
  | 'terraform'
  | 'tf'
  | 'tfvars'
  | 'tex'
  | 'toml'
  | 'ts-tags'
  | 'lit'
  | 'tsv'
  | 'tsx'
  | 'turtle'
  | 'twig'
  | 'typescript'
  | 'ts'
  | 'typespec'
  | 'tsp'
  | 'typst'
  | 'typ'
  | 'v'
  | 'vala'
  | 'vb'
  | 'cmd'
  | 'verilog'
  | 'vhdl'
  | 'viml'
  | 'vim'
  | 'vimscript'
  | 'vue'
  | 'vue-html'
  | 'vyper'
  | 'vy'
  | 'wasm'
  | 'wenyan'
  | '文言'
  | 'wgsl'
  | 'wikitext'
  | 'mediawiki'
  | 'wiki'
  | 'wit'
  | 'wolfram'
  | 'wl'
  | 'xml'
  | 'xsl'
  | 'yaml'
  | 'yml'
  | 'zenscript'
  | 'zig'
type BundledTheme =
  | 'andromeeda'
  | 'aurora-x'
  | 'ayu-dark'
  | 'catppuccin-frappe'
  | 'catppuccin-latte'
  | 'catppuccin-macchiato'
  | 'catppuccin-mocha'
  | 'dark-plus'
  | 'dracula'
  | 'dracula-soft'
  | 'everforest-dark'
  | 'everforest-light'
  | 'github-dark'
  | 'github-dark-default'
  | 'github-dark-dimmed'
  | 'github-dark-high-contrast'
  | 'github-light'
  | 'github-light-default'
  | 'github-light-high-contrast'
  | 'gruvbox-dark-hard'
  | 'gruvbox-dark-medium'
  | 'gruvbox-dark-soft'
  | 'gruvbox-light-hard'
  | 'gruvbox-light-medium'
  | 'gruvbox-light-soft'
  | 'houston'
  | 'kanagawa-dragon'
  | 'kanagawa-lotus'
  | 'kanagawa-wave'
  | 'laserwave'
  | 'light-plus'
  | 'material-theme'
  | 'material-theme-darker'
  | 'material-theme-lighter'
  | 'material-theme-ocean'
  | 'material-theme-palenight'
  | 'min-dark'
  | 'min-light'
  | 'monokai'
  | 'night-owl'
  | 'nord'
  | 'one-dark-pro'
  | 'one-light'
  | 'plastic'
  | 'poimandres'
  | 'red'
  | 'rose-pine'
  | 'rose-pine-dawn'
  | 'rose-pine-moon'
  | 'slack-dark'
  | 'slack-ochin'
  | 'snazzy-light'
  | 'solarized-dark'
  | 'solarized-light'
  | 'synthwave-84'
  | 'tokyo-night'
  | 'vesper'
  | 'vitesse-black'
  | 'vitesse-dark'
  | 'vitesse-light'
type Highlighter = HighlighterGeneric<BundledLanguage, BundledTheme>

const bundledLanguages = {
  abap: () => import('@shikijs/langs/abap'),
  'actionscript-3': () => import('@shikijs/langs/actionscript-3'),
  ada: () => import('@shikijs/langs/ada'),
  'angular-html': () => import('@shikijs/langs/angular-html'),
  'angular-ts': () => import('@shikijs/langs/angular-ts'),
  apache: () => import('@shikijs/langs/apache'),
  apex: () => import('@shikijs/langs/apex'),
  apl: () => import('@shikijs/langs/apl'),
  applescript: () => import('@shikijs/langs/applescript'),
  ara: () => import('@shikijs/langs/ara'),
  asciidoc: () => import('@shikijs/langs/asciidoc'),
  adoc: () => import('@shikijs/langs/asciidoc'),
  asm: () => import('@shikijs/langs/asm'),
  astro: () => import('@shikijs/langs/astro'),
  awk: () => import('@shikijs/langs/awk'),
  ballerina: () => import('@shikijs/langs/ballerina'),
  bat: () => import('@shikijs/langs/bat'),
  batch: () => import('@shikijs/langs/bat'),
  beancount: () => import('@shikijs/langs/beancount'),
  berry: () => import('@shikijs/langs/berry'),
  be: () => import('@shikijs/langs/berry'),
  bibtex: () => import('@shikijs/langs/bibtex'),
  bicep: () => import('@shikijs/langs/bicep'),
  blade: () => import('@shikijs/langs/blade'),
  bsl: () => import('@shikijs/langs/bsl'),
  '1c': () => import('@shikijs/langs/bsl'),
  c: () => import('@shikijs/langs/c'),
  cadence: () => import('@shikijs/langs/cadence'),
  cdc: () => import('@shikijs/langs/cadence'),
  cairo: () => import('@shikijs/langs/cairo'),
  clarity: () => import('@shikijs/langs/clarity'),
  clojure: () => import('@shikijs/langs/clojure'),
  clj: () => import('@shikijs/langs/clojure'),
  cmake: () => import('@shikijs/langs/cmake'),
  cobol: () => import('@shikijs/langs/cobol'),
  codeowners: () => import('@shikijs/langs/codeowners'),
  codeql: () => import('@shikijs/langs/codeql'),
  ql: () => import('@shikijs/langs/codeql'),
  coffee: () => import('@shikijs/langs/coffee'),
  coffeescript: () => import('@shikijs/langs/coffee'),
  'common-lisp': () => import('@shikijs/langs/common-lisp'),
  lisp: () => import('@shikijs/langs/common-lisp'),
  coq: () => import('@shikijs/langs/coq'),
  cpp: () => import('@shikijs/langs/cpp'),
  'c++': () => import('@shikijs/langs/cpp'),
  crystal: () => import('@shikijs/langs/crystal'),
  csharp: () => import('@shikijs/langs/csharp'),
  'c#': () => import('@shikijs/langs/csharp'),
  cs: () => import('@shikijs/langs/csharp'),
  css: () => import('@shikijs/langs/css'),
  csv: () => import('@shikijs/langs/csv'),
  cue: () => import('@shikijs/langs/cue'),
  cypher: () => import('@shikijs/langs/cypher'),
  cql: () => import('@shikijs/langs/cypher'),
  d: () => import('@shikijs/langs/d'),
  dart: () => import('@shikijs/langs/dart'),
  dax: () => import('@shikijs/langs/dax'),
  desktop: () => import('@shikijs/langs/desktop'),
  diff: () => import('@shikijs/langs/diff'),
  docker: () => import('@shikijs/langs/docker'),
  dockerfile: () => import('@shikijs/langs/docker'),
  dotenv: () => import('@shikijs/langs/dotenv'),
  'dream-maker': () => import('@shikijs/langs/dream-maker'),
  edge: () => import('@shikijs/langs/edge'),
  elixir: () => import('@shikijs/langs/elixir'),
  elm: () => import('@shikijs/langs/elm'),
  'emacs-lisp': () => import('@shikijs/langs/emacs-lisp'),
  elisp: () => import('@shikijs/langs/emacs-lisp'),
  erb: () => import('@shikijs/langs/erb'),
  erlang: () => import('@shikijs/langs/erlang'),
  erl: () => import('@shikijs/langs/erlang'),
  fennel: () => import('@shikijs/langs/fennel'),
  fish: () => import('@shikijs/langs/fish'),
  fluent: () => import('@shikijs/langs/fluent'),
  ftl: () => import('@shikijs/langs/fluent'),
  'fortran-fixed-form': () => import('@shikijs/langs/fortran-fixed-form'),
  f: () => import('@shikijs/langs/fortran-fixed-form'),
  for: () => import('@shikijs/langs/fortran-fixed-form'),
  f77: () => import('@shikijs/langs/fortran-fixed-form'),
  'fortran-free-form': () => import('@shikijs/langs/fortran-free-form'),
  f90: () => import('@shikijs/langs/fortran-free-form'),
  f95: () => import('@shikijs/langs/fortran-free-form'),
  f03: () => import('@shikijs/langs/fortran-free-form'),
  f08: () => import('@shikijs/langs/fortran-free-form'),
  f18: () => import('@shikijs/langs/fortran-free-form'),
  fsharp: () => import('@shikijs/langs/fsharp'),
  'f#': () => import('@shikijs/langs/fsharp'),
  fs: () => import('@shikijs/langs/fsharp'),
  gdresource: () => import('@shikijs/langs/gdresource'),
  gdscript: () => import('@shikijs/langs/gdscript'),
  gdshader: () => import('@shikijs/langs/gdshader'),
  genie: () => import('@shikijs/langs/genie'),
  gherkin: () => import('@shikijs/langs/gherkin'),
  'git-commit': () => import('@shikijs/langs/git-commit'),
  'git-rebase': () => import('@shikijs/langs/git-rebase'),
  gleam: () => import('@shikijs/langs/gleam'),
  'glimmer-js': () => import('@shikijs/langs/glimmer-js'),
  gjs: () => import('@shikijs/langs/glimmer-js'),
  'glimmer-ts': () => import('@shikijs/langs/glimmer-ts'),
  gts: () => import('@shikijs/langs/glimmer-ts'),
  glsl: () => import('@shikijs/langs/glsl'),
  gnuplot: () => import('@shikijs/langs/gnuplot'),
  go: () => import('@shikijs/langs/go'),
  graphql: () => import('@shikijs/langs/graphql'),
  gql: () => import('@shikijs/langs/graphql'),
  groovy: () => import('@shikijs/langs/groovy'),
  hack: () => import('@shikijs/langs/hack'),
  haml: () => import('@shikijs/langs/haml'),
  handlebars: () => import('@shikijs/langs/handlebars'),
  hbs: () => import('@shikijs/langs/handlebars'),
  haskell: () => import('@shikijs/langs/haskell'),
  hs: () => import('@shikijs/langs/haskell'),
  haxe: () => import('@shikijs/langs/haxe'),
  hcl: () => import('@shikijs/langs/hcl'),
  hjson: () => import('@shikijs/langs/hjson'),
  hlsl: () => import('@shikijs/langs/hlsl'),
  html: () => import('@shikijs/langs/html'),
  'html-derivative': () => import('@shikijs/langs/html-derivative'),
  http: () => import('@shikijs/langs/http'),
  hxml: () => import('@shikijs/langs/hxml'),
  hy: () => import('@shikijs/langs/hy'),
  imba: () => import('@shikijs/langs/imba'),
  ini: () => import('@shikijs/langs/ini'),
  properties: () => import('@shikijs/langs/ini'),
  java: () => import('@shikijs/langs/java'),
  javascript: () => import('@shikijs/langs/javascript'),
  js: () => import('@shikijs/langs/javascript'),
  jinja: () => import('@shikijs/langs/jinja'),
  jison: () => import('@shikijs/langs/jison'),
  json: () => import('@shikijs/langs/json'),
  json5: () => import('@shikijs/langs/json5'),
  jsonc: () => import('@shikijs/langs/jsonc'),
  jsonl: () => import('@shikijs/langs/jsonl'),
  jsonnet: () => import('@shikijs/langs/jsonnet'),
  jssm: () => import('@shikijs/langs/jssm'),
  fsl: () => import('@shikijs/langs/jssm'),
  jsx: () => import('@shikijs/langs/jsx'),
  julia: () => import('@shikijs/langs/julia'),
  jl: () => import('@shikijs/langs/julia'),
  kotlin: () => import('@shikijs/langs/kotlin'),
  kt: () => import('@shikijs/langs/kotlin'),
  kts: () => import('@shikijs/langs/kotlin'),
  kusto: () => import('@shikijs/langs/kusto'),
  kql: () => import('@shikijs/langs/kusto'),
  latex: () => import('@shikijs/langs/latex'),
  lean: () => import('@shikijs/langs/lean'),
  lean4: () => import('@shikijs/langs/lean'),
  less: () => import('@shikijs/langs/less'),
  liquid: () => import('@shikijs/langs/liquid'),
  llvm: () => import('@shikijs/langs/llvm'),
  log: () => import('@shikijs/langs/log'),
  logo: () => import('@shikijs/langs/logo'),
  lua: () => import('@shikijs/langs/lua'),
  luau: () => import('@shikijs/langs/luau'),
  make: () => import('@shikijs/langs/make'),
  makefile: () => import('@shikijs/langs/make'),
  markdown: () => import('@shikijs/langs/markdown'),
  md: () => import('@shikijs/langs/markdown'),
  marko: () => import('@shikijs/langs/marko'),
  matlab: () => import('@shikijs/langs/matlab'),
  mdc: () => import('@shikijs/langs/mdc'),
  mdx: () => import('@shikijs/langs/mdx'),
  mermaid: () => import('@shikijs/langs/mermaid'),
  mmd: () => import('@shikijs/langs/mermaid'),
  mipsasm: () => import('@shikijs/langs/mipsasm'),
  mips: () => import('@shikijs/langs/mipsasm'),
  mojo: () => import('@shikijs/langs/mojo'),
  move: () => import('@shikijs/langs/move'),
  narrat: () => import('@shikijs/langs/narrat'),
  nar: () => import('@shikijs/langs/narrat'),
  nextflow: () => import('@shikijs/langs/nextflow'),
  nf: () => import('@shikijs/langs/nextflow'),
  nginx: () => import('@shikijs/langs/nginx'),
  nim: () => import('@shikijs/langs/nim'),
  nix: () => import('@shikijs/langs/nix'),
  nushell: () => import('@shikijs/langs/nushell'),
  nu: () => import('@shikijs/langs/nushell'),
  'objective-c': () => import('@shikijs/langs/objective-c'),
  objc: () => import('@shikijs/langs/objective-c'),
  'objective-cpp': () => import('@shikijs/langs/objective-cpp'),
  ocaml: () => import('@shikijs/langs/ocaml'),
  pascal: () => import('@shikijs/langs/pascal'),
  perl: () => import('@shikijs/langs/perl'),
  php: () => import('@shikijs/langs/php'),
  plsql: () => import('@shikijs/langs/plsql'),
  po: () => import('@shikijs/langs/po'),
  pot: () => import('@shikijs/langs/po'),
  potx: () => import('@shikijs/langs/po'),
  polar: () => import('@shikijs/langs/polar'),
  postcss: () => import('@shikijs/langs/postcss'),
  powerquery: () => import('@shikijs/langs/powerquery'),
  powershell: () => import('@shikijs/langs/powershell'),
  ps: () => import('@shikijs/langs/powershell'),
  ps1: () => import('@shikijs/langs/powershell'),
  prisma: () => import('@shikijs/langs/prisma'),
  prolog: () => import('@shikijs/langs/prolog'),
  proto: () => import('@shikijs/langs/proto'),
  protobuf: () => import('@shikijs/langs/proto'),
  pug: () => import('@shikijs/langs/pug'),
  jade: () => import('@shikijs/langs/pug'),
  puppet: () => import('@shikijs/langs/puppet'),
  purescript: () => import('@shikijs/langs/purescript'),
  python: () => import('@shikijs/langs/python'),
  py: () => import('@shikijs/langs/python'),
  qml: () => import('@shikijs/langs/qml'),
  qmldir: () => import('@shikijs/langs/qmldir'),
  qss: () => import('@shikijs/langs/qss'),
  r: () => import('@shikijs/langs/r'),
  racket: () => import('@shikijs/langs/racket'),
  raku: () => import('@shikijs/langs/raku'),
  perl6: () => import('@shikijs/langs/raku'),
  razor: () => import('@shikijs/langs/razor'),
  reg: () => import('@shikijs/langs/reg'),
  regexp: () => import('@shikijs/langs/regexp'),
  regex: () => import('@shikijs/langs/regexp'),
  rel: () => import('@shikijs/langs/rel'),
  riscv: () => import('@shikijs/langs/riscv'),
  rst: () => import('@shikijs/langs/rst'),
  ruby: () => import('@shikijs/langs/ruby'),
  rb: () => import('@shikijs/langs/ruby'),
  rust: () => import('@shikijs/langs/rust'),
  rs: () => import('@shikijs/langs/rust'),
  sas: () => import('@shikijs/langs/sas'),
  sass: () => import('@shikijs/langs/sass'),
  scala: () => import('@shikijs/langs/scala'),
  scheme: () => import('@shikijs/langs/scheme'),
  scss: () => import('@shikijs/langs/scss'),
  sdbl: () => import('@shikijs/langs/sdbl'),
  '1c-query': () => import('@shikijs/langs/sdbl'),
  shaderlab: () => import('@shikijs/langs/shaderlab'),
  shader: () => import('@shikijs/langs/shaderlab'),
  shellscript: () => import('@shikijs/langs/shellscript'),
  bash: () => import('@shikijs/langs/shellscript'),
  sh: () => import('@shikijs/langs/shellscript'),
  shell: () => import('@shikijs/langs/shellscript'),
  zsh: () => import('@shikijs/langs/shellscript'),
  shellsession: () => import('@shikijs/langs/shellsession'),
  console: () => import('@shikijs/langs/shellsession'),
  smalltalk: () => import('@shikijs/langs/smalltalk'),
  solidity: () => import('@shikijs/langs/solidity'),
  soy: () => import('@shikijs/langs/soy'),
  'closure-templates': () => import('@shikijs/langs/soy'),
  sparql: () => import('@shikijs/langs/sparql'),
  splunk: () => import('@shikijs/langs/splunk'),
  spl: () => import('@shikijs/langs/splunk'),
  sql: () => import('@shikijs/langs/sql'),
  'ssh-config': () => import('@shikijs/langs/ssh-config'),
  stata: () => import('@shikijs/langs/stata'),
  stylus: () => import('@shikijs/langs/stylus'),
  styl: () => import('@shikijs/langs/stylus'),
  svelte: () => import('@shikijs/langs/svelte'),
  swift: () => import('@shikijs/langs/swift'),
  'system-verilog': () => import('@shikijs/langs/system-verilog'),
  systemd: () => import('@shikijs/langs/systemd'),
  talonscript: () => import('@shikijs/langs/talonscript'),
  talon: () => import('@shikijs/langs/talonscript'),
  tasl: () => import('@shikijs/langs/tasl'),
  tcl: () => import('@shikijs/langs/tcl'),
  templ: () => import('@shikijs/langs/templ'),
  terraform: () => import('@shikijs/langs/terraform'),
  tf: () => import('@shikijs/langs/terraform'),
  tfvars: () => import('@shikijs/langs/terraform'),
  tex: () => import('@shikijs/langs/tex'),
  toml: () => import('@shikijs/langs/toml'),
  'ts-tags': () => import('@shikijs/langs/ts-tags'),
  lit: () => import('@shikijs/langs/ts-tags'),
  tsv: () => import('@shikijs/langs/tsv'),
  tsx: () => import('@shikijs/langs/tsx'),
  turtle: () => import('@shikijs/langs/turtle'),
  twig: () => import('@shikijs/langs/twig'),
  typescript: () => import('@shikijs/langs/typescript'),
  ts: () => import('@shikijs/langs/typescript'),
  typespec: () => import('@shikijs/langs/typespec'),
  tsp: () => import('@shikijs/langs/typespec'),
  typst: () => import('@shikijs/langs/typst'),
  typ: () => import('@shikijs/langs/typst'),
  v: () => import('@shikijs/langs/v'),
  vala: () => import('@shikijs/langs/vala'),
  vb: () => import('@shikijs/langs/vb'),
  cmd: () => import('@shikijs/langs/vb'),
  verilog: () => import('@shikijs/langs/verilog'),
  vhdl: () => import('@shikijs/langs/vhdl'),
  viml: () => import('@shikijs/langs/viml'),
  vim: () => import('@shikijs/langs/viml'),
  vimscript: () => import('@shikijs/langs/viml'),
  vue: () => import('@shikijs/langs/vue'),
  'vue-html': () => import('@shikijs/langs/vue-html'),
  vyper: () => import('@shikijs/langs/vyper'),
  vy: () => import('@shikijs/langs/vyper'),
  wasm: () => import('@shikijs/langs/wasm'),
  wenyan: () => import('@shikijs/langs/wenyan'),
  文言: () => import('@shikijs/langs/wenyan'),
  wgsl: () => import('@shikijs/langs/wgsl'),
  wikitext: () => import('@shikijs/langs/wikitext'),
  mediawiki: () => import('@shikijs/langs/wikitext'),
  wiki: () => import('@shikijs/langs/wikitext'),
  wit: () => import('@shikijs/langs/wit'),
  wolfram: () => import('@shikijs/langs/wolfram'),
  wl: () => import('@shikijs/langs/wolfram'),
  xml: () => import('@shikijs/langs/xml'),
  xsl: () => import('@shikijs/langs/xsl'),
  yaml: () => import('@shikijs/langs/yaml'),
  yml: () => import('@shikijs/langs/yaml'),
  zenscript: () => import('@shikijs/langs/zenscript'),
  zig: () => import('@shikijs/langs/zig'),
} as Record<BundledLanguage, DynamicImportLanguageRegistration>

const bundledThemes = {
  andromeeda: () => import('@shikijs/themes/andromeeda'),
  'aurora-x': () => import('@shikijs/themes/aurora-x'),
  'ayu-dark': () => import('@shikijs/themes/ayu-dark'),
  'catppuccin-frappe': () => import('@shikijs/themes/catppuccin-frappe'),
  'catppuccin-latte': () => import('@shikijs/themes/catppuccin-latte'),
  'catppuccin-macchiato': () => import('@shikijs/themes/catppuccin-macchiato'),
  'catppuccin-mocha': () => import('@shikijs/themes/catppuccin-mocha'),
  'dark-plus': () => import('@shikijs/themes/dark-plus'),
  dracula: () => import('@shikijs/themes/dracula'),
  'dracula-soft': () => import('@shikijs/themes/dracula-soft'),
  'everforest-dark': () => import('@shikijs/themes/everforest-dark'),
  'everforest-light': () => import('@shikijs/themes/everforest-light'),
  'github-dark': () => import('@shikijs/themes/github-dark'),
  'github-dark-default': () => import('@shikijs/themes/github-dark-default'),
  'github-dark-dimmed': () => import('@shikijs/themes/github-dark-dimmed'),
  'github-dark-high-contrast': () =>
    import('@shikijs/themes/github-dark-high-contrast'),
  'github-light': () => import('@shikijs/themes/github-light'),
  'github-light-default': () => import('@shikijs/themes/github-light-default'),
  'github-light-high-contrast': () =>
    import('@shikijs/themes/github-light-high-contrast'),
  'gruvbox-dark-hard': () => import('@shikijs/themes/gruvbox-dark-hard'),
  'gruvbox-dark-medium': () => import('@shikijs/themes/gruvbox-dark-medium'),
  'gruvbox-dark-soft': () => import('@shikijs/themes/gruvbox-dark-soft'),
  'gruvbox-light-hard': () => import('@shikijs/themes/gruvbox-light-hard'),
  'gruvbox-light-medium': () => import('@shikijs/themes/gruvbox-light-medium'),
  'gruvbox-light-soft': () => import('@shikijs/themes/gruvbox-light-soft'),
  houston: () => import('@shikijs/themes/houston'),
  'kanagawa-dragon': () => import('@shikijs/themes/kanagawa-dragon'),
  'kanagawa-lotus': () => import('@shikijs/themes/kanagawa-lotus'),
  'kanagawa-wave': () => import('@shikijs/themes/kanagawa-wave'),
  laserwave: () => import('@shikijs/themes/laserwave'),
  'light-plus': () => import('@shikijs/themes/light-plus'),
  'material-theme': () => import('@shikijs/themes/material-theme'),
  'material-theme-darker': () =>
    import('@shikijs/themes/material-theme-darker'),
  'material-theme-lighter': () =>
    import('@shikijs/themes/material-theme-lighter'),
  'material-theme-ocean': () => import('@shikijs/themes/material-theme-ocean'),
  'material-theme-palenight': () =>
    import('@shikijs/themes/material-theme-palenight'),
  'min-dark': () => import('@shikijs/themes/min-dark'),
  'min-light': () => import('@shikijs/themes/min-light'),
  monokai: () => import('@shikijs/themes/monokai'),
  'night-owl': () => import('@shikijs/themes/night-owl'),
  nord: () => import('@shikijs/themes/nord'),
  'one-dark-pro': () => import('@shikijs/themes/one-dark-pro'),
  'one-light': () => import('@shikijs/themes/one-light'),
  plastic: () => import('@shikijs/themes/plastic'),
  poimandres: () => import('@shikijs/themes/poimandres'),
  red: () => import('@shikijs/themes/red'),
  'rose-pine': () => import('@shikijs/themes/rose-pine'),
  'rose-pine-dawn': () => import('@shikijs/themes/rose-pine-dawn'),
  'rose-pine-moon': () => import('@shikijs/themes/rose-pine-moon'),
  'slack-dark': () => import('@shikijs/themes/slack-dark'),
  'slack-ochin': () => import('@shikijs/themes/slack-ochin'),
  'snazzy-light': () => import('@shikijs/themes/snazzy-light'),
  'solarized-dark': () => import('@shikijs/themes/solarized-dark'),
  'solarized-light': () => import('@shikijs/themes/solarized-light'),
  'synthwave-84': () => import('@shikijs/themes/synthwave-84'),
  'tokyo-night': () => import('@shikijs/themes/tokyo-night'),
  vesper: () => import('@shikijs/themes/vesper'),
  'vitesse-black': () => import('@shikijs/themes/vitesse-black'),
  'vitesse-dark': () => import('@shikijs/themes/vitesse-dark'),
  'vitesse-light': () => import('@shikijs/themes/vitesse-light'),
} as Record<BundledTheme, DynamicImportThemeRegistration>

const createHighlighter = /* @__PURE__ */ createdBundledHighlighter<
  BundledLanguage,
  BundledTheme
>({
  langs: bundledLanguages,
  themes: bundledThemes,
  engine: () => createJavaScriptRegexEngine(),
})

const {
  codeToHtml,
  codeToHast,
  codeToTokensBase,
  codeToTokens,
  codeToTokensWithThemes,
  getSingletonHighlighter,
  getLastGrammarState,
} = /* @__PURE__ */ createSingletonShorthands<BundledLanguage, BundledTheme>(
  createHighlighter,
)

export {
  bundledLanguages,
  bundledThemes,
  codeToHast,
  codeToHtml,
  codeToTokens,
  codeToTokensBase,
  codeToTokensWithThemes,
  createHighlighter,
  getLastGrammarState,
  getSingletonHighlighter,
}
export type { BundledLanguage, BundledTheme, Highlighter }
