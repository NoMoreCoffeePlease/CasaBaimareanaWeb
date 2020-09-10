import React, { useState, useEffect } from 'react';
import './HomeScreen.css';
import DateRange from '../../components/DataCalendar/DateRangeInput';
import TextTransition, { presets } from "react-text-transition";
import { useHistory } from 'react-router-dom';
import MapSection from '../../components/GoogleMap/Map';
import {slideInDown, slideOutUp} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

// TO DO: Multiple-screen challenge
const TEXTS = [
    "Baimareana",
    "ta de vacanta",

];

const location = {
    address: 'Strada Vasile Alecsandri 39, Baia Mare 430302',
    lat: 47.6513159,
    lng: 23.5803408,
}

const secondary = [{
    lat: 47.658640,
    lng: 23.582119,
    title: 'Turnul lui Ștefan. Piața Cetății',
    address: 'Piața Cetății, Turnului, Baia Mare',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/nUnm4ZHgmAQYtesb9'
}, {
    lat: 47.659897,
    lng: 23.581802,
    title: 'Centrul istoric',
    address: 'Piața Millenium, Baia Mare',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/t45JDHqbDCvD74uj7'
}, {
    lat: 47.667836,
    lng: 23.571760,
    title: 'Parcul Muncipal „Regina Maria”',
    address: 'Strada Valea Roșie 6, Baia Mare',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/3uzi8JQr2yc5ksp68'
}, {
    lat: 47.661536,
    lng: 23.581295,
    title: 'Muzeul Județean de Istorie și Arheologie Maramureș',
    address: 'Strada Monetăriei 1-3, Baia Mare',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/QLAM8iAqiyvzJtEL6'
}, {
    lat: 47.657452,
    lng: 23.563862,
    title: 'Planetariul Baia Mare',
    address: 'Strada George Coșbuc 16, Baia Mare 430245',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://g.page/planetariubaiamare?share'
}, {
    lat: 47.666485,
    lng: 23.576294,
    title: 'Muzeul Satului Baia Mare',
    address: 'Strada Dealul Florilor nr. 1, Baia Mare 430165',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/9KgBNxoeFfbQ8WdT6'
}, {
    lat: 47.650354,
    lng: 23.567193,
    title: 'Muzeul de Mineralogie „Victor Gorduza”',
    address: 'Bulevardul Traian 8, Baia Mare 430212',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/7YntWn1JPipGmkRz7'
}, {
    lat: 47.647258,
    lng: 23.553216,
    title: 'Gara Baia Mare',
    address: 'Strada Gării nr. 4, Baia Mare 430043',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/H7weKp9LvmUYgLZo8'
}, {
    lat: 47.661352,
    lng: 23.466537,
    title: 'Aeroportul Internațional Maramureș',
    address: 'Strada 66, Nr. 22, Tăuții-Măgherăuș 437345',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://g.page/AIMMEU?share'
}, {
    lat: 47.656290,
    lng: 23.546862,
    title: 'VIVO! Baia Mare',
    address: 'Strada Victoriei 73, Baia Mare 430122',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/yEUNW98FdwEi1Q7K7'
}, {
    lat: 47.647073,
    lng: 23.538233,
    title: 'Baia Mare Value Centre',
    address: 'Bulevardul București nr. 53, Baia Mare 430013',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://g.page/baiamarevaluecentre?share'
}, {
    lat: 47.721335,
    lng: 23.610553,
    title: 'Lacul de Acumulare Firiza',
    address: 'Firiza 430002',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/W7B7vjZZy62g4WNz5'
}, {
    lat: 47.671376,
    lng: 23.700901,
    title: 'Lacul Albastru',
    address: 'Strada Lacului, Nr. 18, Baia Sprie 435100',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/2rvXSjVCk43UnTH4A'
}, {
    lat: 47.673337,
    lng: 23.772668,
    title: 'Lacul Bodi',
    address: 'Strada Stațiunea Mogosa, Baia Sprie 435100',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/p3gjX29CtJ7AkURX6'
}, {
    lat: 47.674194,
    lng: 23.782505,
    title: 'Statiunea Șuior',
    address: 'str. George Coşbuc, nr. 121, Stațiunea Șuior, Baia Sprie 435100',
    image: require('../../svg/room.jfif'),
    mapLink: 'https://goo.gl/maps/DvN6XXC3T7sNx27V8'
},
]
const styles= {
    slideInDown:{
        animation: "x 0.7s",
        animationName: Radium.keyframes(slideInDown, "slideInDown"),
    },
    slideOutUp:{
        animation: "x 0.27s",
        animationName: Radium.keyframes(slideOutUp, "slideOutUp"),
    },
};

export const HomeScreen = (props) => {
    const [index, setIndex] = useState(0);
    const history = useHistory();
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => (index + 1) % TEXTS.length),
            6000 // every 3 seconds
        );
    }, []);
    
    return (
        <div className='mainFrame'
        id="mainFrame"
        onScroll={()=>{
            const top = document.getElementById('mainFrame');
            const scrollButton = document.getElementById('scrollTop');
            if(top.scrollTop > 500)
                scrollButton.style.display = 'flex';
            else{
                scrollButton.style.display = 'none';
            }
        }}
        onClick={()=>props.barHandler(false)}
        
        >
            <div
                className='datePickerContainer'
                id='top'
            >
                <div className='titleAnimation'>
                    <span className="textAnimationStyle">Casa</span>

                    <span>
                        <TextTransition
                            text={TEXTS[index]}
                            springConfig={presets.default}
                            className="textAnimationStyle"
                        />
                    </span>
                </div>

                <div className='dateRangeContainer'>
                    <DateRange navigateToRoute={'/BookingStage01'} datePosition={'top'} text={"REZERVA"} />
                </div>

                <div className='roomDetailContainer'>
                    <div className='detailElement'>
                        <img src='https://picsum.photos/700/300' alt='' className='imageDetail' ></img>
                        <span className='detailElement-title'>Camere</span>

                        <button
                            onClick={() => history.push('/rooms')}
                            className='detailButton'
                        >Detalii</button>
                    </div>
                    <div className='detailElement'>
                        <img src='https://picsum.photos/702/300' alt='' className='imageDetail' ></img>
                        <span className='detailElement-title'>Restaurant</span>
                        <button
                            onClick={() => history.push('/food')}
                            className='detailButton'
                        >Detalii</button>
                    </div>
                </div>
            </div>
            {/* <Element name="myScrollToElement"> */}
                <div className="presentationFrame">
                <div id='aboutUs' className="presentationTitle">CINE SUNTEM NOI?</div>
                <div className="presentationSubTitle">Descriere despre voi, misiune, obiectiv, text atractiv.</div>
                <div className="presentationMembersContainer">
                    <div className="pictureContainerLeft"></div>
                    <div className="presentationMembersDetails">
                        <div className="leftName">Nume Prenume</div>
                        <div className="leftFunction">Functie</div>
                    </div>
                    <div className="presentationMembersDetails">
                        <div className="rightName" >Nume Prenume</div>
                        <div className="rightFunction">Functie</div>
                    </div>
                    <div className="pictureContainerRight"></div>

                </div>
                <div className='storyContainer'>
                    <div className='storyParagraphContainer'>
                        <div className = 'storyTextContainer leftParagraph'>
                            <p className = 'storySubtitle'>Subtitlu</p>
                            <p className = 'storyContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </div>
                        <img src='https://picsum.photos/350/220/' alt='' className='storyImage' />
                    </div> 
                    <div className='storyParagraphContainer'>
                        <img src='https://picsum.photos/350/220/' alt='' className='storyImage' />

                        <div className = 'storyTextContainer rightParagraph'>
                            <p className = 'storySubtitle'>Subtitlu</p>
                            <p className = 'storyContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </div>
                    </div>   
                    <div className='storyParagraphContainer'>
                        <div className = 'storyTextContainer leftParagraph'>
                            <p className = 'storySubtitle'>Subtitlu</p>
                            <p className = 'storyContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </div>
                        <img src='https://picsum.photos/350/220/' alt='' className='storyImage' />
                    </div>   
                    <div className='storyParagraphContainer'>
                        <img src='https://picsum.photos/350/220/' alt='' className='storyImage' />

                        <div className = 'storyTextContainer rightParagraph'>
                            <p className = 'storySubtitle'>Subtitlu</p>
                            <p className = 'storyContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </div>
                    </div>    
                    <div className='storyParagraphContainer'>
                        <div className = 'storyTextContainer leftParagraph'>
                            <p className = 'storySubtitle'>Subtitlu</p>
                            <p className = 'storyContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </div>
                        <img src='https://picsum.photos/350/220/' alt='' className='storyImage' />
                    </div>                      
                </div>
                <div className="test">

                    <div className="separator" />
                </div>
                <div className="presentationTitle">CE VA OFERIM?</div>
                <div className="presentationSubTitle">Descriere despre facilitati, despre tot ceea ce gasiti wow la voi.</div>
                <div className="test">
                    <button
                        onClick={() => history.push('/about-us')}
                        className='detailButton'
                    >Descoperă</button>
                </div>
                <div className="reviewsContainer">
                    <div className="reviewLeft">"A pleasant surprise. Great conditions for a low price. Nice room, very friendly hosts, good breakfast. " {<br></br>}<span className="reviewsAuthor"> - Alex</span></div>                    
                    <div className="reviewRight">"A pleasant surprise. Great conditions for a low price. Nice room, very friendly hosts, good breakfast. " {<br></br>}<span className="reviewsAuthor"> - Alex</span></div>
                </div>
                <div className="test">
                    <button
                        onClick={() => history.push('/reviews')}
                        className='detailButton'
                    >Vezi si alte review-uri</button>
                </div>
                
            </div>
            {/* </Element> */}
            <div className="presPicture">
                <div className="bmContainer"><span className='bmStyle'>BAIA MARE</span></div>
                <div className="test">
                    <button
                        onClick={() => history.push('/city')}
                        className='detailButton'
                    >DESCOPERA</button>
                </div>
            </div>

            <div className="mapsContainer">
                <MapSection location={location} zoomLevel={14} secondary={secondary} />
            </div>
  
            <div className="presPicture">
                <div className="presCaptionContainer"><span className='bmStyle'>VA ASTEPTAM LA NOI!</span></div>
            </div>
            <div className='homeFooter'>
                <div className='homeFooterContainer'>
                    <div className='menuFooterContainer'>
                        <ul className='home-listResetStyle'>
                            <li className='menuFooter-miniItem' >
                                <a
                                    href="https://anpc.ro/" target="_blank"
                                    style={{ textDecoration: "none" }}
                                >ANPC</a>
                            </li>
                            <li className='menuFooter-miniItem' onClick={() => history.push('/cookies')}>Termeni și condiții</li>
                            <li className='menuFooter-miniItem' onClick={() => history.push('/privacy')}>Politică de confidențialitate</li><br></br>
                            <li className='menuFooter-item center-item' onClick={() => history.push('/BookingStage00')}>Rezervă acum</li>
                            <li className='menuFooter-item center-item' onClick={() => history.push('/rooms')}>Camere</li>
                            <li className='menuFooter-item center-item' onClick={() => history.push('/food')}>Restaurant</li>
                            <li className='menuFooter-item center-item' onClick={() => history.push('/about-us')}>Facilități</li>
                        </ul>
                    </div>
                    <div className='contactFooterContainer'>
                        <p className='contactFooter-superTitle'>Casa Băimăreană</p>
                        <span className='contactFooter-address'>str. Vasile Alecsandri, nr. 39, Baia Mare 430306, Maramureș, România</span>
                        <p className='contactFooter-title'>contact@casabaimareana.ro</p>
                        <p className='contactFooter-title'>Telefon: +40-7xx-xxx-xxx</p>
                        <div className='contactFooter-iconContainer'>
                            <img src={require('../../svg/mail-black.svg')} alt='' className='contactFooter-emailIcon' onClick={() => history.push('/contact')} />
                            <a
                                href="https://www.facebook.com/casa.baimareana.75" target="_blank"
                                style={{ textDecoration: "none" }}
                            >
                                <img src={require('../../svg/facebook-black.svg')} alt='' className='contactFooter-fbIcon' onClick={() => history.push('')} /></a>
                        </div>
                    </div>
                </div>
                <div className='finalSeparator'></div>
            </div>
 
            <StyleRoot>
            <button
                style={styles.slideInDown}
                className="scrollTop"
                onClick={()=> document.getElementById('top').scrollIntoView({behavior: 'smooth'})}
                id='scrollTop'
            >
                <img src={require('../../svg/arrowBack-black.svg')} alt='' className='scrollTopIcon' />
                </button></StyleRoot>
        </div>
    )
}

