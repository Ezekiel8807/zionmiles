import './history.css'

const History = () => {
    return(
        <div className="history">
            <div className='row'>
                <div className='col-md-4'>
                    <div className='image-con'>
                        <img src='/asset/img/f.jpeg' alt='me'/>
                    </div>
                </div><br/>

                <div className='col-md-4'>
                    <div className='image-con'>
                        <img src='/asset/img/g.jpeg' alt='you'/>
                    </div>
                </div><br/>

                <div className='col-md-4'>
                    <div className='image-con'>
                    <img src='/asset/img/e.jpeg' alt='wallet'/>
                    </div>
                </div><br/>

            </div><br/>
        </div> 
    )
}

export default History;