import RollupConstants from "./Rollup.Config.Constants";
import fullBuild from './rollup.config__FullBuild';
import path from "path";

const startTime = Date.now();

const moduleBuild = false;
const moduleName = 'schdeuler';
const includeTerser = false;

let buildCollection;
let moduleJSFileCollection;

let modulePlugins;
let moduleLastPlugin;

if (moduleBuild) {
  buildCollection = [];
  moduleJSFileCollection = [];
  modulePlugins = RollupConstants.modulePlugins(includeTerser);
  moduleLastPlugin = RollupConstants.moduleLastPlugins(finalizeBuild, includeTerser);
  buildModule(moduleName);
} else {
  buildCollection = fullBuild;
}

function buildModule(moduleDirectory, lastPlugin = true) {
  const moduleDirectoryPath = path.join(RollupConstants.modsPath, moduleDirectory);
  const moduleFactoryPath = path.join(moduleDirectoryPath, RollupConstants.MODULE_FACTORY_TEMPLATE_ENTRY_JS);
  const outFile = path.join(RollupConstants.modulesBuildPath, moduleDirectory + RollupConstants.APPEND_VERSION_JS);
  moduleJSFileCollection.push(outFile);
  buildCollection.push({
    input: moduleFactoryPath,
    output: {
      globals: {
        libAbsoluteFileName: RollupConstants.libAbsoluteFileName
      },
      file: outFile,
      format: RollupConstants.BUILD_FORMAT,
      sourceMap: true,
      name: `${moduleDirectory}${RollupConstants.APPEND_VERSION_JS}`,
    },
    external: [RollupConstants.libAbsoluteFileName],
    plugins: lastPlugin ? moduleLastPlugin : modulePlugins
  })
}

function finalizeBuild() {
  for (let i = 0; i < moduleJSFileCollection.length; i++) {
    RollupConstants.moduleImportFileRead(moduleJSFileCollection[i], RollupConstants.MODULE_IMPORT_REPLACE_FOR_SINGLE_PAGED, includeTerser);
  }
  console.log('Build Total', `${(Date.now() - startTime) / 1000} Seconds`);
}

export default buildCollection;
