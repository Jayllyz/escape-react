import { useEffect, useState } from 'react';

export default function Legals(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') !== 'false');

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false') {
      setDarkMode(false);
    }
  }, []);

  return (
    <>
      <main className={darkMode ? 'text-white' : ''} style={darkMode ? { backgroundColor: '#242424' } : {}}>
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-center">Mentions légales</h1>
          <h2 className="text-2xl font-semibold mt-8">1. Présentation du site</h2>
          <p className="mt-4">
            Conformément aux dispositions des articles 6-III et 19 de la loi pour la Confiance dans l'Économie
            Numérique, nous vous informons que :
          </p>
          <p className="mt-4">Ce site est édité par :</p>
          <p className="mt-4">
            Nom : Maison Horifique
            <br />
            Adresse : 123 rue de la Liberté, 75000 Paris
            <br />
            Téléphone : 01 23 45 67 89
            <br />
            Email : maisonhorifique@gmail.com
          </p>
          <h2 className="text-2xl font-semibold mt-8">
            2. Conditions générales d'utilisation du site et des services proposés
          </h2>
          <p className="mt-4">
            L'utilisation du site maison-horifique.com implique l'acceptation pleine et entière des conditions générales
            d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou
            complétées à tout moment, les utilisateurs du site maison-horifique.com sont donc invités à les consulter de
            manière régulière.
          </p>
          <p className="mt-4">
            Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de
            maintenance technique peut être toutefois décidée par Maison Horifique, qui s'efforcera alors de communiquer
            préalablement aux utilisateurs les dates et heures de l'intervention.
          </p>
          <h2 className="text-2xl font-semibold mt-8">3. Description des services fournis</h2>
          <p className="mt-4">
            Le site maison-horifique.com a pour objet de fournir une information concernant l'ensemble des activités de
            la société.
          </p>
          <p className="mt-4">
            Maison Horifique s'efforce de fournir sur le site maison-horifique.com des informations aussi précises que
            possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences
            dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces
            informations.
          </p>
          <p className="mt-4">
            Tous les contenus du site maison-horifique.com, incluant, de façon non limitative, les textes, images,
            vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de
            Maison Horifique à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou
            auteurs.
          </p>
          <p className="mt-4">
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle,
            de ces différents éléments est strictement interdite sans l'accord écrit préalable de Maison Horifique.
          </p>

          <h2 className="text-2xl font-semibold mt-8">5. Limitations de responsabilité</h2>
          <p className="mt-4">
            Maison Horifique ne pourra être tenu responsable des dommages directs et indirects causés au matériel de
            l'utilisateur, lors de l'accès au site maison-horifique.com, et résultant soit de l'utilisation d'un
            matériel ne répondant pas aux spécifications indiquées au point 4, soit de l'apparition d'un bug ou d'une
            incompatibilité.
          </p>
          <p className="mt-4">
            Maison Horifique ne pourra également être tenu responsable des dommages indirects (tels par exemple qu'une
            perte de marché ou perte d'une chance) consécutifs à l'utilisation du site maison-horifique.com.
          </p>

          <h2 className="text-2xl font-semibold mt-8">6. Gestion des données personnelles</h2>
          <p className="mt-4">
            Les informations recueillies sur le site maison-horifique.com sont destinées à Maison Horifique pour le bon
            fonctionnement de la réservation des expériences. Conformément à la loi informatique et libertés du 6
            janvier 1978 modifiée, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous
            concernent. Si vous souhaitez exercer ce droit et obtenir communication des informations vous concernant,
            veuillez nous contacter.
          </p>
        </div>
      </main>
    </>
  );
}
