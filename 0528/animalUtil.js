function Dog(str){
    this.name=str;
    this.changeName=f;
    this.toString=f2;
    }
    function f(str){
    this.name=str;
    }
    function f2(){ return "개,"+this.name; }
    function Cat(str,n){
    this.name=str;
    this.age=n;
    this.toString=f3;
    }
    function f3(){
    return "고양이,"+this.name+","+this.age;
    }