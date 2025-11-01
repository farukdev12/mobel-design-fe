'use client'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const myLocation = {
    lat: 40.901361,  // Enlem (latitude)40.901361, 29.296422
    lng: 29.296422,  // Boylam (longitude)
};

export default function MapComponent() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (loadError) return <div>Harita yüklenirken hata oluştu</div>;
    if (!isLoaded) return <div>Harita yükleniyor...</div>;

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={myLocation}
        >
            <Marker
                position={myLocation}
                title="Adresim"
            />
        </GoogleMap>
    );
}