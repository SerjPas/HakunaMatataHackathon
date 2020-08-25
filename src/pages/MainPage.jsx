import React from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'


const MainPage = () => {

    return (
       <Container class="cont" fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
           <Image src="https://bountifield.org/wp-content/uploads/2019/07/Africa-Farm-Field-1-1080.png" fluid 
            class="img-responsive img"/>
            <div class="carousel-caption">
              <h1>We're helping farmers in developing countries by providing accurate weather prediction 
                  forecasts and solutions for efficient energy and water consumption based on complex data 
                  models.
                </h1>
            </div>
       </Container>
    )
}

export default MainPage;