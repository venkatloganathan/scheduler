import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import cleaner from 'rollup-plugin-cleaner';
import css from "rollup-plugin-scss";
import json from 'rollup-plugin-json';
import copy from 'rollup-plugin-copy';
import pluginPath from 'rollup-plugin-paths'

import pkg from './package.json';
import path from "path";
import fs from "fs";
import os from "os";
import readLine from 'readline';

const startTime = Date.now();

const BUILD_FORMAT = 'esm';
const MODULE_FACTORY_TEMPLATE_ENTRY_JS = 'ModuleFactory.js';
const APPEND_VERSION_JS = `__${pkg.version}.js`;

const MODULE_IMPORT_REPLACE_FOR_SINGLE_PAGED = '../../build/spapplication.js';
const IMPORT_REPLACE_FOR_MAIN_JS = './spapplication.js';

//const fileSeparator = path.sep;
const getDirectories = srcPath => fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());

const libFolderName = 'lib';
const buildFolderName = 'build';
const mainIndexJsName = `index__${pkg.version}.js`;

const srcPath = path.join(__dirname, 'src');
const modsPath = path.join(srcPath, 'modules');
const buildPath = path.join(__dirname, buildFolderName);
const modulesBuildPath = path.join(buildPath, 'modules');
const mainHtmlBuildPath = path.join(buildPath, 'index.html');
const mainJSBuildFileName = path.join(buildPath, mainIndexJsName);
//const mainCSSBuildPath = path.join(buildPath, `bundle_${pkg.version}.css`);
const mainCSSBuildPath = path.join(buildPath, 'bundle.css');

const windowLibraryName = 'desktop';
const libDir = path.join(__dirname, libFolderName);
const libFileName = 'spapplication.js';
//const libAbsoluteFileName = path.join(srcPath, libFileName);
const libAbsoluteFileName = path.join(libDir, libFileName);

const includeTerser = false;

console.log('Library path', libAbsoluteFileName);

const getCSSModulePathAndName = (moduleDirectory, moduleFactoryPath) => {
  return path.join(moduleFactoryPath, `${moduleDirectory}_${pkg.version}.css`);
};

const buildCollection = [];

const moduleJSFileCollection = [];

const distCleanerPlugin = cleaner({
  targets: [
    buildPath
  ]
});

const htmlTemplatePlugin = htmlTemplate({
  template: 'src/index.html',
  target: mainHtmlBuildPath
});

const jsonPlugin = json({
  preferConst: true
});

const babelPlugin_dontuse = babel({
  exclude: 'node_modules/**',
  babelrc: false,
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: "usage",
        targets: 'maintained node versions',
        "corejs": "3"
      }
    ]
  ]
});

const babelPlugin = babel({
  exclude: 'node_modules/**',
  babelrc: false,
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
});

const mainBuildCSSPlugin = css({
  output: mainCSSBuildPath
});

//https://github.com/rollup/rollup/blob/master/test/utils.js
const loader = function (modules) {
  modules = Object.assign(Object.create(null), modules);
  return {
    resolveId(id) {
      return id in modules ? id : null;
    },

    load(id) {
      return modules[id];
    }
  };
};

const mainBuildPlugins = [
  pluginPath({
    'desktop': libAbsoluteFileName
  }),
  distCleanerPlugin,
  copy({
    targets: [
      {src: 'lib/*', dest: 'build'}
    ]
  }),
  resolve(),
  commonjs(),
  mainBuildCSSPlugin,
  htmlTemplatePlugin,
  jsonPlugin,
  babelPlugin,
];

const modulePlugins = [
  pluginPath({
    'desktop': libAbsoluteFileName
  }),
  resolve(),
  commonjs(),
  babelPlugin,
];

const moduleLastPlugin = modulePlugins.slice();
moduleLastPlugin.unshift(
  //https://github.com/rollup/rollup/blob/master/test/hooks/index.js
  loader({}),
  {
    buildEnd(options) {
    },
    writeBundle(options) {
      finalizeBuild();
    }
  });

/*
const moduleLastPlugin = [
  pluginPath({
    'desktop': libAbsoluteFileName
  }),
  resolve(),
  commonjs(),
  babelPlugin,
];
 */

if (includeTerser) {
  mainBuildPlugins.push(terser());
  modulePlugins.push(terser());
  moduleLastPlugin.push(terser());
}

const mainBuild = {
  input: 'src/index.js',
  output: {
    globals: {
      libAbsoluteFileName: windowLibraryName
    },
    //dir: buildPath,
    file: mainJSBuildFileName,
    format: BUILD_FORMAT,
    //name: pkg.name,
    sourceMap: true,
    name: pkg.name
  },
  external: [libAbsoluteFileName],
  plugins: mainBuildPlugins
};

buildCollection.push(mainBuild);

const moduleDirectoryCollection = getDirectories(modsPath);
const moduleDirectoryCollectionLength = moduleDirectoryCollection ? moduleDirectoryCollection.length : 0;
//const moduleDirectoryCollectionLength = 0;


for (let i = 0; i < moduleDirectoryCollectionLength; i++) {
  const moduleDirectory = moduleDirectoryCollection[i];
  const moduleDirectoryPath = path.join(modsPath, moduleDirectory);
  const moduleFactoryPath = path.join(moduleDirectoryPath, MODULE_FACTORY_TEMPLATE_ENTRY_JS);
  if (fs.existsSync(moduleFactoryPath)) {
    const moduleBuildPathWithDirectory = path.join(modulesBuildPath, moduleDirectory);
    const outFile = path.join(modulesBuildPath, moduleDirectory + APPEND_VERSION_JS);
    moduleJSFileCollection.push(outFile);
    // const cssName = getCSSModulePathAndName(moduleDirectory, modulesBuildPath);
    // console.log('CSS Name is', cssName);
    // modulePlugins.push(css({
    //   output: cssName
    // }));
    buildCollection.push({
      input: moduleFactoryPath,
      output: {
        globals: {
          libAbsoluteFileName: libAbsoluteFileName
        },
        file: outFile,
        format: BUILD_FORMAT,
        sourceMap: true,
        name: `${moduleDirectory}${APPEND_VERSION_JS}`,
      },
      external: [libAbsoluteFileName],
      plugins: i === moduleDirectoryCollectionLength - 1 ? moduleLastPlugin : modulePlugins
    })
  }
}


function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (let i in files) {
    //Dont touch this
    const fileName = files[i];
    const name = dir + '/' + fileName;

    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
      console.log(name);
    }
  }
  return files_;
}

function finalizeBuild() {
  //console.log('Module Collection', moduleJSFileCollection);
  //getFiles('build');
  moduleImportFileRead(mainJSBuildFileName, IMPORT_REPLACE_FOR_MAIN_JS);
  for (let i = 0; i < moduleJSFileCollection.length; i++) {
    // fs.readFile(moduleJSFileCollection[i], "utf-8", (err, data) => {
    //   console.log(data);
    // });
    moduleImportFileRead(moduleJSFileCollection[i], MODULE_IMPORT_REPLACE_FOR_SINGLE_PAGED);
  }
  htmlImportFileRead(mainHtmlBuildPath, mainIndexJsName);
  console.log('Build Total', `${(Date.now() - startTime) / 1000} ms`);
}

function moduleImportFileRead(fileName, replaceAS) {
  let rl = readLine.createInterface({
    input: fs.createReadStream(fileName)
  });

  let line_no = 0;
  let lines = '';

// event is emitted after each line
  rl.on('line', function (line) {
    if (line_no === 0) {
      //console.log('Actual Line ', line);
      let adjustLineIndex = 5;
      let firstLineIndex = line.indexOf('from \'');
      if (firstLineIndex < 0) {
        firstLineIndex = line.indexOf('from\'');
      }
      if (firstLineIndex < 0) {
        firstLineIndex = line.indexOf('from "');
      }
      if (firstLineIndex < 0) {
        firstLineIndex = line.indexOf('from"');
        adjustLineIndex = 4;
      }
      if (firstLineIndex > 0) {
        const lastIndex = line.indexOf(';');
        line = `${line.substring(0, firstLineIndex + adjustLineIndex)}'${replaceAS}'${line.substr(lastIndex)}`;
        //console.log(line_no, fileName, adjustLineIndex, line);
      }
    }
    lines += line;
    if (!includeTerser) {
      lines += os.EOL;
    }
    line_no++;
  });

// end
  rl.on('close', function (line) {
    //console.log('Total lines : ' + line_no, lines);
    fs.writeFileSync(fileName, lines);
  });
}

function htmlImportFileRead(fileName, search) {
  let rl = readLine.createInterface({
    input: fs.createReadStream(fileName)
  });

  let lines = '';
  const searchStr = `src="${search}">`;

// event is emitted after each line
  rl.on('line', function (line) {
    let firstLineIndex = line.indexOf(searchStr);
    if (firstLineIndex > 0) {
      //console.log('Actual Line ', line);
      let adjustLineIndex = searchStr.length - 1;
      const lastIndex = line.indexOf('>');
      line = `${line.substring(0, firstLineIndex + adjustLineIndex)} type="module">${line.substr(lastIndex + 1)}`;
      //console.log(line_no, fileName, adjustLineIndex, line);
    }
    lines += line + os.EOL;
  });

// end
  rl.on('close', function (line) {
    //console.log('Total lines : ' + line_no, lines);
    fs.writeFileSync(fileName, lines);
  });
}

export default buildCollection;
