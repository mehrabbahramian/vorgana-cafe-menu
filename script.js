function power(n,d){
    if(n === 0 || n=== 1){
        return 1
    }else{
        for(i = 0; i < d;i++){
            n *= n
        }
    }
    return n
}