import React from 'react';
// import React, { useEffect, useState } from 'react';
// import Destinations from './Destinations';
import Places from './Places.json';
import InfiniteCarousel from 'react-leaf-carousel';
import { Link, useParams, useLocation } from "react-router-dom";
import BreadCrumbs from './BreadCrumbs';

const InfoPage = () => {

    const { id } = useParams(); // From the address part of the link

    const { search } = useLocation(); // From the string with the filter settings after the "?" in the link

    return (
        <div className="column_all">

            <div className="header">
                <div>
                    <Link to="/"> <img className="logoPicknick" src="../icons/picknickLogoAndText.png" alt=" logo " /></Link>

                </div>

            </div>
            {Places.filter((place) => place.id === parseInt(id)).map(place =>
                <div>
                    <li key={place.id.toString()}>
                        <div className="infocontainer">
                            <div>{/* från json filen filtreras info där id i jsonfilen = id från Url
                                 map tar all info och lägger i place, namnet hämtas från place.
                                 samma sak görs för bilden och beskrivning i nästa div */}
                                <BreadCrumbs id={id} />

                                <h1 style={{ paddingLeft: "10px" }}>{place.name}</h1>

                            </div>
                            <div>

                                <InfiniteCarousel
                                    breakpoints={[
                                        {
                                            breakpoint: 500,
                                            settings: {
                                                sideSize: .1,
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                                slidesSpacing: 24,

                                                /*  arrows: true,
                                               dots:false, */
                                                /* autoCycle: true,
                                                cycleInterval: 3000,
                                                pauseOn: false */
                                            },
                                        },
                                        /*{
                                            breakpoint: 768,
                                            settings: {
                                                sideSize: .1,
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                                slidesSpacing: 2,
                                            },
                                        },*/
                                    ]}

                                    dots={false}
                                    arrows={true}
                                    showSides={true}
                                    sidesOpacity={.5}
                                    sideSize={.1}
                                    slidesToScroll={1}
                                    slidesToShow={1}
                                    slidesSpacing={2}
                                    scrollOnDevice={true}
                                /*
                                dots={true}
                                showSides={true}
                                sidesOpacity={.5}
                                sideSize={.1}
                                slidesToScroll={3}
                                slidesToShow={3}
                                scrollOnDevice={true}*/

                                >
                                    {place.images.map(img =>

                                        <div>
                                            <img
                                                style={{ objectFit: "cover" }}
                                                alt={place.name}
                                                src={"../places/" + img}
                                                height={"250px"}
                                            />
                                        </div>
                                    )}
                                </InfiniteCarousel>
                            </div>
                        </div>

                        <div className="infocontainer2">
                            <div className="choices" >Dina val:</div>
                            {/* Adding non-klickable buttons for the filter choices that have been made */}
                            {search.match("changingDiaper") ? (<button className="button_on">skötbord</button>) : ""}
                            {search.match("parking") ? (<button className="button_on">parkering</button>) : ""}
                            {search.match("wc") ? (<button className="button_on">WC</button>) : ""}
                            {search.match("fourH") ? (<button className="button_on">4H-gård</button>) : ""}
                            {search.match("pramFriendly") ? (<button className="button_on">barnvagnsvänligt</button>) : ""}
                            {search.match("cafe") ? (<button className="button_on">kiosk/café </button>) : ""}
                            {search.match("fireplace") ? (<button className="button_on">grillplats </button>) : ""}
                            {search.match("playground") ? (<button className="button_on">lekplats </button>) : ""}
                            {search.match("microwave") ? (<button className="button_on">micro</button>) : ""}
                            {search.match("beach") ? (<button className="button_on">badplats</button>) : ""}
                            {search.match("trails") ? (<button className="button_on">promenadstigar</button>) : ""}
                            {search.match("elevatorRamp") ? (<button className="button_on">hiss/ramp</button>) : ""}
                            {search.match("picnicCompatible") ? (<button className="button_on">picknickområde</button>) : ""}
                            {search.match("restaurant") ? (<button className="button_on">restaurang</button>) : ""}
                        </div>

                        <div className="infocontainer3">
                            <div className="facilities">
                                Också på platsen:
                            </div>
                            {/* Adding non-klickable buttons for the facilities that the place has, that were NOT included in the filter requiremnts */}
                            {(place.changingDiaper && !search.match("changingDiaper")) ? <button className="button_off">skötbord </button> : ""}
                            {(place.parking && !search.match("parking")) ? <button className="button_off">parkering </button> : ""}
                            {(place.wc && !search.match("wc")) ? <button className="button_off">WC </button> : ""}
                            {(place.fourH && !search.match("fourH")) ? <button className="button_off">4H-gård </button> : ""}
                            {(place.pramFriendly && !search.match("pramFriendly")) ? <button className="button_off">barnvagnsvänligt </button> : ""}
                            {(place.cafe && !search.match("cafe")) ? <button className="button_off">kiosk/cafe </button> : ""}
                            {(place.fireplace && !search.match("fireplace")) ? <button className="button_off">grillplats </button> : ""}
                            {(place.playground && !search.match("playground")) ? <button className="button_off">lekplats </button> : ""}
                            {(place.microwave && !search.match("microwave")) ? <button className="button_off">mikrovågsugn </button> : ""}
                            {(place.beach && !search.match("beach")) ? <button className="button_off">badplats </button> : ""}
                            {(place.trails && !search.match("trails")) ? <button className="button_off">promenadstigar </button> : ""}
                            {(place.elevatorRamp && !search.match("elevatorRamp")) ? <button className="button_off">hiss/ramp </button> : ""}
                            {(place.picnicCompatible && !search.match("picnicCompatible")) ? <button className="button_off">picknickområde </button> : ""}
                            {(place.restaurant && !search.match("restaurant")) ? <button className="button_off">restaurang </button> : ""}

                        </div>

                        <div className="infocontainer4">
                            <div>

                                <p><strong>OM UTFLYKTSMÅLET. </strong> {" " + place.description}</p>

                            </div>

                        </div>

                        <div className="footer">

                            <a className="mapbutton" href={place.mapsLink} style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">ÖPPNA I KARTTJÄNST</a>
                            <BreadCrumbs />


                        </div>
                    </li>
                </div>
            )
            }
        </div >
    );
};

export default InfoPage;
