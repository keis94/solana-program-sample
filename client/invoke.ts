import {
  clusterApiUrl,
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import wallet from "../wallet.json";

const invokeSample = async () => {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const instruction = new TransactionInstruction({
    keys: [],
    programId: new PublicKey("JCPbwdUAbpG91GXQjb198LLSxmoursfWTBzKg3kc1Waj"),
  });
  const transaction = new Transaction().add(instruction);
  const payer = Keypair.fromSecretKey(new Uint8Array(wallet));

  const res = await sendAndConfirmTransaction(connection, transaction, [payer]);
  console.dir(`Transaction: ${res}`);
};

(async () => await invokeSample())();
