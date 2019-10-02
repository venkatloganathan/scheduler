import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import cleaner from 'rollup-plugin-cleaner';
import css from "rollup-plugin-scss";
import json from 'rollup-plugin-json';
import copy from 'rollup-plugin-copy';
import pluginPath from 'rollup-plugin-paths'
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';
import path from "path";
import fs from "fs";
import readLine from 'readline';
import os from "os";

const getCSSModulePathAndName = (moduleDirectory, moduleFactoryPath) => {
  return path.join(moduleFactoryPath, `${moduleDirectory}_${pkg.version}.css`);
};

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

class RollupConstants {

}

RollupConstants.MODULE_FACTORY_TEMPLATE_ENTRY_JS = 'ModuleFactory.js';
RollupConstants.MODULE_IMPORT_REPLACE_FOR_SINGLE_PAGED = '../../build/spapplication.js';
RollupConstants.IMPORT_REPLACE_FOR_MAIN_JS = './spapplication.js';

RollupConstants.windowLibraryName = 'desktop';
RollupConstants.libFileName = 'spapplication.js';

RollupConstants.MODULE_FACTORY_TEMPLATE_ENTRY_JS = 'ModuleFactory.js';
RollupConstants.APPEND_VERSION_JS = `__${pkg.version}.js`;

RollupConstants.buildFolderName = 'build';
RollupConstants.libFolderName = 'lib';

RollupConstants.mainIndexJsName = `index__${pkg.version}.js`;

RollupConstants.SOURCE_INDEX_ENTRY = 'src/index.js';
RollupConstants.SOURCE_HTML_TEMPLATE = '\src/index.html';

RollupConstants.BUILD_FORMAT = 'esm';

RollupConstants.srcPath = path.join(__dirname, 'src');
RollupConstants.modsPath = path.join(RollupConstants.srcPath, 'modules');
RollupConstants.buildPath = path.join(__dirname, RollupConstants.buildFolderName);

RollupConstants.mainHtmlBuildPath = path.join(RollupConstants.buildPath, 'index.html');
RollupConstants.modulesBuildPath = path.join(RollupConstants.buildPath, 'modules');
RollupConstants.mainJSBuildFileName = path.join(RollupConstants.buildPath, RollupConstants.mainIndexJsName);
//const mainCSSBuildPath = path.join(buildPath, `bundle_${pkg.version}.css`);
RollupConstants.mainCSSBuildPath = path.join(RollupConstants.buildPath, 'bundle.css');

RollupConstants.libDir = path.join(__dirname, RollupConstants.libFolderName);
//const libAbsoluteFileName = path.join(RollupConstants.srcPath, RollupConstants.libFileName);
RollupConstants.libAbsoluteFileName = path.join(RollupConstants.libDir, RollupConstants.libFileName);

RollupConstants.distCleanerPlugin = cleaner({
  targets: [
    RollupConstants.buildPath
  ]
});

RollupConstants.htmlTemplatePlugin = htmlTemplate({
  template: RollupConstants.SOURCE_HTML_TEMPLATE,
  target: RollupConstants.mainHtmlBuildPath
});

RollupConstants.jsonPlugin = json({
  preferConst: true
});

RollupConstants.babelPlugin_dontuse = babel({
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

RollupConstants.babelPlugin = babel({
  exclude: 'node_modules/**',
  babelrc: false,
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
});

RollupConstants.mainBuildCSSPlugin = css({
  output: RollupConstants.mainCSSBuildPath
});

RollupConstants.mainBuildPlugins = [
  pluginPath({
    'desktop': RollupConstants.libAbsoluteFileName
  }),
  RollupConstants.distCleanerPlugin,
  copy({
    targets: [
      {src: `${RollupConstants.libFolderName}/*`, dest: RollupConstants.buildFolderName}
    ]
  }),
  resolve(),
  commonjs(),
  RollupConstants.mainBuildCSSPlugin,
  RollupConstants.htmlTemplatePlugin,
  RollupConstants.jsonPlugin,
  RollupConstants.babelPlugin,
];

RollupConstants.MainBareBoneBuildPlugins = [
  pluginPath({
    'desktop': RollupConstants.libAbsoluteFileName
  }),
  resolve(),
  commonjs(),
  RollupConstants.mainBuildCSSPlugin,
  RollupConstants.jsonPlugin,
  RollupConstants.babelPlugin,
];

//https://github.com/rollup/rollup/blob/master/test/utils.js
RollupConstants.loader = function (modules) {
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

RollupConstants.modulePlugins = function (includeTerser) {
  const plugin = [
    pluginPath({
      'desktop': RollupConstants.libAbsoluteFileName
    }),
    resolve(),
    commonjs(),
    RollupConstants.babelPlugin,
  ];
  if (includeTerser) {
    plugin.push(terser());
  }
  return plugin;
};

RollupConstants.moduleLastPlugins = function (finalizeBuild, includeTerser) {
  const moduleLastPlugin = RollupConstants.modulePlugins(false).slice();
  moduleLastPlugin.unshift(
    //https://github.com/rollup/rollup/blob/master/test/hooks/index.js
    RollupConstants.loader({}),
    {
      buildEnd(options) {
      },
      writeBundle(options) {
        finalizeBuild();
      }
    });
  if (includeTerser) {
    moduleLastPlugin.push(terser());
  }
  return moduleLastPlugin;
};

RollupConstants.mainBuild = function (includeTerser) {
  if (includeTerser) {
    RollupConstants.mainBuildPlugins.push(terser());
  }
  return {
    input: RollupConstants.SOURCE_INDEX_ENTRY,
    output: {
      globals: {
        libAbsoluteFileName: RollupConstants.windowLibraryName
      },
      //dir: buildPath,
      file: RollupConstants.mainJSBuildFileName,
      format: RollupConstants.BUILD_FORMAT,
      //name: pkg.name,
      sourceMap: true,
      name: pkg.name
    },
    external: [RollupConstants.libAbsoluteFileName],
    plugins: RollupConstants.mainBuildPlugins
  };
};

RollupConstants.mainBareBoneBuild = function (includeTerser) {
  if (includeTerser) {
    RollupConstants.mainBuildPlugins.push(terser());
  }
  return {
    input: RollupConstants.SOURCE_INDEX_ENTRY,
    output: {
      globals: {
        libAbsoluteFileName: RollupConstants.windowLibraryName
      },
      //dir: buildPath,
      file: RollupConstants.mainJSBuildFileName,
      format: RollupConstants.BUILD_FORMAT,
      //name: pkg.name,
      sourceMap: true,
      name: pkg.name
    },
    external: [RollupConstants.libAbsoluteFileName],
    plugins: RollupConstants.MainBareBoneBuildPlugins
  };
};


RollupConstants.getDirectories = srcPath => fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());

RollupConstants.getFiles = (dir, files_) => {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (let i in files) {
    //Dont touch this
    const fileName = files[i];
    const name = dir + '/' + fileName;

    if (fs.statSync(name).isDirectory()) {
      RollupConstants.getFiles(name, files_);
    } else {
      files_.push(name);
      console.log(name);
    }
  }
  return files_;
};

RollupConstants.moduleImportFileRead = function (fileName, replaceAS, includeTerser) {
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
};

RollupConstants.htmlImportFileRead = function (fileName, search) {
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
};

export default RollupConstants;