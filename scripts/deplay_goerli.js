const hre = require('hardhat');

async function main() {
  const NativeHashi = await hre.ethers.getContractFactory(
    'NativeHashi721Example'
  );
  const nativeHashi = await NativeHashi.deploy(
    3331,
    '0xEC3A723DE47a644b901DC269829bf8718F175EBF',
    '0x3FFc03F05D1869f493c7dbf913E636C6280e0ff9',
    'test-nfthashi',
    'TST',
    1001,
    1005,
    'ipfs://QmbPHbr2izUT1EEgdkbANsrMugTidj6agTs4V1phVVouwL/'
  );

  await nativeHashi.deployed();

  console.log('NativeHashi deployed to:', nativeHashi.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
