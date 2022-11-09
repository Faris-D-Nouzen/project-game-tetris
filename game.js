function App(){
    var canvas = document.getElementById('container');
    this.ctx = canvas.getContext('2d');

    //setting up column and rows
    this.cols = 20;
    this.rows = 25;

    this.shape = [
        [1, 1, 1, 1]//line
        [1, 1, 0, 0, //cube
        1, 1]
        [1, 1, 1, 0,//letter L
        1],
        [1, 1, 1, 0,//letter L
        0, 0, 1],
        [1, 1, 0, 0,//shape Z
        0, 1, 1],
        [0, 1, 1, 0,//shape s
        1, 1],
        [0, 1, 0, 0,//shape T
        1, 1, 1]
    ]
    this.colors = ['#f44336','#8bc34a','#9c27b0','#ffc107','#2196f3','#607d8b','#795548'];

    //setting up position
    this.currentX = 9;
    this.currenty = 0;

    this.current =[];
    this.board =[];
    this.lose = false;
    this.score = 0;   
}

App.prototype.newShape =function(){
var choose =Math.floor(math.random() * App.shape.length);
var shape =app.shape[choose];

app.current =[];

//console.Log('block choosen = '+choose);

for (var y = 0; y < 4; ++y){
    app.current[y] = [];
    for(var x = 0 ; x < 4; ++x){
        var i = 4 * y + x;
        if(typeof shape[i] != 'undefined' && shape[i]){
            app.current[y][x] = choose + 1;
        }else{
            app.current[y][x] = 0;
        }
    }

}
app.currentY = 0;
app.currentX = 8;

//debug current block
//console.log (app.current);
}
app.prototype.render = function(){
    //get element canvas
    var canvas =document.getElementById('container');
    var w =canvas.width;
    var h =canvas.height;

    app.block_width = w/app.cols;
    app.block_height = h/app.rows;

    this.ctx.clearRect(0, 0, w, h);
    this.ctx.strokeStyle = "#000";
    for(var x = 0; x < app.cols; ++x){
        for (var y = 0 ; y < app.rows; ++y){
            if(app.board[y][x]){
                this.ctx.fillStyle = app.colors[app.board[y][x] - 1];
                app.drawBlock(x, y);
            }
        }
    } 
    this.ctx.strokeStyle = '#000';
    for(var y = 0; y < 4; ++y){
        for (var x = 0; x < 4; ++x){
            if(app.current [y][x]){
                this.ctx.fillStyle =app.colors[app.current[y][x] -1];
                app.drawBlock(app.currentX + x,app.currentY + y);
            }
        }
    }

}
app.prototype.drawBlock = function(x, y){
    this.ctx.fillRect(app.block_width =x,app.block_height * y, app.block_height)
    this.ctx.strokeRect(app.block_width =x,app.block_height * y, app.block_height)
}

