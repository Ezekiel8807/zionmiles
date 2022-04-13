import './about.css'



const About = () =>{
    
    return(
        <div className='about'>
            <div className='row'>

                <div className='col-md-6'>
                    <div className='photo'>
                        <img src={'asset/img/a.png'} alt='about-img'/>
                    </div>
                </div>

                <div className='col-md-6'>
                    <div className='summary'>
                        <h6>Hi👋</h6>
                        <h6>I'm Folorunsho Michael,</h6>
                        <p> popular known as zion miles I am an affiliate marketer and a tutor in the field of online marketing 
                            Have been able successfully made incredibly progress in marketing and am ready to teach willing 
                            folks on how to repeat the same process and cross 6figures in very short time
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;