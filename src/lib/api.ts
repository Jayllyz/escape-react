import type { session } from './types';

export async function getSessions(): Promise<{ data: session[]; status: number }> {
  const response = await fetch('http://localhost:3030/sessions');

  return { data: await response.json(), status: response.status };
}

export async function getSession(id: string): Promise<{ data: session | null; status: number }> {
  const response = await fetch('http://localhost:3030/sessions');

  if (response.status === 404) {
    return { data: null, status: 404 };
  }

  const data = await response.json();
  const filtered = data.filter((session: session) => session.id === Number.parseInt(id));
  return { data: filtered[0], status: response.status };
}

export async function cancelSlot(id_session: string, id_slot: string): Promise<{ status: number }> {
  const response = await fetch(`http://localhost:3030/sessions/${id_session}/slots/${id_slot}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'cancelled' }),
  });

  return { status: response.status };
}
