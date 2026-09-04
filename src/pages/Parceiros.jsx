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
    <div>
      <style>{`
        .parceiros-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .parceiro-card {
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
          .parceiros-grid {
            gap: 1rem;
          }
          .parceiro-card {
            padding: 1rem;
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