import './Mapa.css';

function Mapa() {
  const position = [-25.959557, 32.565760]; // Coordenadas aproximadas de Maputo (Alto Maé)
  const src = `https://maps.google.com/maps?q=${position[0]},${position[1]}&z=16&hl=pt&output=embed`;

  return (
    <iframe
      className="mapa-container"
      src={src}
      title="Premium Corretora de Seguros – Av. Lucas Luali, Nr 470, R/C Alto Maé"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}

export default Mapa;
