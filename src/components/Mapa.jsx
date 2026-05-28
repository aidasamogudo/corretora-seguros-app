import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Mapa.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function Mapa() {
  const position = [-25.959557, 32.565760]; // Coordenadas aproximadas de Maputo (Alto Maé)

  return (
    <MapContainer center={position} zoom={15} className="mapa-container">
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
      />
      <Marker position={position}>
        <Popup>
          Premium Corretora de Seguros<br />
          Av. Lucas Luali – Nr 470, R/C Alto Maé
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;