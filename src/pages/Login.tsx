import { useState } from 'react';
import { EmployeeLoginSchema } from '../lib/validators';

type FormErrors = {
  email: string | undefined;
  password: string | undefined;
};

type LoginError = {
  message: string | undefined;
};

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: undefined,
    password: undefined,
  });

  const [loginError, setLoginError] = useState<LoginError>({
    message: undefined,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validatedFields = EmployeeLoginSchema.safeParse(formData);
    if (validatedFields.success) {
      loginEmployee(formData.email);
      return;
    }
    const errors = validatedFields.error.flatten().fieldErrors;
    setFormErrors({ email: errors.email?.[0], password: errors.password?.[0] });
  };

  async function loginEmployee(email: string) {
    const response = await fetch(`http://localhost:3030/users/${email}`);
    if (response.status === 404) {
      setLoginError({
        message: 'Email ou mot de passe invalide',
      });
      return;
    }
    const employeeData = (await response.json()) as { id: string };
    sessionStorage.setItem('emailEmployee', employeeData.id);
    window.location.href = '/employeeDashboard';
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white p-14 rounded-lg shadow-md border border-gray-200">
          <h1 className="text-2xl font-semibold mb-4 text-center">Se connecter</h1>
          {loginError.message && <p className="mb-4 text-sm text-red-500 text-center">{loginError.message}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Adresse e-mail
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                id="email"
                name="email"
                autoComplete="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Mot de passe
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              {formErrors.password && <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>}
            </div>
            <div>
              <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
                disabled={!formData.email || !formData.password}
              >
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
