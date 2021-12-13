const fs = require('fs');
const path = require('path');
const glob = require('glob');
const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const pkg = require('./package.json');

const FILES = glob.sync('src/**/*.{ts,tsx,js}', {
  ignore: ['src/utils/mocks/*', 'src/*/*.stories.{ts,tsx,js}', 'src/*/*.test.{ts,tsx,js}'],
});

// Take out unneeded keys of package.json to create build package.json
const { scripts, devDependencies, 'lint-staged': _, ...buildPkg } = pkg;
buildPkg.main = 'index.js';
buildPkg.types = 'index.d.ts';

// Copy build package.json
fs.writeFile(
  path.resolve(__dirname, 'dist', 'package.json'),
  JSON.stringify(buildPkg, null, '\t'),
  (err) => {
    if (err) process.exit(1);
    console.log('package.json was created at dist/package.json');
  },
);

esbuild
  .build({
    entryPoints: FILES,
    outdir: 'dist',
    splitting: true,
    format: 'esm',
    logLevel: 'info',
    sourcemap: true,
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1));
