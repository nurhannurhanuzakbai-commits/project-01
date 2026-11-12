// Барлық беттерге ортақ Бэкенд (API) сілтемесі мен функциялары
const BASE_URL = 'https://typicode.com';

export const travelApi = {
  // 1. Тіркелу (Register)
  registerUser: async (userData: { name: string; email: string; password?: string }) => {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  // 2. Кіру (Login)
  loginUser: async (email: string) => {
    const response = await fetch(`${BASE_URL}/users?email=${email}`);
    return response.json();
  },

  // 3. Саяхат орындарының тізімін алу (Home Screen үшін)
  getDestinations: async () => {
    const response = await fetch(`${BASE_URL}/photos?_limit=10`);
    return response.json();
  },
};