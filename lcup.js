export function lcup (action, input) {
    if (action == "minimum"){
        const arr = [10 , 1 , 100];

        const min = Math.min(...arr);
        
        return min;

    } if (action == "maximum") {
        const arr = [10 , 1 , 100];

        const max = Math.max(...arr);

        return max;
    }
    
}