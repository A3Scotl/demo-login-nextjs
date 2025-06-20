import { Input } from '@/components/ui/form/Input';
import { Button } from '@/components/ui/form/Button';
import { Link } from '@/components/ui/form/Link';

export function LoginFormCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Đăng nhập
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        Nhập thông tin để đăng nhập vào tài khoản của bạn
      </p>

      <div className="space-y-4">
        {/* Email Field */}
        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
        />

        {/* Password Field */}
        <Input
          label="Mật khẩu"
          type="password"
          id="password"
          name="password"
          placeholder="Nhập mật khẩu"
        />

        {/* Forgot Password Link */}
        <div className="text-right">
          <Link
            variant="muted"
            className="text-sm"
          >
            Quên mật khẩu?
          </Link>
        </div>

        {/* Login Button */}
        <Button
          className="w-full cursor-pointer"
          type="button"
        >
          Đăng nhập
        </Button>
      </div>

      {/* Sign Up Link */}
      <div className="mt-6 text-center">
        <span className="text-gray-600 text-sm">Chưa có tài khoản? </span>
        <Link className="text-sm font-medium">
          Đăng ký ngay
        </Link>
      </div>
    </div>
  );
}
