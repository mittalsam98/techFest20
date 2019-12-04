import React, { Component } from 'react'
import Classes from './Home.module.css';
import satellite from '../../assests/image/satellite/satellite-communications-cartoon-icon-vector-73557.png';
import GlitchClip from 'react-glitch-effect/core/Clip';
import Glitchify from 'react-glitchify';


export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };


    render() {
        let size;
        const { width } = this.state;
        if (width < 350) {
            size = "3em";
        }
        else if (width < 500) {
            size = "2rem";
        }
        else if (width < 800) {
            size = "3rem";
        }
        else {
            size = "4rem";
        }


        return (


            <div className={Classes.home}>
                <div className={Classes.twinkling}></div>
                <div className={Classes.stars}>
                    <div className={Classes.main}>
                        <div className={Classes.star_anim_1}></div>
                        <div className={Classes.star_anim_2}></div>
                        <div className={Classes.star_anim_3}></div>
                        <div className={Classes.star_anim_4}></div>
                        <div className={Classes.star_anim_5}></div>

                        {/* <img className={Classes.logo} src={logo} alt="tFLogo" width="90px" /> */}

                        {/* <header>
                            <div className={Classes.links}>
                                <a href="/">ABOUT</a>
                                <a href="/">GALLARY</a>
                                <a href="/">SPONSORS</a>
                                <a href="/">CONTACT</a>
                            </div>
                        </header> */}

                        <img className={Classes.satellite} src={satellite}
                            alt="satelliteImage" width="250px" />

                        <div className={Classes.textWrapper} >
                            <div className={Classes.text}>
                                <Glitchify className={Classes.tF} font="Orbitron" fontSize={size} steps={30} background="rgba(0,0,0,0)" color="white">techFEST'20</Glitchify>
                                <GlitchClip iterationCount="infinite" duration='3s'><p className={Classes.coming}>coming soon</p></GlitchClip>
                            </div>
                        </div>


                        <div className={Classes.mars}>
                            <div></div>
                        </div>
                    </div>
                    <div className={Classes.about} >
                        <h2>ABOUT</h2>
                        <article>
                            
                            Machines are marvels, meticulously designed to provide society with time, comfort and a helping aid to
                            contemplate the wonders of the universe. The world is changing at a rapid pace, so are the machines we are
                            creating. techFEST presents a platform where inquisitive minds are invited to take their experience from the
                            past, execute the ideation in the present and thrive in the endeavours of future. The stage is set. Learn,
                            create, innovate and most importantly don’t hesitate. Revamp your knowledge. Level up and upgrade yourself
                            in
                            erratic competitions. Lighten up your soul and heart while attending our breathtaking shows. Witness the
                            events
                            that’ll fulfil your wishes and open up the gates to a developing realm. Come aboard as we set sail to the
                            future
                            with techFEST’20.
                        </article>
                    </div>
                    <div className={Classes.container}>
                        <div className={Classes.card}>
                            <h3 className={Classes.title}>Card 1</h3>
                            <div className={Classes.bar}>
                                <div className={Classes.emptybar}></div>
                                <div className={Classes.filledbar}></div>
                            </div>
                        </div>
                        <div className={Classes.card}>
                            <h3 className={Classes.title}>Card 2</h3>
                            <div className={Classes.bar}>
                                <div className={Classes.emptybar}></div>
                                <div className={Classes.filledbar}></div>
                            </div>
                        </div>
                        <div className={Classes.card}>
                            <h3 className={Classes.title}>Card 3</h3>
                            <div className={Classes.bar}>
                                <div className={Classes.emptybar}></div>
                                <div className={Classes.filledbar}></div>
                            </div>
                        </div>
                    </div>

                </div>

                
            </div>
        )
    }
}
