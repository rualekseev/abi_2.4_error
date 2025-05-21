# abi_2.4_error

copy .env from .env.template and fill

run 

```
npm install
```

patch 

```
node_modules/everscale-standalone-client/client/index.js
```

add
```
console.log(signedMessage);
```

to 1096
```
    // Send and wait with several retries
    let timeout = properties.message.timeout;
    for (let retry = 0; retry < properties.message.retryCount; ++retry) {
        const signedMessage = await makeSignedMessage(timeout);
        console.log(signedMessage);

        const transaction = await subscriptionController.sendMessage(repackedRecipient, signedMessage);
        if (transaction == null) {
            timeout *= properties.message.timeoutGrowFactor;
            continue;
        }
        return handleTransaction(transaction);
    }
```
run 

```
npx locklift run -s scripts/1-deploy-sample.ts -n tycho_devnet
```

Copy external message and fill 
- rpc
- dstAddress
- cellBase64
in  ``scripts/2-sandbox.ts``

run 

```
npx ts-node scripts/2-sandbox.ts
```