import { LatLng } from "leaflet";
import LeafletMap from "../../components/LeafletMap/LeafletMap";

export default function Map(){
    return (
        <LeafletMap center={new LatLng(0,0)} zoom={5}/>
    );
}