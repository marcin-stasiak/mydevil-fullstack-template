export const client = async (query: string, variables: Record<string, any> = {}) => {
  const response = await fetch('https://flyby-router-demo.herokuapp.com/', {
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
