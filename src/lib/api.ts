import type { Session } from './types';

export async function getSessions(): Promise<{ data: Session[]; status: number }> {
  const response = await fetch('http://localhost:3030/sessions');

  return { data: await response.json(), status: response.status };
}

export async function getSession(id: string): Promise<{ data: Session | null; status: number }> {
  const response = await fetch('http://localhost:3030/sessions');

  if (response.status === 404) {
    throw new Error('Erreur durant la récupération des sessions');
  }

  const data = await response.json();
  console.log(data);
  const filtered = data.filter((session: Session) => session.id.toString() === id);
  return { data: filtered[0], status: response.status };
}

export async function updateSlot(id_session: string, data: Session): Promise<{ status: number }> {
  const response = await fetch(`http://localhost:3030/sessions/${id_session}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return { status: response.status };
}
