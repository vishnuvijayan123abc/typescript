interface oninit{
    ngoninti()
}
interface onchange{
    ngonchange()
}


class Mycomponent implements oninit,onchange{
    ngoninti() {
        console.log("ngonint");
        
    }
    ngonchange() {
        console.log("change");
        
    }
}