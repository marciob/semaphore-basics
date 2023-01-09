import { verifyProof } from "@semaphore-protocol/proof";

const verificationKey = JSON.parse(
  fs.readFileSync("./semaphore.json", "utf-8")
);

await verifyProof(verificationKey, fullProof); // returns true or false.
