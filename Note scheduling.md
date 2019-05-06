<script>
	document.writeln("hello word")	 
</script>
第一个js引入
js ：行为、样式、结构，相分离。
变量可以理解为是存储数据的容器。
var a；（向系统申请一个房间（变量声明））
a = 100；（把100赋到a里）
缩写：var a = 100;
赋值的顺序自右向左，计算的顺序自左向右。(符合数学计算）
|true;false  |布尔值只有两个值，代表真和假。|
|undefined  |未定义值只有undefined，|
arguments
typeof():能帮助数据判断是什么类型的。
能返回6个值
数字：number，strong，boolean，object：引用值，unmanned，function：函数方法。
类型转换：是js独有的语言
举例：
var num = "1" * 1;
console.log(typepf(num) + ":" + num);//输出结果为number：1，
显示类型转换
方法1
Number（）：
//把结果数返回给变量里面 
var num = Number('123');
// 返回结果为 var num = 123;
console.log(typeof(num) + ":" + num);
// number就是为了把（）里面的数变成数字类型
parseint():
// parseInt第一点用途可以把数变成整形;
// 冲数字位往后看，一直看到非数字位结束。
var demo = "101abc";
var  num = parseInt(demo , radix); radix : 2 - 36;
// ()参数可以有两个 (deme,16)以目标进制为基底，转化成为10进制。
console.log(typeof(num) + ":" + num);
parseFlaot():
var demo = "100.2px";
// // 转换成正常的数，看到除了点以外的数字返回。
// var num = parseFloat(deme);
// console.log(typeof(num) + ":" + num)
String():
转换成字符串
var demo = true;
var num = String(demo);
console.log(typeof(num) + ":" + num);输出结果为：String：true
Boolean：
把里面的类型转换成布尔值；
var demo = true;
var num = Boolean(demo);
console.log(typeof(num) + ":" + num);
隐式类型转换：













n! = n*(n-1)!;
1。找规律
2.找出口
function mul(n){

var nam = 1;
for( var i = 1 ; i <= n ; i ++){
 nam *= i;
 }
if(n == 1){
return 1;
}
 return  n * mul(n-1);
 }

mul(5);
// // 递归;
mul(5) ==> 5 * mul(4);
 mul(4) ==> 4 * mul(3);
mul(3) ==> 3 * mul(2);
 mul(2) ==> 2 * mul(1);


// 斐波那契数列
fb(n) == fb(n -1) + fb(n - 2);
function fb(n){
if( n == 1 || n == 2){
return 1
}
return fb(n -1) + fb(n - 2); 
}
fb(5) ==> fb(4) + fb(3);

-------------------------------------------
1.任何未经声明的变量直接赋值的话就会归Window所有。
举例：
a =10 ；
--> window.a = 10;
2.全局上的任何变量即使声明了也归window所有。
var b = 10
window.b = 10
window就是全局的域
--------------------------
-------------------------------------------
function fn(a){
console.log(a);
var a = 123;
function a (){};
console.log(a);
var b = function () {}
console.log(b);
function d()  {}
}
fn(1);实参
AO{
a ： undefined;--->统一1---->function a (){};
b ： undefined;
d ：                    ----->function d()  {}
}

函数预编译发生在函数执行的前一刻
局部预编译
1.创建一个AO对象（Activation Object）（执行期上下文）
2.找函数里面的形参和变量声明；将变量和形参名作为AO属性名，值为undefined
3.将实参和形参相统一 .
4.在函数体里找到函数声明，值赋予函数体

全局的预编译：
没有第三步
1.生成了GO对象（Global Object）
GO === window


vue.js
常用的指令：
v - model     一般表单元素（input）      双项数据绑定
循环：
       v - for = "name in arr"
                       {{  name }}，
       v - for = "(k，v) in arr"
			{{k}}  
事件：
	v-on:click="函数"
