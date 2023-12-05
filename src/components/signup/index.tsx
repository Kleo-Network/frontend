import Onboarding from '../profile/Onboarding/MetaMask'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()

  const handleLogin = (userAddress: string) => {
    console.log('logged in successfully')
    navigate('/profile/' + userAddress)
  }

  return (
    <div className="flex items-center justify-center p-12 bg-gray-100 self-stretch flex-1">
      <div className="flex items-center justify-center border bg-white shadow-lg border-gray-200 rounded-lg">
        <Onboarding handleLogin={handleLogin} />
      </div>
    </div>
  )
}

export default SignUp
