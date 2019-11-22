function C () {
}

C.prototype.x = function(){
    return 3;
};

function CC (){    
}

C.prototype.y = function() {
    return 2;
};

Object.setPrototypeOf(CC.prototype, C.prototype);

const cc = new CC();
console.log(cc.x() === 1);
console.log(cc.y() === 2);
console.log(cc instanceof C);