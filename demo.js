let n = 5;
let string = ""
for (let i = 1; i <= 5; i++) 
    {
        for (j = 5;j>=i;j--){
            string+=" "
        }
        for(k=0;k<i*2-1;k++)
        {
            if(i===1 || i===n)
            {string+="*"}
            else if(k===0||k===i*2-2){
                string+="*"
            }
            else{
                string+=" "
            }
                
            }
        
        string+="\n"
    }
    console.log(string)