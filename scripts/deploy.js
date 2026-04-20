// scripts/deploy.js

import hre from "hardhat";

async function main() {
  const VitalSync = await hre.ethers.getContractFactory("VitalSync");
  const vitalSync = await VitalSync.deploy();

  await vitalSync.waitForDeployment();

  console.log(`VitalSync deployed to: ${vitalSync.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
