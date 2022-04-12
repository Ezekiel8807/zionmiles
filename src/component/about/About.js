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
                        <h3>Hi,</h3>
                        <h3>I'm Folorunsho Michaels</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;