const short = (txt:string, size:number)=>{
    if(txt.length <= size){
        return txt
    }else{
        return txt.substring(0, size)+"..."
    }
}

export default  short
