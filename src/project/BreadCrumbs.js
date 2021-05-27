import React from "react";
import Places from './Places.json';
import 'bootstrap/dist/css/bootstrap.css';
import { Link} from "react-router-dom";

const BreadCrumbs = (props) => {
  return (
    <div>
      {Places.filter((place) => place.id === parseInt(props.id)).map((place) => (
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
            <Link to="/" class="homecrumb">Hem</Link>
            </li>
            <li class="breadcrumb-item">
              <a class="itemcrumb">{place.name}</a>
            </li>
          </ol>
        </nav>
      ))}
    </div>
  );
};

export default BreadCrumbs;
