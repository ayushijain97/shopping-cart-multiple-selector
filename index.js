 const array = [{
     name: "car",
     icon: "fas fa-car",
     isActive: false,
     count: 0,
 },
 {
    name: "truck",
    icon: "fas fa-truck",
    isActive: false,
    count: 0,
},
{
    name: "laptop",
    icon: "fas fa-laptop",
    isActive: false,
    count: 0,
},
{
    name: "cube",
    icon: "fas fa-cube",
    isActive: false,
    count: 0,
},
{
    name: "lock",
    icon: "fas fa-lock",
    isActive: false,
    count: 0,
},
{
    name: "key",
    icon: "fas fa-key",
    isActive: false,
    count: 0,
},
{
    name: "car",
    icon: "fas fa-car",
    isActive: false,
    count: 0,
},
{
    name: "car",
    icon: "fas fa-car",
    isActive: false,
    count: 0,
},
 ];
 let newArray = [];


const renderPage = (data) => {
    const markup = `<div class="sub-section firstRow">
                        <div class="sub">
                            <i class="${data.icon}"></i>
                            <h3 class="content"><span class="content-count">${data.count}</span>-${data.name}</h3>
                         </div>
                         <div class="roww">
                            <div class="arrow-up">
                                  <i class="fas fa-chevron-up"></i>
                            </div>
                             <div class="arrow-down">
                                  <i class="fas fa-chevron-down"></i>
                             </div>
                        </div>
                     </div>
                     `;
    document.querySelector(".section").insertAdjacentHTML("beforeend",markup)
}

 window.onload = function (){

        //  Rendering the page
        array.forEach(cur => renderPage(cur));

        // selecting the items
        let element = document.querySelectorAll(".sub");
            for (let i=0;i<element.length;i++) {
            element[i].addEventListener("click", function(){
                let cur = array[i];
                if(cur.count > 0){
                    if(cur.isActive)
                        {
                            element[i].classList.remove("selected");
                            cur.isActive= false;
                            newArray.pop(cur);
                        
                        }
                    else{
                            
                                const el = element[i];
                                el.classList.add("selected");
                                value =  cur.count;
                                cur.isActive = true;
                                newArray.push(cur);
                                console.log(cur.isActive);
                        }
                }
            },array[i]);
        }


        //incrementing the quantity of the selected item

        let upward = document.querySelectorAll(".arrow-up");
        let el =   document.querySelectorAll(".content-count");

        for(let j=0 ; j<upward.length;j++)
        {
            upward[j].addEventListener("click", () => {
                let cur = array[j];
                cur.count+=1;
            el[j].innerHTML = cur.count;
                
            },array[j])

        }


        //decrementing the quantity of the slected item

        let downward = document.querySelectorAll(".arrow-down");
        let al =   document.querySelectorAll(".content-count");

        for(let j=0 ; j<downward.length;j++)
        {
            downward[j].addEventListener("click", () => {

                let cur = array[j];
                if(cur.count >= 1){
                    cur.count-=1;
                    al[j].innerHTML = cur.count;
                }
                
            },array[j])
        }

        //checking out and the items will be added to the cart.

        document.querySelector(".btn").addEventListener("click",()=>{
            if(newArray.length > 0)
            {
                    alert("You have added " +" " + newArray.map(function(cur){
                        return cur.count+ "-" + cur.name;
                    }) + " in your cart list");

                    array.map((cur,index) => {
                        if(cur.isActive) {
                                cur.isActive = false;
                                element[index].classList.remove("selected");
                            }
                        });
                        newArray = [];
            }else{
                alert("Select atleast one item");
            }
        },newArray) 
  };



 


