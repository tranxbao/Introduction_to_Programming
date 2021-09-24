//Print out multiplication tables for numbers 1-10 using a loop. Use nested for
//loops

for(let i =0;i<10;i++){
    process.stdout.write("\nMulplication table for "+i+"\n");
    for(let j=0;j<10;j++){
    process.stdout.write(+i+"*"+j+"="+i*j+".\n")
}

process.stdout.write("\n");

}