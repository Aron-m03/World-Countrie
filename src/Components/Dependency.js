import { useState, useEffect} from "react"

const Dependency = ()=>{
    let[rerender,setRerender]=useState(true)
    let[first,setFirst]=useState(true)
    let[second,setSecond]=useState(true)

    useEffect(()=>{
        //Rasti 1 pas cdo rerenderimi
        console.log("Komponenti u re-renderuar")
    })
    useEffect(()=>{
        //Rasi 2 vetem nje here
        console.log("Komponenti u vendos per her te pare")
    })
    useEffect(()=>{
        //Rasti 3 varesia ne nje useState
        console.log("U ndryshua first-useState")
    },[first])
    useEffect(()=>{
        //Rasti i 4 varesia nga me shum se nje useState
        console.log("U ndryshua First-UseState ose Second-UseState")
    },[first,second])


return <div>
        <button onClick={()=>{setRerender(!rerender)}}>Re-render</button>
        <button onClick={()=>{setFirst(!first)}}>Change First UseState</button>
        <button onClick={()=>{setSecond(!second)}}>Change Second UseState</button>
    </div>
}
export default Dependency