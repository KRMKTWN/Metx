import { XummSdk } from 'xumm-sdk'

const Sdk = new XummSdk(
  'TON_API_KEY',
  'TON_API_SECRET'
)

const main = async () => {
  const appInfo = await Sdk.ping()
  console.log('Connecté à Xumm :', appInfo)
}

main()
