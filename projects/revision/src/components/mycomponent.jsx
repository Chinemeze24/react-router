import { useContext } from "react"
import { UserContext } from "../context"

 
const MyComponent = () => {
    const user = useContext(UserContext)
    return (
        <div>myComponent</div>
    )
}
export default MyComponent