const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main() {
    console.log("Getting the latest block...");
    const provider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider });

    const [chain, name, version, block] = await Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.name(),
        api.rpc.system.version(),
        api.rpc.chain.getBlock(),
    ]);

    console.log(`Chain ${chain}`);
    console.log(`Node name ${name}`);
    console.log(`Node version ${version}`);
    console.log(`Block ${block}`);
}

main()
    .then(() => process.exit(0))
    .catch(console.error);
