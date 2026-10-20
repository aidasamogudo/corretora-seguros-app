function Parceiros() {
  const parceiros = [
    { nome: "EMOSE", logo: "/images/parceiros/emose.png", largura: 120, altura: 120 },
    { nome: "Palma", logo: "/images/parceiros/palma.png", largura: 170, altura: 140 },
    { nome: "Imperial", logo: "/images/parceiros/imperial.png", largura: 150, altura: 130 },
    { nome: "Indico", logo: "/images/parceiros/indico.png", largura: 180, altura: 150 },
    { nome: "Britam", logo: "/images/parceiros/britam.png", largura: 150, altura: 110 },
    { nome: "Horizonte", logo: "/images/parceiros/horizonte.png", largura: 170, altura: 140 },
    { nome: "Maximo", logo: "/images/parceiros/maximo.png", largura: 110, altura: 110 },
  ];

  return (
    <div className="parceiros-page">
      <style>{`
        /* ocupa a altura do <main> (ecrã - header ~99px - padding 2rem x2) */
        .parceiros-page {
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 99px - 4rem);
          min-height: calc(100svh - 99px - 4rem);
        }

        .parceiros-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center; /* centra todas as linhas, incluindo a última */
          gap: 2rem;
          margin: auto 0; /* centra os logos verticalmente no espaço abaixo do título */
          padding: 2rem 0;
        }

        .parceiro-card {
          flex: 0 1 220px;
          box-sizing: border-box;
          background: #ffffff;
          padding: 1.5rem;
          text-align: center;
          border-radius: 5px;
          transition: all 0.3s;
          cursor: pointer;
          border: 1px solid #888;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .parceiro-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          border-color: #D1B274;
        }

        /* Responsivo para mobile */
        @media (max-width: 768px) {
          .parceiros-page {
            min-height: calc(100svh - 99px - 2rem); /* padding do <main> no mobile é 1rem */
          }
          .parceiros-grid {
            gap: 1rem;
          }
          .parceiro-card {
            flex-basis: calc(50% - 0.5rem);
            padding: 1rem;
          }
          .parceiro-card img {
            max-width: 100%;
          }
        }
      `}</style>

      <h1 style={{ color: '#D1B274' }}>
        Seguradoras Parceiras
      </h1>
      
      <div className="parceiros-grid">
        {parceiros.map((p, i) => (
          <div className="parceiro-card" key={i}>
            <img 
              src={p.logo} 
              alt={p.nome} 
              style={{
                width: `${p.largura}px`,
                height: `${p.altura}px`,
                objectFit: 'contain',
                display: 'block'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/150x150?text=${p.nome}`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parceiros;