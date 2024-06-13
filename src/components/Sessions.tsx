import { sessions } from '../data/sessions';
import SessionInfo from './ui/SessionInfo';

function Sessions() {
  const sessionItems = sessions.map((session) => <SessionInfo key={session.name} {...session} />);

  return <section className="flex flex-col gap-8 p-4">{sessionItems}</section>;
}

export default Sessions;
