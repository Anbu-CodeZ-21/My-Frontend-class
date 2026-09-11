const myPromise = new Promise((resolve, reject) => {

    
    if(resolve){
        console.log("this promise is resolved");
        
    }else
        reject("failed")

});