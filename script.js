
function newdivisible (divis) {
    result = [ ]
    for (i = 0; i <= 250; i++) {
        if (i % 2 === 0)
            if (i % 3 === 0)
                if (i % 3 === 0)
                    result.push('yu-gi-oh');
                else
                    result.push('yu-gi');
    
            else
                if (i % 5 === 0)
                    result.push('yu-oh');
                else
                    result.push('yu');
    
        else if (i % 3 === 0)
            if (i % 5 === 0)
                result.push('gi-oh');
            else
                result.push('gi');
    
        else if (i % 5 === 0)
            result.push('oh');
            
        else
            result.push(i);
    }
    return result;
}
console.log(newdivisible(100));
console.log(newdivisible(300));



