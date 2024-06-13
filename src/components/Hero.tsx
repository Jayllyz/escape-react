function Hero() {
  return (
    <section className="p-8 h-[70vh] flex items-center justify-center bg-cover bg-right gap-24">
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-6xl text-black font-bold">Qui sommes nous ?</h1>
        <div className="max-w-[700px]">
          <p className="w-full">
            Bienvenue dans notre univers captivant d'escape games, où chaque aventure est une expérience unique et
            palpitante ! Que vous soyez amateur de frissons, de mystères ou d'aventures épiques, notre entreprise vous
            propose une variété de scénarios immersifs qui sauront combler toutes vos attentes. Plongez dans des mondes
            fantastiques, résolvez des énigmes complexes et défiez vos capacités de réflexion et de collaboration pour
            vous échapper à temps.
          </p>
        </div>
        <a href="#booking-section">
          <button
            className="mt-4 w-[280px] flex justify-center py-2 px-4 border border-transparent  rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            🎟️ Réserver maintenant !
          </button>
        </a>
      </div>
      <img className="h-full" src="ghost.jpg" alt="ghost hero" />
    </section>
  );
}

export default Hero;
