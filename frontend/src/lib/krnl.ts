"use client";
import { ethers } from "krnl-sdk";
import contractAbi from "../contract/abi/entryPoint.json";

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY; // READ ABOVE
const wallet = new ethers.Wallet(privateKey!);

// ==========================================================

const contractAddress = process.env.NEXT_PUBLIC_ENTRY_POINT_ADDRESS as string; // YOUR CONTRACT ADDRESS
const provider = new ethers.JsonRpcProvider("https://v0-0-3-rpc.node.lat");
const signer = new ethers.Wallet(privateKey!, provider);


const contractprovider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
const signerprovider = new ethers.Wallet(privateKey!, contractprovider);
const contract = new ethers.Contract(contractAddress, contractAbi, signerprovider);

const abiCoder = new ethers.AbiCoder();


const entryId = process.env.NEXT_PUBLIC_ENTRY_ID as string; // YOUR ENTRY ID
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string; // YOUR ACCESS TOKEN

export async function executeKrnl(hospitalId: number) {
  const functionParams = abiCoder.encode(["uint256"], [hospitalId]);
  const cost = await provider.getKernelsCost(entryId);
  console.log("Cost of kernels would be: ", cost);
  const kernelRequestData = {
    "senderAddress": "0xf0830060f836B8d54bF02049E5905F619487989e",
    "kernelPayload": {
      "1599": {
        "parameters": {
          "header": {},
          "body": {},
          "query": {},
          "path": {
            "id": "44"
          }
        }
      }
    }
  }
  const krnlPayload = await provider.executeKernels(entryId, accessToken, kernelRequestData, functionParams);
  console.log("Krnl payload: ", krnlPayload);
  return krnlPayload;
}


export async function callContractProtectedFunction(executeResult, hospitalId: number) {
  const krnlPayload = {
    auth: executeResult.auth,
    kernelResponses: executeResult.kernel_responses,
    kernelParams: executeResult.kernel_params
  };
  const tx = await contract.verify(krnlPayload, hospitalId);
  return {
    ...krnlPayload,
    tx: tx.hash
  };
  //  return tx.hash;
}
