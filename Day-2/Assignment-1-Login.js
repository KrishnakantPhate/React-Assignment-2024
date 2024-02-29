import { useState } from "react";



function Login(){

    const [uid,setUid] = useState("");
    const [pwd,setPwd] = useState("");
    const [total ,setTotal]= useState("");


    function updateTotal(event){
        alert(uid);
        
        if(uid=="admin" && pwd=="pppp"){
            setTotal("The Admin password is correct");
            // alert("tcorrect")
            
        }
        else{
            setTotal("error")
        }

    }

    

    return (
    
    <><h3>developing Login</h3>
    
    Username : <input type="text" onChange={(e) => setUid(e.target.value)} /> <br></br>

    Psw   : <input type="text" onChange={(e) => setPwd(e.target.value)}/> <br></br>

    <button onClick={updateTotal}>Get Total</button>
    <p>{total}</p>
    
    
    </>

    
    );
}

export default Login;

