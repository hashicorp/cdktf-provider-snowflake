const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  terraformProvider: "chanzuckerberg/snowflake@ ~> 0.25",
  cdktfVersion: "^0.11.0",
  constructsVersion: "^10.0.0",
  minNodeVersion: "14.17.0",
  jsiiVersion: "^1.53.0",
});

project.synth();
