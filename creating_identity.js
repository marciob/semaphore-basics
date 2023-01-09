import { Identity } from "@semaphore-protocol/identity";

//random identity
const { trapdoor, nullifier, commitment } = new Identity();

//deterministic identity
const identity = new Identity("secret-message");
