String.prototype.similarTo=function(text){
    var spltStr=this.split("")
    var txtSplt=text.split("")
    var corr=0
    for(let i=0;i<spltStr.length;i++){
        if(spltStr[i]=txtSplt[i]){
            corr+=1
        }
    }
    if(corr>=Math.round(spltStr.length/2)){
        return true
    }else{
        return false
    }
}
