import { Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import SearchBox from './SearchBox';
import * as actionType from "../../../redux/actions/type";
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Carousels(){
    const[img, setImg] = useState([]);
    const slideImgList = () => {
        const URL = actionType.BASE_URL_API + 'Balotour/SlideMain/slideImageList';
        axios.get(URL, {
            headers: {
                "x-api-key": "api_key",
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
        .then(function(res){
            console.log(res.data.data.slide_header_img);
             setImg(res.data.data.slide_header_img);
        })
        .catch(function(err){
            console.log(err);
        })
    }
    useEffect(() => {
        slideImgList();
    }, []);
    
    return (
        <Container fluid className="position-relative ps-0 pe-0">
            <Carousel>
                {img.map((imgSlide, index) => 
                    <Carousel.Item key = {index}>
                        <img src={imgSlide} className='w-100 img_carousel' />
                    </Carousel.Item>
                )}
            </Carousel>
            <SearchBox />
        </Container>
        
        
    )
}