let i = 1;
while (i <= 100) {
    i % 2 === 0 && console.log("While " + i);
    i++;
}

for (let j = 2 ; j <= 100 ; j += 2) {
    console.log("For " + j);
}