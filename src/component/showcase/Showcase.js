import './showcase.css'

const Showcase = ({image}) => {
    return(
        <div className="showcase">
            <img src={image} alt='showcase'/>
        </div> 
    )
}

export default Showcase;