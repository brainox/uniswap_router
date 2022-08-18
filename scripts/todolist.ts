import { ethers } from 'hardhat'
const hre = require("hardhat");

async function main() {
  
  const [owner, signer1, signer2] = await ethers.getSigners();

  // -> I have not deployed this code, I only write it down here
  const TodolistToken = await hre.ethers.getContractFactory("TodoList");
  const todolistToken = await TodolistToken.deploy();
  await todolistToken.deployed();

  console.log("TodoList Token contract deployed to:", todolistToken.address);
  const createTodo = await todolistToken.create("Read Book");
  const createTodoReceipt = await createTodo.wait();
  console.log("Create a new todo: ", createTodoReceipt);

  // Contract address is 0xc2F17F0E402ae11799c14ed7bD1f13d247390A76
  // Transaction hash is 0x228c0b9e39f84f56304f18c64529aca4e95952fe5eb82385069bf3b2986c1230
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});