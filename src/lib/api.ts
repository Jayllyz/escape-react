export async function getSessions() {
  const response = await fetch('http://localhost:3030/sessions');

  if (response.status === 404) {
    throw new Error('Erreur durant la récupération des sessions');
  }

  return await response.json();
}
