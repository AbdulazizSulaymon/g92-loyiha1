import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


function Card(props) {
    const state = props;

    return <div className="bg-white shadow pb-4 text-center">
        <img src="https://www.msc.org/images/default-source/msc-english/content-banner/content-hero-images-1920px-x-1080px/rs14483_istock-104669275-ocean-wave-breaking.jpg?sfvrsn=9c452f0_11" className="w-100 mb-3" alt="" />
        <h1 className="mx-4">
            {state.title}
        </h1>
        <FontAwesomeIcon icon={state.icon} className="text-secondary fs-2 my-2" />
        <p className="text-secondary mx-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero velit labore dignissimos dolore error voluptatum minus cupiditate ad delectus, quasi aspernatur eius iure accusamus ullam explicabo nostrum minima distinctio molestias?</p>
    </div>
}

export default Card;