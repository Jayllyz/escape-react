import { sessions } from '../data/sessions';
import SessionInfo from './ui/SessionInfo';

function Sessions(): JSX.Element {
  const sessionItems = sessions.map((session) => <SessionInfo key={session.name} {...session} />);

  return (
    <section className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="flex justify-center bg-slate-400 py-4 text-white text-3xl font-bold">Nos Sessions</h1>
      </div>
      {sessionItems}
    </section>
  );
}

export default Sessions;
