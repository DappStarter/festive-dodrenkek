require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note museum uncle include clock onion skull'; 
let testAccounts = [
"0x2660068d4042b66168ac2efd7ed666194e963564bc771151666b5a4e1b332757",
"0x2e1c15d55d0f63de2264e5b13e32361686cd0c9d54c46ab1c48c7db3cc5f723c",
"0x0bfa517db9a5a4a6ddf4666e8e613aefda7b683762324300ee4c13efc13f6743",
"0x7ac80e7f128432f2fb29873d89d74af6a925357713586edc7f52688e03c13044",
"0x1322d1da3649bce2507f77aa0757463b08a8525f6b1d36f0dee9bbb3c66bb6e4",
"0x2e3f2bb60fe97575f9fd8fada83f6d428916b921b884ee8fa35180f4a6a58251",
"0x9d6119ed753b09485753a7f06cd91ba478901bcac81006b9aac6bef5fcfd5e84",
"0xc00b196fecd1c3bfb26a9d4bba94ccf038b9b6e41a9dbe398fcb672437d9426d",
"0xec5c8ce761d0c72a941797ed7ee72f4966c440279be84191b51ee16eb33f08fd",
"0x282710ad52d40ba463fd2279c17da901b019161625455e0bf6076b1e9d9f3d3e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
