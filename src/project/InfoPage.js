import React from 'react';
// import React, { useEffect, useState } from 'react';
// import Destinations from './Destinations';
import Places from './Places.json';
import { Link, useParams, useLocation } from "react-router-dom";

const InfoPage = () => {

    const { id } = useParams();

    const { search } = useLocation()
    console.log(search)

<<<<<<< HEAD
    // Can only return one object, encapsulated in a DIV here
=======
    //     const filterString = useLocation();


    //  alert("filterString= " + filterString + ";  .toString = " + filterString.toString + ";\n.toString() = " + filterString.toString() + "; filter = " + filter);

     // Can only return one object, encapsulated in a DIV here
>>>>>>> 35056f4bfcfa8236e43bba55beb213aad758f718
    return (
        <div className="column_all">

            <div className="header">
                <div>
                    <Link to="/"> <img className="logoPicknick" src="../icons/picknickLogoAndText.png" alt=" logo " /></Link>
                </div>

            </div>

            <div className="infoContainer">
                <div>{/* från json filen filtreras info där id i jsonfilen = id från Url
                map tar all info och lägger i place, namnet hämtas från place.
                samma sak görs för bilden och beskrivning i nästa div */}
                    {Places.filter((place) => place.id === parseInt(id)).map(place =>
<<<<<<< HEAD
                        <li key={place.id.toString()+ "li1"}>
=======
                        <li key={place.id.toString()}>
>>>>>>> 35056f4bfcfa8236e43bba55beb213aad758f718
                            <h1>{place.name}</h1>
                        </li>
                    )}
                </div>
                <div>
                    {Places.filter((place) => place.id === parseInt(id)).map(place =>
                        <li key={place.id.toString()}>
                            <img className="infopicture" src={"../places/" + place.img3} alt={place.name} />
                        </li>
                    )}
                </div>

            </div>

            <div className="infoContainer2">
                <p>Dina val:</p>
                <div>

                    {search.match("changingDiaper") ? (<button className="button_on">Skötbord</button>) : ""}
                    {search.match("parking") ? (<button className="button_on">Parkering</button>) : ""}
                    {search.match("wc") ? (<button className="button_on">WC</button>) : ""}
                    {search.match("fourH") ? (<button className="button_on">4h-gård</button>) : ""}
                    {search.match("pramFriendly") ? (<button className="button_on">Barnvagnsvänligt</button>) : ""}
                    {search.match("cafe") ? (<button className="button_on">Kiosk/café </button>) : ""}
                    {search.match("fireplace") ? (<button className="button_on">Grillplats </button>) : ""}
                    {search.match("playground") ? (<button className="button_on">Lekplats </button>) : ""}
                    {search.match("microwave") ? (<button className="button_on">Micro</button>) : ""}
                    {search.match("beach") ? (<button className="button_on">Badplats</button>) : ""}
                    {search.match("trails") ? (<button className="button_on">Promenadstigar</button>) : ""}
                    {search.match("elevatorRamp") ? (<button className="button_on">Hiss/ramp</button>) : ""}
                    {search.match("picnicCompatible") ? (<button className="button_on">Picknickområde</button>) : ""}
                    {search.match("restaurant") ? (<button className="button_on">Restaurang</button>) : ""}
                </div>

            </div>


            <div className="infoContainer2">
                <p>Också på platsen:</p>
                <div>
                    {Places.filter((place) => place.id === parseInt(id)).map(place =>
                        <li key={place.id.toString()}>
                            {(place.changingDiaper && !search.match("changingDiaper")) ? (
                                <button className="button_off">Skötbord </button>) :
                                ("")
                            }

                            {(place.parking && !search.match("parking")) ? (
                                <button className="button_off">Parkering </button>) :
                                ("")
                            }

                            {(place.wc && !search.match("wc")) ? (
                                <button className="button_off">WC </button>) :
                                ("")
                            }

                            {(place.fourH && !search.match("fourH")) ? (
                                <button className="button_off">4H </button>) :
                                ("")
                            }

                            {(place.pramFriendly && !search.match("pramFriendly")) ? (
                                <button className="button_off">Barnvagnsvänligt </button>) :
                                ("")
                            }
                            {(place.cafe && !search.match("cafe")) ? (
                                <button className="button_off">Kiosk/cafe </button>) :
                                ("")
                            }
                            {(place.fireplace && !search.match("fireplace")) ? (
                                <button className="button_off">Grillplats </button>) :
                                ("")
                            }

                            {(place.playground && !search.match("playground")) ? (
                                <button className="button_off">Lekplats </button>) :
                                ("")
                            }

                            {(place.microwave && !search.match("microwave")) ? (
                                <button className="button_off">Mikrovågsugn </button>) :
                                ("")
                            }

                            {(place.beach && !search.match("beach")) ? (
                                <button className="button_off">Badplats </button>) :
                                ("")
                            }

                            {(place.trails && !search.match("trails")) ? (
                                <button className="button_off">Promenadstigar </button>) :
                                ("")
                            }

                            {(place.elevatorRamp && !search.match("elevatorRamp")) ? (
                                <button className="button_off">Hiss/ramp </button>) :
                                ("")
                            }

                            {(place.picnicCompatible && !search.match("picnicCompatible")) ? (
                                <button className="button_off">Picknickområde </button>) :
                                ("")
                            }

                            {(place.restaurant && !search.match("restaurant")) ? (
                                <button className="button_off">Restaurang </button>) :
                                ("")
                            }
                        </li>
                    )}
                </div>

            </div>

            <div className="infoContainer3">
                <div>
                    {Places.filter((place) => place.id === parseInt(id)).map(place =>
                        <li key={place.id.toString()}>
                            <p>{place.description}</p>
                        </li>
                    )}
                </div>

            </div>

            <div className="footer">
                {Places.filter((place) => place.id === parseInt(id)).map(place =>
                    <li key={place.id.toString()}>
                        
                        <a className="mapbutton" href={place.mapsLink} style={{textDecoration: 'none'}}>ÖPPNA I KARTTJÄNST</a>
                        
                       
                    </li>
                )}
            </div>

        </div>
    );
};

export default InfoPage;

/*
<p className="family">
<img src="./icons/family_friendly_2440px.png" alt="<h2>Familjevänliga utflyktsmål</h2>" />
</p>
*/
