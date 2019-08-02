import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner, 
    faPlusCircle,
    faMobileAlt,
    faEnvelope,
    faMapMarkedAlt 
} 
from "@fortawesome/free-solid-svg-icons"
import { library} from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle,faMobileAlt,faEnvelope,
    faMapMarkedAlt );
}

export default Icons;