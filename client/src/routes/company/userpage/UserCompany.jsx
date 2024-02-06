import "./UserCompany.css";
import Navbar from "../../../components/navbar/navbar.jsx"
import { useEffect, useState } from 'react';
import { getCompanyById } from '../../../functions/companyFunctions.js';
import Footer from "../../../components/footer/footer.jsx"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function UserCompany() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = 'N5wtfaCiNSe1Yh85tr8hjA4ygsO2';
        const fetchedUserData = await getCompanyById(userId);
        console.log(fetchedUserData)
        setUserData(fetchedUserData);
      } catch (error) {
        console.error('Error fetching user by ID:', error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="main">
        <Navbar/>
        {userData && (
            <section className="com-sec top-sec">
            <div className="banner-container">
                <img className="banner" src={userData.banner} alt="banner" />
                <div className="men-profile">
                <img src={userData.logo} alt="User" />
                <h3>{userData.displayName}</h3>
                </div>
            </div>
            </section>
        )}
        {userData && (
          <section className="com-sec intro-sec">
            <h2>Introduction</h2>
            <p>{userData.intro_text}</p>
          </section>
        )}
        {userData && (
            <section className="com-sec video-sec">
                <video controls>
                <source src={userData.intro_video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>
        )}
          <section className="com-sec gallery-sec">
            <h2>Company Life</h2>
              {userData && (
                <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000}>
                  {userData.gallery.map((image, index) => (
                    <div className="gallery-item" key={index}>
                      <img  src={image.imageURL} alt="Picture" />
                    </div>
                  ))}
                </Carousel>
              )}
          </section>
      </div>  
      <Footer className="com-footer"/>
    </>
  );
}