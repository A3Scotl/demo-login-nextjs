import { LoginHeader } from './LoginHeader';
import { LoginFormCard } from './LoginFormCard';

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginHeader />
        <LoginFormCard />
      </div>
    </div>
  )};