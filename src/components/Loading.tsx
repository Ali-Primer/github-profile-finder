import loading from '../assets/loader/loader.webm'

const Loading = () => {
    return(
        <div className="w-full h-full flex justify-center items-center">
            <video loop autoPlay muted className='h-full'>
                <source className='h-full' src={loading} type="video/webm"/>
            </video>
        </div>
    )
}

export default Loading;