const popup2 = document.getElementById('popup2');
const submit2 = document.getElementById('submit2');
const cardInfo = document.getElementById('cardInfo');
function addpopup()
{
    document.querySelector("#popup").style.display = "block";
    document.querySelector(".container").style.filter = "blur(5px)";
    document.querySelector("#card").style.filter = "blur(5px)";
}
function closepopup()
{
    document.querySelector("#popup").style.display = "none";
    document.querySelector(".container").style.filter = "none";
    document.querySelector("#card").style.filter = "none";
}
function addpopup2()
{
    document.querySelector("#popup2").style.display = "block";
    document.querySelector(".container").style.filter = "blur(5px)";
    document.querySelector("#card").style.filter = "blur(5px)";
}
function closepopup2()
{
    document.querySelector("#popup2").style.display = "none";
    document.querySelector(".container").style.filter = "none";
    document.querySelector("#card").style.filter = "none";
}
const Tasks = [];
console.log(Tasks);
function addCard()
{
    const inp = document.getElementById('cardname').value;
    const tObject =
    {
        taskname : inp
    }
    Tasks.push(tObject);
    addCardson();
}

function addCardson()
{
    document.getElementById("empty").style.display = "none";
    cards = document.createElement("div")
    cards.setAttribute("id","child")
    cards.innerText = Tasks[Tasks.length-1].taskname
    const ExtElement = document.getElementById("card")
    ExtElement.appendChild(cards)
    const hor = document.createElement("HR");
    hor.setAttribute("id","hor");
    cards.appendChild(hor);

    const addIcon = document.createElement("i");
    addIcon.setAttribute("id","addIcon");
    addIcon.innerHTML =  `<i class="fa-solid fa-circle-plus plusIcon" id=${generate()}></i>`;
    addIcon.onclick = addpopup2
    cards.appendChild(addIcon);
    
    const trashIcon = document.createElement("i");
    trashIcon.setAttribute("id","trashIcon");
    trashIcon.innerHTML = `<i class="fa-solid fa-trash" id=${generate()}></i>`;
    cards.appendChild(trashIcon);
    
    trashIcon.onclick = deleteChild  
    
}
function deleteChild()
{
    const dump = document.getElementById("child");
    dump.parentNode.removeChild(dump);
}
function generate()
{
    return Math.random()*12
}


window.addEventListener("click",(e)=>
{
    if(e.target.classList.contains('plusIcon'))
    {
        popup2.classList.add('newpopup')
        parentNode = e.target.parentNode.parentNode
    }
})
submit2.addEventListener('click',()=>
{
    popup2.classList.remove("newpopup")
    const ptask = document.createElement("div")
  ptask.classList.add("pendingTask")
  ptask.id = "pending"

  ptask.innerHTML = `<i class="fa-solid fa-square-check" id=${generate()}></i>
                        <h6 class="scratch" >${cardInfo.value}</h6>`
                        ptask.addEventListener("click",function()
                            {
                                ptask.style.color = "red";
                                ptask.style.fontSize = "20px"
                                ptask.style.textDecoration = "line-through";
                                ptask.style.color = "red";
                                
                                
                            })

  parentNode.appendChild(ptask)
  cardInfo.value=""
})
