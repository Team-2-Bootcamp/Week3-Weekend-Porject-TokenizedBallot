import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

import { MyToken__factory, TokenizedBallot__factory } from "../typechain-types";

const MINT_VALUE = ethers.parseUnits("10");

async function main() {
  // Receiving parameters
  const proposals = process.argv.slice(2);
  if (!proposals || proposals.length < 1)
    throw new Error("Proposals not provided");
  console.log(
    "~~~~~~~~~~~~~ Deploying MyToken and TokenizedBallot contracts ~~~~~~~~~~~~~"
  );
  console.log("Proposals: ");
  proposals.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });

  // Configuring the provider
  const provider = new ethers.JsonRpcProvider(
    process.env.RPC_ENDPOINT_URL ?? ""
  );

  // Configuring the wallet
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
  console.log(`Using address ${wallet.address}`);
  const Walletbalance = await provider.getBalance(wallet.address);
  const balance = Number(ethers.formatUnits(Walletbalance));
  console.log(`Wallet balance ${balance} ETH`);
  if (balance < 0.01) {
    throw new Error("Not enough ether");
  }
  // Deploying the smart contract using Typechain
  const myTokenFactory = new MyToken__factory(wallet);
  const myTokenContract = await myTokenFactory.deploy();
  console.log("Waiting for deployment...");
  await myTokenContract.waitForDeployment();
  console.log(`Contract deployed to ${myTokenContract.target}`);
  const mintTx = await myTokenContract.mint(
    "0x889B0fA4E64C7b4a8e2E2EF48Fd013bab33f3699",
    MINT_VALUE
  );
  await mintTx.wait();
  console.log(
    `Minted ${MINT_VALUE.toString()} decimal units to account ${"0x889B0fA4E64C7b4a8e2E2EF48Fd013bab33f3699"}\n`
  );
  const balanceBN = await myTokenContract.balanceOf(
    "0x889B0fA4E64C7b4a8e2E2EF48Fd013bab33f3699"
  );
  console.log(
    `Account ${"0x889B0fA4E64C7b4a8e2E2EF48Fd013bab33f3699"} has ${balanceBN.toString()} decimal units of MyToken\n`
  );
  // Calculate a suitable targetBlockNumber
  const currentBlockNumber = await provider.getBlockNumber();
  const targetBlockNumber = currentBlockNumber - 1; // Adjust the number of blocks as needed
  const TokenizedBallotFactory = new TokenizedBallot__factory(wallet);
  const tokenizedBallot = await TokenizedBallotFactory.deploy(
    proposals.map(ethers.encodeBytes32String),
    myTokenContract.target,
    targetBlockNumber
  );
  console.log("Waiting for TokenizedBallot deployment...");
  await tokenizedBallot.waitForDeployment();
  console.log(`TokenizedBallot deployed to ${tokenizedBallot.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



