export const isUserAuthenticated: boolean | null = typeof window !== "undefined" 
  ? JSON.parse(localStorage.getItem('auth') || 'false') 
  : false;
