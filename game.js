const gameArea = document.querySelector('.gameArea');

const game = {row:7,col:8}

document.addEventListener('DOMContentLoaded', init);

function init(){
    gameArea.innerHTML = "";
    const main = createNewElement(gameArea, 'div', '','gridContainer');

    buildGrid(main);
}

function buildGrid(main){
    const dim = {x:'',y:''};
    for (let y=0;y<game.row;y++){
        dim.y += " auto";
        for(let x=0;x<game.col;x++){
            if(y==0){ dim.x += " auto";}
            const cell = y*game.col+x+1;
            createNewElement(main,'div',cell,'grid-item');
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
