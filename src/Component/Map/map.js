import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';




function createMarkup() {
    return { __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14833.418647729957!2d87.62975!3d21.6500567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe327b20572545d23!2sSwastik%20Resort!5e0!3m2!1sen!2sin!4v1647701921290!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>' };
}

 export default function MapContainer() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
}


