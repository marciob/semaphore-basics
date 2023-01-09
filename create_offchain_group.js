import { Group } from "@semaphore-protocol/group";

// Default parameters: treeDepth = 20, zeroValue = BigInt(0).
const group = new Group();

//add a member (identity commitment) to a group
//identityCommitment is the member to be added
group.addMember(identityCommitment);

//add a batch of members to a group
group.addMembers([identityCommitment1, identityCommitment2]);

//remove members from a group
//pass the member index as argument
group.removeMember(0);

//update members in a group
//pass the member index as the first argument and the new value as the second argument
group.updateMember(0, 2);
