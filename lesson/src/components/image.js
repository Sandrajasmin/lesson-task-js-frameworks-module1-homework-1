import profile from "./img/example.png"

function Image({altText}){
    return <img src={profile} alt={altText}/>
}

export default Image;