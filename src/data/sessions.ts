interface Session {
  name: string;
  description: string;
  numberParticipants: number;
  place: {
    city: string;
  };
  duration: number;
  pricePerPerson: number;
  rating: number;
  image: string;
}

export const sessions: Session[] = [
  {
    name: 'Fuir Jason',
    description: `Bienvenue dans "Fuir Jason", un jeu d'évasion palpitant où votre survie est en jeu. Vous êtes piégés dans une cabane isolée, poursuivis par le redoutable Jason. Vous avez 60 minutes pour résoudre les énigmes, trouver des indices cachés et déverrouiller les portes. Chaque minute qui passe rapproche Jason. Travaillez en équipe, restez calmes et utilisez votre intelligence pour vous échapper. Ne laissez pas la peur vous envahir, ou Jason aura gagné. Bonne chance, et que le jeu commence !`,
    numberParticipants: 13,
    place: {
      city: 'Paris',
    },
    duration: 120,
    pricePerPerson: 15,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1588168053036-b51f9152f2f6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Le labyrinthe',
    description: `Bienvenue dans "Le labyrinthe", un jeu d'évasion stimulant qui vous plongera dans un monde de mystère et de défis. Vous êtes piégés dans un labyrinthe complexe, rempli de pièges et d'énigmes à résoudre. Vous avez 60 minutes pour trouver votre chemin, découvrir des indices cachés et déverrouiller les portes. Travaillez en équipe, communiquez efficacement et utilisez votre logique pour vous échapper. Le temps presse, et chaque mauvaise décision pourrait vous coûter cher. Bonne chance, et que le jeu commence !`,
    numberParticipants: 25,
    place: {
      city: 'Marseille',
    },
    duration: 150,
    pricePerPerson: 30,
    rating: 5,
    image: 'labyrinth.jpg',
  },
  {
    name: "L'asile",
    description: `Plongés dans l'obscurité oppressante de l'asile abandonné de Ravenscroft, vous et votre équipe devez affronter vos peurs les plus profondes. Jadis un lieu de soins, l'asile est désormais le théâtre de phénomènes étranges et inexpliqués. Des cris résonnent dans les couloirs déserts, des ombres inquiétantes glissent sur les murs décrépis. Le personnel a disparu sans laisser de trace, et les patients errent, hantés par des esprits vengeurs. Votre mission : découvrir les sombres secrets de Ravenscroft et trouver la sortie avant que la folie ne vous engloutisse. Mais attention, le temps presse, et l'asile ne vous laissera pas partir sans lutter. Oserez-vous défier les ténèbres et survivre à l'horreur de l'asile?`,
    numberParticipants: 4,
    place: {
      city: 'Lyon',
    },
    duration: 300,
    pricePerPerson: 25,
    rating: 2,
    image: 'asylum.avif',
  },
];
