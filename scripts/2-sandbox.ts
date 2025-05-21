import {
  TychoExecutor,
  TychoRemoteBlockchainStorage,
} from "@tychosdk/emulator";
import { Blockchain } from "@ton/sandbox";
import { Address, Cell, loadMessage, loadTransaction } from "@ton/core";


const rpc = "http://127.0.0.1/rpc";
const dstAddressStr = "0:0000000000000000000000000000000000000000000000000000000000000000";
const cellBase64 = "";

(async () => {
  const blockchain = await Blockchain.create({
    executor: await TychoExecutor.create({}),
    config: TychoExecutor.defaultConfig,
    storage: new TychoRemoteBlockchainStorage({
      url: rpc,
    }),
  });

  const address = Address.parse(
    dstAddressStr
  );

  await blockchain.setVerbosityForAddress(address, {
    vmLogs: "vm_logs_verbose",
    
  });


  const inMessage = loadMessage(Cell.fromBase64(cellBase64).asSlice());

  const account = await blockchain.getContract(address);

  const newTx = await account.receiveMessage(inMessage, {
    now: 0,
  });

  console.log(newTx.description);
  console.log(newTx.vmLogs);
})().catch(console.error);
