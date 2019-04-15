function heeHaw(index)
{
    if(index >=1){
        for(let i=1; i <= index; i++)
        {
            if(i % 3 === 0 && i % 5 !== 0){
                console.log("Hee!");
            }
            if(i % 3 !== 0 && i % 5 === 0){
                console.log("Haw!");
            }
            if(i % 3 === 0 && i % 5 === 0){
                console.log("Hee Haw!");
            }
            if(i % 3 !== 0 && i % 5 !== 0){
                console.log(i);
            }
        }
    }

    else{
        console.log("Number is less than 1, cannot process.");
    }
}
