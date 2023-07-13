import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

const containerStyle = {
    width: "300px",
    height: "300px",
};

interface Props {
    dataAddress: string;
}

function Map({ dataAddress }: Props) {
    const [center, setCenter] = useState({ lat: 0, lng: 0 });
    const key = Geocode.setApiKey("AIzaSyAkq5m2UkIwTUXTZe4pZqtxKYtHz0l3zs4");

    useEffect(() => {
        Geocode.fromAddress(dataAddress)
            .then((response: any) => {
                const { lat, lng } = response.results[0].geometry.location;
                setCenter({ lat, lng })
            })
            .catch((error: any) => {
                console.error(error);
            });
    }, []);

    return (

        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
            <Marker position={center} />
        </GoogleMap>

    );
}

export default Map;
