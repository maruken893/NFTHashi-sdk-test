const hre = require('hardhat');

async function main() {
  const NativeHashi = await hre.ethers.getContractFactory(
    'NativeHashi721Example'
  );
  const nativeHashi = await NativeHashi.deploy(
    1111,
    '0x2307Ed9f152FA9b3DcDfe2385d279D8C2A9DF2b0',
    '0x3FFc03F05D1869f493c7dbf913E636C6280e0ff9',
    'test-nfthashi',
    'TST',
    1,
    5,
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
