import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
    render(){
        return(<div>
                <HornedBeast tital='Cat'/>
                <HornedBeast imageUrl='https://www.google.com/search?q=cat&rlz=1C1PRFI_enJO1000JO1000&sxsrf=ALiCzsbnv4J2gvVHf2rFSt2DfZCF_8-1Cw:1661152213632&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjU0fGc8tn5AhVUuKQKHXysAYoQ_AUoAXoECAEQBA&biw=1366&bih=657&dpr=1#imgrc=BVx8ZImGBh_3oM'/>
                <HornedBeast description ='a pet and cute animal '/>
        </div>)
    }
}
export default Main 