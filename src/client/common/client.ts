const baseURL = process.env.APP_BASE_URL || 'http://localhost:3000';

export const client = async (query: string, variables: Record<string, any> = {}) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors.map((error: any) => error.message).join(', '));
  }

  return result.data;
};
