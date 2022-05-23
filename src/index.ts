
import jQuery from "jquery";



let hoge : string = "----";


hoge = "あいうえお";
document.write(hoge);

jQuery(function () {
    document.write("jquery(function () {});")
});


/**
 * 型定義のあるクラス
 */
class TypescriptClass {


    /**
     * コンストラクタ
     * @param a
     * @param b
     */
    constructor(a: string, b: number) {
        console.log(a);
        console.log(b);
    }
}

let ts = new TypescriptClass("typescript", 10);
console.log(ts);

// let ts2 = new TypescriptClass(34, "ああ");