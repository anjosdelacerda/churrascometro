const setObjToLocalStorate = (obj, localName) =>{
    const parseObj = JSON.stringify(obj)
    localStorage.setItem(localName, parseObj)
}

export default setObjToLocalStorate