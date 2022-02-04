const gameArea = document.querySelector('.gameArea');

const game = {
    row:7,
    col:8,
    arr:[],
    ani:{},
    max:25,
    actives:0,
    inplay:false,
    gameBtn:{}
}

document.addEventListener('DOMContentLoaded', init);

function init(){
    gameArea.innerHTML = "";
    game.gameBtn =  createNewElement(gameArea, 'button', 'Start','btn')

    game.gameBtn.addEventListener('click',() =>{
       if(game.gameBtn.textContent =='Start'){
           game.inplay = true;
           game.ani = requestAnimationFrame(startGame);
          (startGame);
          game.gameBtn.textContent = "Stop";
       } else{
           cancelAnimationFrame(game.ani);
           game.gameBtn.textContent = "Start";
           game.inplay = false;
       }
       

    })
    const main = createNewElement(gameArea, 'div', '','gridContainer');
    buildGrid(main);
}


function startGame(){
    const total = game.max > game.arr.length ? game.arr.length : game.max
    if(game.actives < total){
        makeActive(makeSelect());

    }

    if(game.inplay){
        game.ani = requestAnimationFrame(startGame)
    }
}  

function makeSelect(){
    const sel = Math.floor(Math.random()*game.arr.length); 
    return game.arr[sel]; 
}

function makeActive(el){
    if(el.classList.contains('active')){
        console.log('Already there');
        console.log(el);
        return makeActive(makeSelect());

    }else{
        game.actives++
        const timer = Math.floor(Math.random()*4000)+1000
        el.classList.add('active');
        setTimeout(removeActive,timer,el);

        return true;
    }
    
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

            el.addEventListener('click',hitButton)
            game.arr.push(el);
        }
    }

    main.style.gridTemplateColumns = dim.x;
    main.style.gridTemplateRows = dim.y;
}


function hitButton(e){
    const el = e.target;
    console.log(el);
    if(el.classList.contains('active')){
        console.log('Hit');
        removeActive(el);
    } else{
        console.log('Miss')
    }

}

function createNewElement(parent,ele,html,myClass){
    const el = document.createElement(ele);
    el.innerHTML = html;
    el.classList.add(myClass);
    parent.append(el);
    return el;
}
