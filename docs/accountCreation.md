# Pay For Account Creation 
It is possible to pay for the account creation as well, but in this case you need to do a simple edit in the program

### 1. Take for example this simple program declaration, all you need to do is to change this few lines:
From this:
``` rust
#[derive(Accounts)]
pub struct SendTweet<'info> {
    #[account(init, payer = author, space = Tweet::LEN)]
    pub tweet: Account<'info, Tweet>,
    #[account(mut)]
    pub author: Signer<'info>,
    #[account(address = system_program::ID)]
    pub system_program: AccountInfo<'info>,
}
```
To this:
``` rust
#[derive(Accounts)]
pub struct SendTweet<'info> {
    #[account(init, payer = feePayer, space = Tweet::LEN)]
    pub tweet: Account<'info, Tweet>,
    #[account(mut)]
    pub author: Signer<'info>,

    #[account(mut)]
    pub feePayer: Signer<'info>,

    #[account(address = system_program::ID)]
    pub system_program: AccountInfo<'info>,
}
```

### 2. Then in your frontend import Cowsigner

``` ts
import cowsigner from "cowsigner";
```

### 3. Edit the method:
``` ts
const contractId = '*********** YOUR_CONTRACT_ID ***********'
let appWallet = new PublicKey('*********** YOUR_PUBLIC_KEY ***********');

let method = await program.value.methods.sendTweet(topic, content, {
    accounts: {
        author: wallet.value.publicKey,
        feePayer: appWallet,
        tweet: tweet.publicKey,
        systemProgram: web3.SystemProgram.programId,
    },
    signers: [tweet]
});

const results = await cowsigner.sendInstruction(method, appWallet, contractId)
```