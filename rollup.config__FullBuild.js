import path from "path";
import fs from "fs";
import RollupConstants from "./Rollup.Config.Constants";

const startTime = Date.now();

//const fileSeparator = path.sep;

const includeTerser = false;

console.log('Library path', RollupConstants.libAbsoluteFileName);

const buildCollection = [];
const moduleJSFileCollection = [];

const modulePlugins = RollupConstants.modulePlugins(includeTerser);
const moduleLastPlugin = RollupConstants.moduleLastPlugins(finalizeBuild, includeTerser);

buildCollection.push(RollupConstants.mainBuild(includeTerser));

const moduleDirectoryCollection = RollupConstants.getDirectories(RollupConstants.modsPath);
const moduleDirectoryCollectionLength = moduleDirectoryCollection ? moduleDirectoryCollection.length : 0;
//const moduleDirectoryCollectionLength = 0;

for (let i = 0; i < moduleDirectoryCollectionLength; i++) {
  const moduleDirectory = moduleDirectoryCollection[i];
  const moduleDirectoryPath = path.join(RollupConstants.modsPath, moduleDirectory);
  const moduleFactoryPath = path.join(moduleDirectoryPath, RollupConstants.MODULE_FACTORY_TEMPLATE_ENTRY_JS);
  if (fs.existsSync(moduleFactoryPath)) {
    const outFile = path.join(RollupConstants.modulesBuildPath, moduleDirectory + RollupConstants.APPEND_VERSION_JS);
    moduleJSFileCollection.push(outFile);
    // const cssName = getCSSModulePathAndName(moduleDirectory, RollupConstants.modulesBuildPath);
    // console.log('CSS Name is', cssName);
    // modulePlugins.push(css({
    //   output: cssName
    // }));
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
      plugins: i === moduleDirectoryCollectionLength - 1 ? moduleLastPlugin : modulePlugins
    })
  }
}

function finalizeBuild() {
  //console.log('Module Collection', moduleJSFileCollection);
  //RollupConstants.getFiles('build');
  RollupConstants.moduleImportFileRead(RollupConstants.mainJSBuildFileName, RollupConstants.IMPORT_REPLACE_FOR_MAIN_JS, includeTerser);
  for (let i = 0; i < moduleJSFileCollection.length; i++) {
    RollupConstants.moduleImportFileRead(moduleJSFileCollection[i], RollupConstants.MODULE_IMPORT_REPLACE_FOR_SINGLE_PAGED, includeTerser);
  }
  RollupConstants.htmlImportFileRead(RollupConstants.mainHtmlBuildPath, RollupConstants.mainIndexJsName);
  console.log('Build Total', `${(Date.now() - startTime) / 1000} Seconds`);
}

export default buildCollection;
