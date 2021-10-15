import React, {useState,useEffect} from 'react';
import { useWindowScroll } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'




library.add(fab, faArrowUp)


const ScrollTopButton = ()=>{
        const {y : pageYOffset} = useWindowScroll();
        const [visible, setVisibility] = useState(false)

        useEffect(()=>{
            if(pageYOffset >400){
                setVisibility(true);
            }else{
                setVisibility(false);
            }
        },[pageYOffset]);

        const scrollToTop =()=>window.scrollTo({top:0, behavior: "smooth" })

        if(!visible){
            return false;
        }


        return( 
            <div>
            <div className="scrollto-top" onClick={scrollToTop }>
            <FontAwesomeIcon icon={faArrowUp}  className="scrollbar"/>
            </div>
            </div>
        )
}
export default ScrollTopButton;   