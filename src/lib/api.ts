import type { Booking, Employee, Session } from './types';

export async function getSessions(): Promise<{ data: Session[]; status: number }> {
  const response = await fetch('http://localhost:3030/sessions');

  return { data: await response.json(), status: response.status };
}

export async function getSession(id: string): Promise<{ data: Session | null; status: number }> {
  const response = await fetch('http://localhost:3030/sessions');

  if (response.status === 404) {
    return { data: null, status: 404 };
  }

  const data = (await response.json()) as Session[];
  const filtered = data?.filter((session: Session) => session.id.toString() === id);
  return { data: filtered[0] || null, status: response.status };
}

export async function createSession(data: Session): Promise<{ status: number }> {
  const response = await fetch('http://localhost:3030/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return { status: response.status };
}

export async function updateSlot(id_session: string, data: Session): Promise<{ status: number }> {
  const response = await fetch(`http://localhost:3030/sessions/${id_session}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return { status: response.status };
}

export async function getEmployees(): Promise<{ data: Employee[] }> {
  const response = await fetch('http://localhost:3030/employees');

  return { data: await response.json() };
}

export async function updateEmployee(id: string, data: Employee): Promise<{ status: number }> {
  const response = await fetch(`http://localhost:3030/employees/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return { status: response.status };
}

export async function createBooking(data: Booking): Promise<{ status: number }> {
  const response = await fetch('http://localhost:3030/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return { status: response.status };
}

export async function getBookings(): Promise<{ data: Booking[] }> {
  const response = await fetch('http://localhost:3030/bookings');

  return { data: await response.json() };
}

export async function updateBooking(id: string, data: Booking): Promise<{ status: number }> {
  const response = await fetch(`http://localhost:3030/bookings/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return { status: response.status };
}
