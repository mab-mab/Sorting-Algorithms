

for(let i=0; i<100;i++){
    let value = Math.floor(Math.random()*500)+1;
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","item");
    newDiv.style.height = value.toString()+"px";
    newDiv.style.order = i+1;
    document.querySelector(".container").appendChild(newDiv);
}


function swapPlaces(item1, item2){
    let order1 = item1.style.order;
    item1.style.order = item2.style.order;
    item2.style.order = order1;
}

async function bubbleSort() {
    let n = document.querySelectorAll(".item").length;
    let items = Array.from(document.querySelectorAll(".item"));
    let delay = 1;
    active1 = items[0];
    async function performIteration(b) {
        for (let k = 0; k < (n - b); k++) {
            //promise to complete one iteration before the next one can start
            await new Promise(resolve => {
                setTimeout(() => {
                    if (parseInt(items[k].style.height) > parseInt(items[k + 1].style.height)) {
                        active1.classList.remove("active1");
                        active1 = items[k];
                        active1.classList.add("active1");
                        swapPlaces(items[k], items[k + 1]); // swaping order value
                        [items[k], items[k + 1]] = [items[k + 1], items[k]]; // swapping the order in the list
                    }
                    resolve(); // iteration is complete, go on to the next one
                }, delay);
                
            });
            
        }

        if (b === n - 1) {
            console.log("Sorting complete!");
            return;
        } else {
            await performIteration(b + 1);
        }
    }

    await performIteration(1);
}

async function bubbleSortReverse() {
    let n = document.querySelectorAll(".item").length;
    let items = Array.from(document.querySelectorAll(".item"));
    let delay = 0;
    active1 = items[0];
    async function performIteration(b) {
        for (let k = 0; k < (n - b); k++) {
            //promise to complete one iteration before the next one can start
            await new Promise(resolve => {
                setTimeout(() => {
                    if (parseInt(items[k].style.height) < parseInt(items[k + 1].style.height)) {
                        active1.classList.remove("active1");
                        active1 = items[k];
                        active1.classList.add("active1");
                        swapPlaces(items[k], items[k + 1]); // swaping order value
                        [items[k], items[k + 1]] = [items[k + 1], items[k]]; // swapping the order in the list
                    }
                    resolve(); // iteration is complete, go on to the next one
                }, delay);
                
            });
            
        }

        if (b === n - 1) {
            console.log("Sorting complete!");
            return;
        } else {
            await performIteration(b + 1);
        }
    }

    await performIteration(1);
}

function bubbleSortInstant() {
    let comparisons = 0;
    let n = document.querySelectorAll(".item").length;
    let items = Array.from(document.querySelectorAll(".item"));

    for (let b = 1; b < n; b++) {
        for (let k = 0; k < (n - b); k++) {
            comparisons++;
            if (parseInt(items[k].style.height) > parseInt(items[k + 1].style.height)) {
                swapPlaces(items[k], items[k + 1]);
                [items[k], items[k + 1]] = [items[k + 1], items[k]]; // Swap items in the array to maintain logical order
            }
        }
    }

    console.log("Sorting complete!");
    console.log(comparisons)
}

// Call bubbleSort to start the sorting process

setTimeout(bubbleSortInstant, 2000)


