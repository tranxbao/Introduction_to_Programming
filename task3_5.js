//Print out numbers from 10 to 0 using a loop.

process.stdout.write("\n10 seconds to ignition.....starting countdown...");
for(let i=10;i>0;i--){
    process.stdout.write("\n...."+i+"....");
}
process.stdout.write("\nIGNITION!!");
process.exit();   


