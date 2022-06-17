# solana-program-sample

Sample solana program written in rust, expected to run on devnet.

## Setup

Rename wallet.json.sample to wallet.json and replace its content with your own wallet json file.
This wallet will be used to deploy and invoke program.

And install typescript dependencies.

```shell-session
yarn
```

## build

```
cargo build-bpf
```

## deploy

```
solana program deploy ./target/deploy/solana_program_sample.so
```

## run on-chain program

```
yarn invoke
```
