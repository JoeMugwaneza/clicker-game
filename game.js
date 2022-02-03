const gameArea = document.querySelector('.gameArea');

const game = {
    row:7,
    col:8,
    arr:[],
    ani:{},
    max:5,
    actives:0
}

document.addEventListener('DOMContentLoaded', init);

function init(){
    gameArea.innerHTML = "";
    const main = createNewElement(gameArea, 'div', '','gridContainer');
    buildGrid(main);

    game.ani = requestAnimationFrame(startGame)
}


function startGame(){
    if(game.actives < game.max){
        makeActive();

    }
    game.ani = requestAnimationFrame(startGame)
}  

function makeActive(){
    game.actives++
    const sel = Math.floor(Math.random()*game.arr.length); 
    const timer = Math.floor(Math.random()*4000)+1000
    const myEle = game.arr[sel]; 
    myEle.classList.add('active');

    setTimeout(removeActive,timer,myEle)
}


function removeActive(myEle){
    console.log(myEle);
    myEle.classList.remove('active');
    game.actives--;
}

function buildGrid(main){
    const dim = {x:'',y:''};
    for (let y=0;y<game.row;y++){
        dim.y += " auto";
        for(let x=0;x<game.col;x++){
            if(y==0){ dim.x += " auto";}
            const cell = y*game.col+x+1;
            const el = createNewElement(main,'div',cell,'grid-item');
            game.arr.push(el);
        }
    }

    main.style.gridTemplateColumns = dim.x;
    main.style.gridTemplateRows = dim.y;
}

function createNewElement(parent,ele,html,myClass){
    const el = document.createElement(ele);
    el.innerHTML = html;
    el.classList.add(myClass);
    parent.append(el);
    return el;
}
