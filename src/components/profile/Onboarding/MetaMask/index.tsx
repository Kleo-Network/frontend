import React, { useContext, useEffect, useState } from 'react'
import { ReactComponent as Kleo } from '../../../../assets/images/kleoWithBg.svg'
import { ReactComponent as MetaMaskLogo } from '../../../../assets/images/metamask.svg'
import { ReactComponent as Arrow } from '../../../../assets/images/arrow.svg'
import { ReactComponent as Tick } from '../../../../assets/images/check.svg'
import { ReactComponent as Welcome } from '../../../../assets/images/welcome.svg'
import Accordion from '../../../common/Accordion'
import useFetch from '../../../common/hooks/useFetch'
import Alert from '../../../common/Alerts'
import { ReactComponent as AlertIcon } from '../../../../assets/images/alert.svg'
import { ethers, BrowserProvider } from 'ethers'
import { useAuthContext } from '../../../common/contexts/UserContext'

interface OnboardingProps {
  handleLogin: (userAddress: string) => void
}

enum PluginState {
  CHECKING,
  NOT_INSTALLED,
  INSTALLED
}

const AUTH_API = 'auth/create_jwt_authentication'
const INVITE_CODE_API = 'auth/check_invite_code'
export default function Onboarding({ handleLogin }: OnboardingProps) {
  const context = useAuthContext()
  const [infoExpanded, setInfoExpanded] = useState(false)
  const [pluginState, setPluginState] = useState(PluginState.CHECKING)
  const [currentStep, setCurrentStep] = useState(1)
  const [code, setCode] = useState('')
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [provider, setProvider] = useState<any>(null)
  const [signer, setSigner] = useState<any>(null)
  const [account, setAccount] = useState<string | null>(null)

  const [message, setMessage] = useState<string>('Sign in to Kleo')
  const [signedData, setSignedData] = useState<{
    signature: Uint8Array
    publicKey: string
  }>()

  const { fetchData, error: loginError, data: loginData } = useFetch<any>()
  const { fetchData: fetchInviteCheck } = useFetch<any>()
  const [login, setLogin] = useState(false)

  const connectMetaMask = async () => {
    if ((window as any).ethereum) {
      try {
        const newProvider = new BrowserProvider((window as any).ethereum)

        setProvider(newProvider)
        const newSigner = await newProvider.getSigner()
        setSigner(newSigner)
        const accounts = await newProvider.send('eth_requestAccounts', [])
        setAccount(accounts[0])
        setIsWalletConnected(true)
      } catch (error) {
        console.error('Could not get accounts', error)
      }
    } else {
      console.error('Please install MetaMask!')
    }
  }

  const inviteCodeNextStep = async () => {
    const urlWithParams = `${INVITE_CODE_API}?code=${code}`
    fetchInviteCheck(urlWithParams, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      onSuccessfulFetch(data) {
        if (data.toString() === 'OK') setCurrentStep(2)
      }
    })
  }
  const handleSign = async () => {
    if (message && signer) {
      console.log(signer)
      const signature = await signer.signMessage(message)
      console.log('signature', signature)
      if (account)
        setSignedData({
          signature: signature,
          publicKey: account
        })

      fetchData(AUTH_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          signature: signature,
          publicAddress: account,
          chain: 'ethereum'
        }),
        onSuccessfulFetch(data) {
          sessionStorage.setItem('token', data.accessToken)
          //;(window as any).kleoUploadHistory(account)
          setLogin(true)
        }
      })
    }
  }

  useEffect(() => {
    if (pluginState === PluginState.CHECKING) {
      setTimeout(() => {
        if (
          (window as any).kleoConnect &&
          (window as any).kleoConnect.extension
        ) {
          setPluginState(PluginState.INSTALLED)
        } else {
          setPluginState(PluginState.NOT_INSTALLED)
        }
      }, 2000)
    }
  }, [])

  useEffect(() => {
    if (
      pluginState === PluginState.INSTALLED &&
      signedData &&
      signedData.publicKey &&
      login
    ) {
      handleLogin(account || '')
      const user = context!.user
      context?.setUser({
        ...user,
        address: account || ''
      })
    }
  }, [pluginState, signedData, login])

  return (
    <div className="flex flex-col items-start">
      {currentStep == 1 && (
        <div className="flex flex-col items-center justify-center self-stretch">
          <div className="flex flex-col gap-2 p-6 text-lg w-full font-medium text-gray-900 border-b border-gray-200">
            Invite Only! Did you bring out the coupon?.
            <span className="text-gray-400 text-sm font-regular">STEP 1/2</span>
          </div>
          <div className="flex items-center justify-center self-stretch">
            <Welcome className="w-96 h-96 -mt-16 -mb-16 ml-16" />
          </div>
          <div className="flex flex-col gap-3 self-stretch px-6 pb-8 justify-center items-center">
            <input
              style={{ float: 'right', marginTop: '5px' }}
              onChange={(e) => setCode(e.target.value)}
              type="text"
              className="w-full bg-white rounded-lg border border-gray-300 px-6 py-2 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
              placeholder="Enter your Invite Code here"
            />

            <button
              className="px-4 py-3 bg-primary text-white rounded-lg shadow"
              onClick={() => inviteCodeNextStep()}
            >
              Invite Code
            </button>
          </div>
        </div>
      )}
      {currentStep == 2 && (
        <>
          <div className="p-6 text-lg w-full font-medium text-gray-900 border-b border-gray-200">
            Connect these to get started! <br />
            <span className="text-gray-400 text-sm font-regular">STEP 2/2</span>
          </div>
          <div className="flex flex-row items-start gap-4 p-6">
            <div className="relative">
              {pluginState === PluginState.INSTALLED && (
                <div className="absolute bottom-0 left-auto right-0 top-auto z-10 rounded-full bg-green-600 p-1 border-4 border-white ">
                  <Tick className="w-3 h-3 fill-white" />
                </div>
              )}

              <Kleo className="w-16 h-16" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-gray-900 text-base font-medium">
                Install Kleo Plugin
              </span>
              <span className="text-gray-400 text-sm font-regular">
                Unlock insights, personalize your Browsing and safeguard your
                privacy
              </span>
              {pluginState === PluginState.CHECKING && (
                <div
                  className="inline-block m-1 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              )}
              {pluginState === PluginState.NOT_INSTALLED && (
                <div className="flex flex-row justify-start items-center mt-4 text-sm font-medium">
                  <button
                    className="px-4 py-3 bg-primary text-white rounded-lg shadow mr-1"
                    onClick={() => setPluginState(PluginState.INSTALLED)}
                  >
                    Install Plugin
                  </button>
                  <button className="px-4 py-3 ml-1 rounded-lg shadow border border-gray-200 text-gray-700">
                    I have already installed
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row items-start gap-4 p-6">
            <div className="relative">
              {isWalletConnected && (
                <div className="absolute bottom-0 left-auto right-0 top-auto z-10 rounded-full bg-green-600 p-1 border-4 border-white">
                  <Tick className="w-3 h-3 fill-white" />
                </div>
              )}
              <MetaMaskLogo className="w-16 h-16 fill-[#FFE6D5]" />
            </div>
            {!isWalletConnected ? (
              <div className="flex flex-col items-start justify-center">
                <span className="text-gray-900 text-base font-medium">
                  Connect Metamask Wallet
                </span>
                <span className="text-gray-400 text-sm font-regular">
                  Connect with your Phantom wallet to get started
                </span>
                <div className="flex flex-row justify-start items-center mt-4 text-sm font-medium">
                  <button
                    className="px-4 py-3 bg-primary text-white rounded-lg shadow mr-1"
                    onClick={connectMetaMask}
                  >
                    Connect
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter message to sign"
                  className="p-2 border rounded mb-4"
                />
                <button
                  onClick={handleSign}
                  className="px-4 py-2 bg-primary text-white rounded mb-4"
                >
                  Sign Message
                </button>
                {signedData && (
                  <div className="bg-white p-2 rounded">
                    {/* <p className="mb-2 font-semibold">Signature:</p> 
                  <code className="text-sm bg-gray-200 p-2 rounded">
                    {Array.from(signedData.signature).join(', ')}
                  </code> */}
                    <p className="mt-4 mb-2 font-semibold">Public Key:</p>
                    <code className="text-sm bg-gray-200 p-2 rounded">
                      {signedData.publicKey.toString()}
                    </code>
                  </div>
                )}
              </div>
            )}
          </div>
          {loginError && (
            <div className="m-3">
              <Alert
                type="danger"
                message="Could not authenticate user, please try again later."
                icon={
                  <AlertIcon className="w-5 h-5 fill-red-200 stroke-red-600" />
                }
              />
            </div>
          )}
          <div className="p-6 border-t border-gray-200 w-full">
            <Accordion
              expanded={infoExpanded}
              setExpanded={setInfoExpanded}
              header={accordionHeader(infoExpanded)}
              body={accordionBody()}
            />
          </div>
        </>
      )}
    </div>
  )
}

const accordionHeader = (expanded: boolean) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <span className="text-gray-900 text-sm font-medium">
        Why should I install Kleo Plugin?
      </span>
      <div className="text-gray-400 text-sm font-regular">
        {expanded ? (
          <Arrow className="w-5 h-5" />
        ) : (
          <Arrow className=" w-5 h-5transform rotate-180" />
        )}
      </div>
    </div>
  )
}

const accordionBody = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex flex-col justify-start items-start mt-4 text-sm font-regular">
        <div>
          <span className="text-gray-900">In-Depth Insights : </span>
          <span className="text-gray-400">
            Gain a deep understanding of your online activities and habits for
            better decision-making.
          </span>
        </div>
        <div>
          <span className="text-gray-900">Tailored Recommendations : </span>
          <span className="text-gray-400">
            Receive personalized recommendations to enhance your online
            experience.
          </span>
        </div>
        <div>
          <span className="text-gray-900"> Privacy Assurance : </span>
          <span className="text-gray-400">
            Rest assured, your data remains private and secure while using KLEO.
          </span>
        </div>
        <div>
          <span className="text-gray-900"> User-Friendly Interface :</span>
          <span className="text-gray-400">
            Enjoy a seamless, intuitive experience in exploring your browsing
            data.
          </span>
        </div>
        <div>
          <span className="text-gray-900">Productivity Enhancement : </span>
          <span className="text-gray-400">
            Optimize your online time and boost productivity with KLEO's
            insights.
          </span>
        </div>
      </div>
    </div>
  )
}
