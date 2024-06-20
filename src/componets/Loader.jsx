import { Html } from "@react-three/drei"

const Loader = () => {
    return (
        <Html>
            <div className="spinner-border text-secondary" style={{"width": "3rem" ,"height": "3rem"}} role="status">
                <span className="visually-hidden" >Loading...</span>
            </div>
        </Html>

    )
}

export default Loader
