"use client";
import { ethers } from "krnl-sdk";
import contractAbi from "../contract/abi/entryPoint.json";

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY; // READ ABOVE
const wallet = new ethers.Wallet(privateKey!);

// ==========================================================

const contractAddress = process.env.NEXT_PUBLIC_ENTRY_POINT_ADDRESS as string; // YOUR CONTRACT ADDRESS
const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_KRNL);
const signer = new ethers.Wallet(privateKey!, provider);


const contract = new ethers.Contract(contractAddress, contractAbi, signer);

const abiCoder = new ethers.AbiCoder();

// const parameterForKernel337 = abiCoder.encode(["address"], [`${wallet.address}`])

const entryId = process.env.NEXT_PUBLIC_ENTRY_ID as string; // YOUR ENTRY ID
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string; // YOUR ACCESS TOKEN
const hospitalId = "44";
const functionParams = abiCoder.encode(["uint256"], [hospitalId]);
const kernelRequestData = {
   "senderAddress": wallet.address,
   "kernelPayload": {
      "1591": {
         "parameters": {
            "header": {},
            "body": {},
            "query": {},
            "path": {
               "id": hospitalId
            }
         }
      },
      "1592": {
         "parameters": {
            "header": {},
            "body": {},
            "query": {},
            "path": {
               "id": hospitalId
            }
         }
      }
   }
}
export async function executeKrnl() {
   const krnlPayload = await provider.executeKernels(entryId, accessToken, kernelRequestData, functionParams);
   return krnlPayload;
}



export async function callContractProtectedFunction(executeResult) {
   const krnlPayload = {
      auth: executeResult.auth,
      kernelResponses: executeResult.kernel_responses,
      kernelParams: executeResult.kernel_params
   };
   const tx = await contract.verify(krnlPayload, hospitalId);
   return tx.hash;
}
