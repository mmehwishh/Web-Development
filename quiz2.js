let a = "crazy ";
let b = "Amazing ";
let c = "Fire ";

let d = "Engine ";
let e = "Food ";
let f = "Garments ";

let g = "Bros";
let h = "Limited";
let i = "Hub";

let r1 = Math.floor(Math.random() * (3-1+1)) + 1;
let r2 = Math.floor(Math.random() * (3-1+1)) + 1;
let r3 = Math.floor(Math.random() * (3-1+1)) + 1;



console.log(r1, r2 , r3);

// alert("Genrating Random Bussiness name : ");
let name;
if(r1==1) {
    name = a;
    if(r2==1) {
        name = name+d;
        if(r3==1) {
            name=name+g;
        } else if(r3==2) {
            name = name+h;
        } else {
            name = name+i;
        }
    } else if (r2==2) {
        name = name+e;
        if(r3==1) {
            name=name+g;
        } else if(r3==2) {
            name = name+h;
        } else {
            name = name+i;
        }
    } else {
        name = name+f;
        if(r3==1) {
            name=name+g;
        } else if(r3==2) {
            name = name+h;
        } else {
            name = name+i;
        }
    }
} else if (r1==2) {
    name = b;
    if(r2==1) {
        name = name+d;
        if(r3==1) {
            name=name+g;
        } else if(r3==2) {
            name = name+h;
        } else {
            name = name+i;
        }
    } else if (r2==2) {
        name = name+e;
        if(r3==1) {
            name=name+g;
        } else if(r3==2) {
            name = name+h;
        } else {
            name = name+i;
        }
    } else {
        name = name+f;
        if(r3==1) {
            name=name+g;
        } else if(r3==2) {
            name = name+h;
        } else {
            name = name+i;
        }
    }
} else {
    name = c;
    if(r2==1) {
        name = name+d;
        if(r3==1) {
            name=name+g;
        } else if(r3==2) {
            name = name+h;
        } else {
            name = name+i;
        }
    } else if (r2==2) {
        name = name+e;
        if(r3==1) {
            name=name+g;
        } else if(r3==2) {
            name = name+h;
        } else {
            name = name+i;
        }
    } else {
        name = name+f;
        if(r3==1) {
            name=name+g;
        } else if(r3==2) {
            name = name+h;
        } else {
            name = name+i;
        }
    }
}
console.log(name)