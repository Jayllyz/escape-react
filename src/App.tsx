import Header from './components/Header';
import SessionInfo from './components/ui/SessionInfo';

function App() {
  return (
    <html lang="fr">
      <main>
        <header>
          <Header />
        </header>
        <div>
          <h1 className="flex justify-center bg-slate-400 py-4 text-white text-3xl font-bold">Nos Sessions</h1>
        </div>
        <SessionInfo
          title={'Fuir Jason'}
          description={`Bienvenue dans "Fuir Jason", un jeu d'évasion palpitant où votre survie est en jeu. Vous êtes piégés dans
              une cabane isolée, poursuivis par le redoutable Jason. Vous avez 60 minutes pour résoudre les énigmes,
              trouver des indices cachés et déverrouiller les portes. Chaque minute qui passe rapproche Jason.
              Travaillez en équipe, restez calmes et utilisez votre intelligence pour vous échapper. Ne laissez pas la
              peur vous envahir, ou Jason aura gagné. Bonne chance, et que le jeu commence !`}
          image={'jason.avif'}
          imageSide={'left'}
          minPlayers={2}
          maxPlayers={4}
        />
        <SessionInfo
          title={'Le labyrinthe'}
          description={`Bienvenue dans "Le labyrinthe", un jeu d'évasion stimulant qui vous plongera dans un monde de mystère et de
             défis. Vous êtes piégés dans un labyrinthe complexe, rempli de pièges et d'énigmes à résoudre. Vous avez 60 minutes 
             pour trouver votre chemin, découvrir des indices cachés et déverrouiller les portes. Travaillez en équipe, 
             communiquez efficacement et utilisez votre logique pour vous échapper. Le temps presse, et chaque mauvaise 
             décision pourrait vous coûter cher. Bonne chance, et que le jeu commence !`}
          image={'labyrinth.jpg'}
          imageSide={'right'}
          minPlayers={4}
          maxPlayers={8}
        />
        <SessionInfo
          title={"L'asile"}
          description={`Plongés dans l'obscurité oppressante de l'asile abandonné de Ravenscroft, vous et votre équipe devez 
            affronter vos peurs les plus profondes. Jadis un lieu de soins, l'asile est désormais le théâtre de phénomènes étranges 
            et inexpliqués. Des cris résonnent dans les couloirs déserts, des ombres inquiétantes glissent sur les murs décrépis. 
            Le personnel a disparu sans laisser de trace, et les patients errent, hantés par des esprits vengeurs. Votre mission :
             découvrir les sombres secrets de Ravenscroft et trouver la sortie avant que la folie ne vous engloutisse. 
             Mais attention, le temps presse, et l'asile ne vous laissera pas partir sans lutter. Oserez-vous défier les 
             ténèbres et survivre à l'horreur de l'asile?`}
          image={'asylum.avif'}
          imageSide={'left'}
          minPlayers={3}
          maxPlayers={6}
        />
      </main>
    </html>
  );
}

export default App;
