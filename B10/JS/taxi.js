function cal_distance(x)
{
    let total = 0;
    for(let i = 1; i <= x; i++)
    {
        if(i<=1){
            total += 15000;
            continue;
        }
        else if( 1 < i && i <= 5)
        {
            total += 13500;
            continue
        }
        else {total += 11000; 
            continue;
        }

    }
    if ( x > 120 )
    {
        total = total * 0.9;
    }
    return total;
}

console.log(cal_distance(5));