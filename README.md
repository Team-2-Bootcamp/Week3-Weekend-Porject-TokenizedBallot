# Week3-Weekend-Porject-TokenizedBallot-

This document forms part of the week 3 weekend project for the Solidity Bootcamp.

Members from Team 2 who worked on this project: Ignas Apšega, Lyle Davids, Wendwossen Dufera, and Cameron Mcewan

For week 3, the focus is on completing the contracts collaboratively and developing and running scripts for “TokenizedBallot.sol” within the group. The key functionalities include giving voting tokens, delegating voting power, casting votes, checking vote power, and querying results.

## **Feedbacks**

### **Cameron Mcewan**

Deployed MyToken.sol and TokenizedBallot.sol to Sepolia testnet, with the following contract addresses:
- MyToken.sol: 0xaE594A2EfFF02A826aBf0F775386E550Af731A42
- TokenizedBallot.sol: 0x5f42Bc584040045b23C5b7b1726904fD741e0A61 (with two proposals: "Proposal1 and "Proposal2")

#### giveVotingTokens

Gave 5 voting tokens to 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF TX Hash: 0xc0d51cdad64540eaf942ac2937461a6593fda41b76feed480ca3b46c19bdf27b
Gave 1 voting token to 0x190EFd7Def4010138509A2AAFD1d1357Fd235D21 TX Hash: 0xa80d78589efd24675df14a6c96d1aad8804fd35074b67028b40c14a93d4e92f7
Gave 2 voting tokens to 0x939E0985CC8135E527e2Ab6FC3DDD6201C2196F1 TX Hash: 0x0809bc1f911e9b23c512649b9f43e1493d107ebe5b89c358da966735bb0ae490

#### delegateVotingPower 

Delegated voting power to account 0x190EFd7Def4010138509A2AAFD1d1357Fd235D21 TX Hash: 0xa543c27185dcf5a5ea5c9541ed86465d541706b097f5ae6afb7752c395c34b0a

Logs:
```
Wallet {
  provider: JsonRpcProvider {},
  address: '0x190EFd7Def4010138509A2AAFD1d1357Fd235D21'
}
Using address 0x190EFd7Def4010138509A2AAFD1d1357Fd235D21
Wallet balance 0.49993877299926526 ETH
Waiting for delegating to the address 0x190EFd7Def4010138509A2AAFD1d1357Fd235D21....
Account 0x190EFd7Def4010138509A2AAFD1d1357Fd235D21 has 1000000000000000000 units of voting power after delegating
```
#### castVote

Tried to cast a vote for index 0 (proposal1) using address 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF, but get error saying the voting power of this address is 0
```Error: execution reverted: "TokenizedBallot: trying to vote more than allowed"```

#### checkVotingPower

Using this script to check the voting power of this address:
```
Using address 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF
Wallet balance 0.48619471579803536 ETH
Voting power of an account with address 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF is 0.
```


### **Ignas Apšega**

**MyTokenDeployment**
- Deployment tx: [TX Hash](https://sepolia.etherscan.io/tx/0xe65d670b34639152e8ea8e9d6ba94cf12c4f9bae5f53ffafa8b698fa2d9b1aee)
- Deployer wallet: 0x0F8215Ee72639e3ebb244e14D2F7A582060f68De

**TokenizedBallotDeployment**
- Deployment tx: [TX Hash](https://sepolia.etherscan.io/tx/0x8a1a109a1297375704417661c53fcf29dad50f9937d05c64df7b0c5c8a288613)
- Deployer wallet: 0x0F8215Ee72639e3ebb244e14D2F7A582060f68De
- Proposals: proposal1, proposal2, proposal3

**giveVotingTokens**
- Gave 2 voting tokens to 0x7952F1CA05d414E9A193C4516A8E0b40fB4A57c9 [TX Hash](https://sepolia.etherscan.io/tx/0x34742403cc9a1ffeb0ee5e8d02b87671cc0ee13d8736e3738cc934378fa0e1e6)
- Gave 4 voting tokens to 0x6545eA8a66d44754f37CA0cC011223F59850e2DD [TX Hash](https://sepolia.etherscan.io/tx/0xfbaf68cb784e85b52487053809ef9d27fe1138da472fb0224328415057e044f2)
- Gave another 4 voting tokens to 0x6545eA8a66d44754f37CA0cC011223F59850e2DD [TX Hash](https://sepolia.etherscan.io/tx/0x1ad17ec7b685e1170835b9beb933710be7b333dc4ddf0854ca926a1524671da2)

**delegateVotingPower**
Delegated voting power to myself: [TX Hash](https://sepolia.etherscan.io/tx/0xfc4a557a6463dd100b995c13197701fa4f1f2669a598051a105568f2cabf040b)

**castVote**
- Casted a vote for index 0 (proposal1): [TX Hash](https://sepolia.etherscan.io/tx/0x8a4d235746af7f649c95f637a2208b564af88764295630d8bbfd2803fb27f5dd)

**checkVotingPower**
- Returned:
- Using address 0x0F8215Ee72639e3ebb244e14D2F7A582060f68De
- Wallet balance 0.4819303546282501 ETH
- Voting power of an account with address 0x0F8215Ee72639e3ebb244e14D2F7A582060f68De is 0.

**queryResults**
- Returned:
- Using wallet address 0x0F8215Ee72639e3ebb244e14D2F7A582060f68De
- Wallet balance 0.4819303546282501 ETH
- Winning Proposal Index: 0
- Winner Name: proposal1

### **Lyle Davids**

##### Deployments
Token Deployment deployed to Sepolia - [TX Hash](https://sepolia.etherscan.io/tx/0x97f115351d023b771e9a46513cdc2251d23744b21a58029b19e42cd189c8784b)


Tokenised Ballot deployed to Sepolia - [TX Hash](https://sepolia.etherscan.io/tx/0x4b5d8d562de4258223668303e7219f1138375fba0645c229aa3f0537142867a3) , with proposal args


Proposals: 
lyle
cam
wendwossen
ignas


##### Scripts
* **giveVotingTokens**: 
 Gave tokens to 0xEd921BA5cc5EEB8971cD8929254627a4FDAF84C1, [TX Hash](https://sepolia.etherscan.io/tx/0x473f1e182f1bc1368eed365ec9a1a32802b3aa24bea5f19c01cf4b0ac18c3a9e)
Gave tokens to 0x9C497FD2F7B5893843f68D90C890fB9d1bcE9fb9, [TX Hash](https://sepolia.etherscan.io/tx/0xfdb574fdfcfb0ff8417ce4d7abb9cf7eda04c7aac28255f0d015afb13fae86a0)

* **delegateVotingPower**: Self-delegated, [TX Hash](https://sepolia.etherscan.io/tx/0xcebe671761fd8e94f653b6cac361dce2181196fc4c4d2141dea3d01cfeb365d2)
* **checkVotingPower**:
Returned
Voting power of an account with address 0xEd921BA5cc5EEB8971cD8929254627a4FDAF84C1 is 0.
* **castVote**: Tried for vote for proposal 3(Index 2) which was wendwossen. Although, I didn't vote previously, transaction reverted with Error: execution reverted: "TokenizedBallot: trying to vote more than allowed" (action="estimateGas"......
* **queryResult** 
Returned
Winning Proposal Index: 0
Winner Name: lyle

### **Wendwossen Dufera**
i've completed the TokenizedBallot.sol by implementing the votePower function correctly. I've also added the necessary check that have to be taken in vote function. Then i've deployed both MyToken.sol and TokenizedBallot.sol. Below is the transaction hash for both:
- [MyToken Contract Deployment](https://sepolia.etherscan.io/tx/0xac4ba7a1df03178f44266604430d2b5c2c57da3713533bda155034636518693f)
- [TokenizedBallot Contract Deployment](https://sepolia.etherscan.io/tx/0xe8e4bc0e2ac54edda9c56c759bf27b62ca95d8d553c04054962d86c2048fc422)

## **Script related tasks**
After successfully compliting and deploying the smart contracts, i've written 5 scripts to interact with the deployed smart contracts. below the details of my interaction with the smart contracts.

**MyTokenDeployment**
I've written a script to deploy MyToken smart contract. Below is the transaction hash for the execution of the script:
- [MyToken Contract Deployment](https://sepolia.etherscan.io/tx/0xac4ba7a1df03178f44266604430d2b5c2c57da3713533bda155034636518693f)

**TokenizedBallotDeployment**
I've written a script to deploy TokenizedBallot smart contract. It receives the target block number which enables it to prevent users from getting additional voting power once the voting is started which prevents richies from ruling over others wish. Below is the transaction hash for the execution of the script:
- [TokenizedBallot Contract Deployment](https://sepolia.etherscan.io/tx/0xe8e4bc0e2ac54edda9c56c759bf27b62ca95d8d553c04054962d86c2048fc422)

**giveVotingTokens**
I've written a script for giving MyToken token which is both an ERC20 and ERC20Votes token for other users or accounts which are my other accounts. Below are the transaction hashes for giveVotingTokens.ts script execution:
- [Minted an amount of tokens for account 0x3d0b766D595a89F6b1C5BDB7FA15Ec5611D25038](https://sepolia.etherscan.io/tx/0xbd69c9279a4db3b2eac1e9f6417a8b7e47d2c5a7cb47f15b415928796d0bdddd)
- [Minted an amount of tokens for account 0x461384e9b9ce4d218A8ca57765C37cfbB79bc546](https://sepolia.etherscan.io/tx/0x136387676681629952a7b03a454538b2dd4f25e15830852ca6bfcada446583b5)

**delegateVotingPower**
I've written a script both for both self delegating and delegating voting power for others. Below are transaction hashes for interactions i had with the funtion:
- [self delegated to get voting power](https://sepolia.etherscan.io/tx/0xbc298e0710fc2cf7db2ee70a779c2c734df9c97b5e2d3e5f8245cbc0b0522d15)
- [delegated voting power for address 0x889B0fA4E64C7b4a8e2E2EF48Fd013bab33f3699 from address 0x3d0b766D595a89F6b1C5BDB7FA15Ec5611D25038](https://sepolia.etherscan.io/tx/0x5651ba8b8222bcbcf095dfec875800720c3ab8e856aa165e38f0f06975689ba4)
- [delegated voting power for address 0x889B0fA4E64C7b4a8e2E2EF48Fd013bab33f3699 from address 0x461384e9b9ce4d218A8ca57765C37cfbB79bc546](https://sepolia.etherscan.io/tx/0x5fdd94368a3db84ab6bf43c5d97620db59e058d361227c8bf8e8e05ad5718f70)

**castVote**
I've written a script for casting vote that cast a voting power specified for the specified proposal. Below are transaction hashes for interactions i had with the function:
- [casted a vote from address 0x889B0fA4E64C7b4a8e2E2EF48Fd013bab33f3699 to proposal at index 1](https://sepolia.etherscan.io/tx/0xcbc90a4752ad0a6d602ba93e39fbf58dabc59fc723afa59d28523a7721f05ea8)

**checkVotingPower**
I've written a script for retrieving the amount of voting power a user left with. I was able to interact with the function and got my remaining voting power.

**queryResults**
I've written a script for retrieving the winning proposal name. I was able to interact with the function and received the winning proposal by the time i maed the request.

