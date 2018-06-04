function icyHot(a,b){
    return (a < 0 && b > 100 || b < 0 && a > 100);
};

icyHot(120, -1);