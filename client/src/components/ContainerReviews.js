import React from 'react';
import './css/ContainerReviews.css'
import {Card, Col} from "react-bootstrap";
import {SERVICE_INFO_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom"
import RemontReytin from '../assets/yarkov-remont-reytin.svg'
import Image from 'react-bootstrap/Image';



const ContainerReviews = () => {
   const history = useHistory()
   return (
      <>
      <Col className="d-flex justify-content-md-center m-3">
      <h1>Отзывы о нашей работе</h1>
      </Col>
      <Col className="d-flex m-3" style={{ paddingLeft: 190}}>
      <Image src={RemontReytin}/>
      </Col>
           <div className = "containerReviews">
            <div className = "container-yarkov-remont-otzyvy">
               <img className = "yarkov-remont-otzyvy" src="https://thumb.tildacdn.com/tild3062-3161-4763-b133-643065366333/-/cover/512x888/center/center/-/format/webp/yarkov-remont-otzyvy.jpg" />
               <img className = "yarkov-remont-otzyvy" src="https://thumb.tildacdn.com/tild3135-6635-4566-a431-643364336236/-/cover/512x888/center/center/-/format/webp/yarkov-remont-otzyvy.jpg" />
               <img className = "yarkov-remont-otzyvy" src="https://thumb.tildacdn.com/tild6366-3037-4232-a539-623337626331/-/cover/512x888/center/center/-/format/webp/yarkov-remont-otzyvy.jpg" />
               <img className = "yarkov-remont-otzyvy" src="https://thumb.tildacdn.com/tild6463-3665-4664-b863-623361323730/-/cover/512x888/center/center/-/format/webp/yarkov-remont-otzyvy.jpg" />
            </div>
          </div>
      </>
   );
};

export default ContainerReviews;