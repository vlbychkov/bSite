import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
// node_modules/react-image-gallery/styles/scss/image-gallery-no-icon.scss
// node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css
import ImageGallery from 'react-image-gallery';
import './css/boa.css';
import auth1 from './images/auth-1.jpg';
import auth2 from './images/auth-2.jpg';
import auth3 from './images/auth-3.jpg';
import auth4 from './images/auth-4.jpg';
import auth5 from './images/auth-5.jpg';


const images = [
    {
      original: auth1,
      showPlayButton: false
    },
    {
      original: auth2,
      showPlayButton: false
    },
    {
      original: auth3,
      showPlayButton: false
      
    },
    {
        original: auth4,
        showPlayButton: false
      },
      {
        original: auth5,
        showPlayButton: false
      },
  ];


class BOA extends React.Component {

    render () {
        
        return (
            <div className="boa-all">
                <div className="div-all-2">
                    <h1 className="h1-boa">Sic parvis magna</h1>
                    <div className="img-and-abt">   
                        {/* <div className='img-div cs-style-2'>
                            <figure className="fig-img">
                                <div className="img-trans-auth">             
                                    <img src={this.state.auth} alt="" className="img-auth"/>  
                                    <figcaption className="fig-img-1">
                                    <button className="mark marker-1" onClick={this.clickImgBack}>>
                                    </button><button className="mark marker-2" onClick={this.clickImgForward}>></button>
                                </figcaption></div>
                                </figure>           
                        </div> */}
                        <ImageGallery items={images}/>
                        <div className="about-auth-div">
                            <h1 className="abt-auth-h1">Lorem Ipsum</h1>
                            <p className="abt-auth-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus commodo gravida. 
                            In nisi nibh, iaculis id vulputate eu, lacinia eu urna. Nam mattis nec risus a vulputate. Class aptent.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus commodo gravida. 
                            In nisi nibh, iaculis id vulputate eu, lacinia eu urna. Nam mattis nec risus a vulputate. Class aptent.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus commodo gravida. 
                            In nisi nibh, iaculis id vulputate eu, lacinia eu urna. Nam mattis nec risus a vulputate. Class aptent.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BOA;