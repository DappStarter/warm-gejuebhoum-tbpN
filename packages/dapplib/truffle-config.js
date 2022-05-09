require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food iron release stereo proof half knife forget gauge'; 
let testAccounts = [
"0x604af1f525c8fec825f5460698d58908d7cf92e544ce27e762d52ce8e85d613b",
"0xe17cee2800d37cd2ec62ce73709044fc134856f73f09ce998ebb0eab266368b0",
"0xeae026bc680abbaea461467a3c22f7889ddc29d5183bee205bce15748f1371c6",
"0xfc48138d79487aa343c7941f3471c34d2cacf1182bb72646a92f1a48d4d09b43",
"0xbac9b7fecfd17c633f5b94e3202d161f83976d0992a18bacf61252f7708ab68e",
"0x664840cd8046efb44f7e51e3e93401ab85231e94afb861be51f9244228f3033d",
"0xf94548c8665e27f086f54213a41fa8489f132795f6e11d50060cf9c54609b1b5",
"0xf6b5381423cf23a8136e843c1bd239021f8563861c5a3da05aa9c0e6867cd007",
"0x28cf26642f502898eaac321de972c49a1a07eb18a963771aa7edf7542d629deb",
"0x5092e465e0ea35424eccc8b72f9806e03009f6e4760d5adaa9762eceddeff88e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

