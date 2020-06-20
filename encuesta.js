   function seleccionprim(){
    let seleccion2=document.getElementById("ID_2")
    let seleccion_2_2=seleccion2.options[seleccion2.selectedIndex].value
    document.getElementById("ID_2_2").value=seleccion_2_2
   }
   function ids(){
      let textarea=document.getElementById("textarea")
         let ID_1=document.getElementById("ID_1")
         textarea.value+=ID_1.value+"\n"
         let ID_2=document.getElementById("ID_2")
         switch (ID_2.value){
            case "Aries":textarea.value+=1+" "+ID_2.value+"\n";break
            case "Tauro":textarea.value+=2+" "+ID_2.value+"\n";break
            case "Geminis":textarea.value+=3+" "+ID_2.value+"\n";break
            case "Cancer":textarea.value+=4+" "+ID_2.value+"\n";break
            case "Leo":textarea.value+=5+" "+ID_2.value+"\n";break
            case "Virgo":textarea.value+=6+" "+ID_2.value+"\n";break
            case "Libra":textarea.value+=7+" "+ID_2.value+"\n";break
            case "Escorpio":textarea.value+=8+" "+ID_2.value+"\n";break
            case "Sagitario":textarea.value+=9+" "+ID_2.value+"\n";break
            case "Capricornio":textarea.value+=10+" "+ID_2.value+"\n";break
            case "Acuario":textarea.value+=11+" "+ID_2.value+"\n";break
            case "Piscis":textarea.value+=12+" "+ID_2.value+"\n";break
         }
         let ID_3=document.getElementsByName("radio_1")
         ID_3.forEach(radios=>{
            if(radios.checked===true){
               textarea.value+=radios.value+"\n"
            }
         })
         let ID_4=document.getElementsByName("radio_2")
         ID_4.forEach(radios=>{
            if(radios.checked===true){
               textarea.value+=radios.value+"\n"
            }
         })
         let ID_5=document.getElementsByName("radio_3")
         ID_5.forEach(radios=>{
            if(radios.checked===true){
               textarea.value+=radios.value+"\n"
            }
         })
         let ID_6=document.getElementById("ID_6")
         textarea.value+=ID_6.value+"\n"
         let ID_7=document.getElementById("ID_7")
         textarea.value+=ID_7.value+"\n"
         let ID_8=document.getElementById("ID_8")
         textarea.value+=ID_8.value+"\n"
         let ID_9=document.getElementById("ID_9")
         textarea.value+=ID_9.value+"\n"
         let ID_10=document.getElementById("ID_10")
         textarea.value+=ID_10.value+" "
         let ID_10_1=document.getElementById("ID_10_1")
         textarea.value+=ID_10_1.value+"\n"
   }
   let submitj=document.getElementById("submit")
   submitj.addEventListener("click",()=>{
      let textarea=document.getElementById("textarea")
      textarea.value=""
      ids()
   })
   
      

   
   