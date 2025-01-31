    function checker(){
        const num=document.getElementById("num").value;
        const get=document.getElementById("get");   
        try{
            if(num.trim() === "")
                throw "Empty data.";
            
            if(isNaN(num)) throw "Not Number";
            const numNumber = number(num);
            if(numNumber<5) throw "less Number";
            if(numNumber>10) throw "too Heavy Number";

            get.innerHTML = "Input is valid!";

        }
        catch(err)
        {
            get.innerHTML="Input is " +err;
        }
    }

document.querySelector("button").addEventListener("click",function(){
    checker();
});
