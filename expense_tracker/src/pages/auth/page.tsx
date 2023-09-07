import { auth,provider } from "../../configs/firebase.config"
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
export default function Auth() {
    const navigate = useNavigate()

    const signInWithGoogle = async()=>{
        const result = await signInWithPopup(auth, provider)
        const authInfo={
            userID:result.user.uid,
            name:result.user.displayName,
            profilePhoto:result.user.photoURL,
            isAuth:true
        }
        localStorage.setItem("auth", JSON.stringify(authInfo))
        navigate('/expense-tracker')
        
    }
    return (
        <div>
            <h1>Auth</h1>
            <p>Sign in with Google to continue</p>
            <button
                onClick={signInWithGoogle}
            >Sign in with google</button>
        </div>
    )
}
    
