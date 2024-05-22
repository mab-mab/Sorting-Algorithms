


function swapPlaces(item1, item2){
    let order1 = item1.style.order;
    item1.style.order = item2.style.order;
    item2.style.order = order1;
}
// function to perfomr one step
async function performStep(k, items, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (parseInt(items[k].style.height) > parseInt(items[k + 1].style.height)) {
                swapPlaces(items[k], items[k + 1]); // Swapping order value
                [items[k], items[k + 1]] = [items[k + 1], items[k]]; // Swapping the order in the list
            }
            resolve(); // Iteration is complete, go on to the next one
        }, 1);
    });

}

// function to perform one iteration
async function performIteration(length, items, iterationIndex){
    for (let j = 0; j < (length - iterationIndex); j++) {
        if(play){
        await performStep(j,items)
        }
    }
}

async function bubbleSort(){
    document.querySelector("#play").toggleAttribute("disabled")
    let items = Array.from(document.querySelectorAll(".item"));
    let length = items.length;

    // iterations
    for (let i = 1; i < length; i++) { 
        await performIteration(length,items,i)
    }
    console.log("finished")
    document.querySelector("#amount").toggleAttribute("disabled")
    document.querySelector("#play").toggleAttribute("disabled")
}

document.querySelector("#play").addEventListener("click",()=>{bubbleSort();
    document.querySelector("#amount").toggleAttribute("disabled")
});


const value = document.querySelector("#value");
const input = document.querySelector("#amount");
input.addEventListener("input", (event) => {
  value.textContent = "Amount of Items "+ event.target.value;
  document.querySelector(".container").innerHTML = "";
  for(let i=0; i<event.target.value;i++){
    let value = Math.floor(Math.random()*500)+1;
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","item");
    newDiv.style.height = value.toString()+"px";
    newDiv.style.order = i+1;
    document.querySelector(".container").appendChild(newDiv);
}
});