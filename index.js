String.prototype.similarTo=function(text){
    var corr=0
    for(let i=0;i<this.split("").length;i++){
        if(this.split("")[i]=text.split("")[i]){
            corr+=1
        }
    }
    if(corr>=this.split("").length/2){
        return true
    }else{
        return false
    }
}
