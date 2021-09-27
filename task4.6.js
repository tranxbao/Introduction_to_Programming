/*Create a 5x5 Battleship game using a multidimensional array. Use asterisks to mark 
the ships. Ask the user for coordinates to shoot and give feedback to the user 
whether they hit a ship or not. Keep asking for as long as there are ships left.
 Keep count of how many shots the player needed.*/

 /*let matrix = new Array();
 for(let i = 0; i < 5; i++) {
matrix[i] = new Array('*', '*','*','*','*' );
}*/

const size_of_matrix = 5 ;

let matrix=[];
for(let i=0;i<size_of_matrix;i++){
    for (let j=0;j<size_of_matrix;j++){
matrix[i]= new Array('');
    }
}
matrix[1][1]= '*';
matrix[2][1]= '*';
matrix[3][1]= '*';
matrix[4][2]= '*';
matrix[4][3]= '*';
matrix[4][4]= '*';
let ship_num = 6;
let shot_num = 0;
let counter = 0;
//let x,y;

process.stdout.write('Enter x and y coordinates separated by space:');
process.stdin.on('data',function(input){
    let input_num = input.toString().trim().split(' ');
    let x = Number(input_num[0]);
    let y = Number(input_num[1]);
    if(x>size_of_matrix-1||y>size_of_matrix-1){
        process.stdout.write('out of range, please enter 0-4');
    }else{
        if(matrix[x][y]=='*'){
        process.stdout.write('you hit a ship.\n');
        matrix[x, y]= ' ';
        counter++;
    }else{
        process.stdout.write('You missed.\n');
    } 
    shot_num++;
    }
    if(counter < ship_num){
        process.stdout.write('Enter x and y coordinates separated by space:');
    }else {
        process.stdout.write('All ships sunk! You need '+shot_num+' shots');
        process.exit();
    }

});

//console.table(matrix);

