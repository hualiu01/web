# PHP - Hypertext preprocessor (超文本预处理器)

1. About
    - PHP原始为Personal Home Page的缩写，
    现在已经正式更名为 "PHP: Hypertext Preprocessor"
    - PHP 是一种创建 __动态交互性站点__ 的强有力的通用 __开源__  __服务器端脚本语言__。
    所以, PHP 脚本必须在在服务器上执行。直接用浏览器打开PHP文件会报错。
    - PHP 文件可包含文本、HTML、JavaScript代码和 PHP 代码
    - PHP 代码在服务器上执行，结果以纯 HTML 形式返回给浏览器

2. PHP 能做什么？
    - 通俗来说，PHP可以开发网站、开发app，基本上作为新手的你能想到的程序都能够用php开发。
    通过 PHP，您不再限于输出 HTML。您可以输出图像、PDF 文件，甚至 Flash 电影。
    您还可以输出任意的文本，比如 XHTML 和 XML。
    - 具体来说
        - 可以生成动态页面内容
        - 可以创建、打开、读取、写入、关闭服务器上的文件
        - 可以收集表单数据
        - 可以发送和接收 cookies
        - 可以添加、删除、修改您的数据库中的数据
        - 可以限制用户访问您的网站上的一些页面
        - 可以加密数据
    - PHP的确能做任何事，但 __最主要的应用__，就是与数据库交互来开发web应用，
    而数据库中mysql是目前公认和php兼容最好的，也是用的最多的组合。

3. Manual
    - install
    - [w3c school(china) tutorial](https://www.w3cschool.cn/php/php-tutorial.html)

4. [Super Global Variables](https://www.w3cschool.cn/php/php-superglobals.html) :
    - `$_GET` & `$_POST` & `$_REQUEST`
        - html side:
            ```
            <input name="user" ... value="<? echo $_POST["user"];?>">

            <form action="welcome.php" method="post">
                Name: <input type="text" name="fname">
                Age: <input type="text" name="age">
                <input type="submit">
            </form>
            ```
        - to avoid user typo which includes html special char or java script,
        which may ruin the rendering of the whole page. You can do this:
          ```
          <input name="user" ... value="<? echo htmlspecialchars($_POST["user"]);?>">
          ```
            `htmlspecialchars()` 函数把一些预定义的字符转换为 HTML 实体。
            预定义的字符是：& （和号） 成为 &amp;" （双引号） 成为 &quot;
            ' （单引号） 成为 &#039;< （小于） 成为 &lt;> （大于） 成为 &gt;
        - For More detailed Html form verification in PHP, see
        [PHP 完整表单实例](https://www.w3cschool.cn/php/7t2befl5.html)
    - `$_SESSION`: you, as a programmer, can put __any key value pairs__.
    Such as, the item you put in your cart, and the amount of them.
        - 您在计算机上操作某个应用程序时，您打开它，做些更改，然后关闭它。
        这很像一次对话（Session）。计算机知道您是谁。它清楚您在何时打开和关闭应用程序。
        然而，在因特网上问题出现了：由于 HTTP 地址无法保持状态，
        Web 服务器并不知道您是谁以及您做了什么。PHP session 解决了这个问题，它通过在服务器上存储用户信息以便随后使用
        比如用户名称、购买商品等）。然而，会话信息是临时的，在用户离开网站后将被删除。
        如果您需要永久存储信息，可以把数据存储在数据库中。
        - Session 的工作机制是：为每个访客创建一个唯一的 id (UID)，并基于这个 UID 来存储变量。UID 存储在 cookie 中，或者通过 URL 进行传导。
        - put `session_start()` on each php files that uses var `$_SESSION`;
        session_destroy() 将重置 session，您将失去所有已存储的 session 数据。
        - example
            ```
            <?session_start();?>
            ...
            <?@_SESSION["authenticated"]?>
            ```
            Note: the `@` sign is to suppress error message
    - `$_COOKIE`: cookie 是一种在远程浏览器端储存数据并以此来跟踪和识别用户的机制，
    PHP 透明地支持 HTTP cookie。
        ```
        ---login.html---
        <?php
        $expire=time()+60*60*24*30;
        setcookie("user", "Alex Porter", $expire); // setcookie() 函数必须位于 <html> 标签之前。
        ?>`

        ---welcome.html---
         <?php
         if (isset($_COOKIE["user"]))
         echo "Welcome " . $_COOKIE["user"] . "!<br>";
         else
         echo "Welcome guest!<br>";
         ?>
        ```
        如果您的应用程序需要与不支持 cookie 的浏览器打交道，那么您不得不使用其他的办法在您的应用程序中的页面之间传递信息。Like `$_POST`
    - `$_SERVER`. $_SERVER 是一个包含了诸如头信息(header)、路径(path)、
    以及脚本位置(script locations) 等等信息的数组。这个数组中的项目由 Web 服务器创建。
    不能保证每个服务器都提供全部项目；服务器可能会忽略一些，或者提供一些没有在这里列举出来的项目。
        - `$_SERVER['PHP_SELF']` 当前执行脚本的文件名，与 document root 有关。
        例如，在地址为 http://example.com/test.php/foo.bar 的脚本中
        使用 `$_SERVER['PHP_SELF']` 将得到 /test.php/foo.bar。
        - `$_SERVER['SERVER_ADDR']`	当前运行脚本所在的服务器的 IP 地址。
        - `$_SERVER['REMOTE_ADDR']`	浏览当前页面的用户的 IP 地址。
        - for more, see https://www.w3cschool.cn/php/php-superglobals.html

5. _Magic Constant_
    - `__LINE__` 文件中的当前行号。
    - `__FILE__`
    - `__DIR__`
        - 等价于 dirname(__FILE__)
        - 除非是根目录，否则目录中名不包括末尾的斜杠。
        - `echo '该文件位于 “ '  . __DIR__ . ' ” '`;
    - `__FUNCTION__`
    - `__CLASS__`
    - `__METHOD__`
    - `__NAMESPACE__`

6. PHP echo ,print 和 print_r 语句.
    - echo , print 和 print_r的区别:
        - echo   - 可以输出一个或多个字符串
        - print   - 只能输出简单类型变量的值,如int,string
        - print_r - 可以输出复杂类型变量的值,如数组,对象
        - echo输出的速度比print快,echo是PHP语句,没有返回值,
        print和print_r是PHP函数,函数有返回值。
        print返回值为1(int类型),print_r返回值为true(bool类型)。
    - `echo` example
        ``` php
        <?php
        $txt1="学习 PHP";
        $txt2="w3cschool.cn";
        $cars=array("Volvo","BMW","Toyota");
        $age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");

        echo $txt1;
        echo "<br>";
        echo "在 $txt2 学习 PHP ";
        echo "我车的品牌是 {$cars[0]}";
        echo "Peter is " . $age['Peter'] . " years old.";
        ?>
        ```
    - `print` example
        ```
        <?php
        $txt1="学习 PHP";
        $txt2="w3cschool.cn";
        $cars=array("Volvo","BMW","Toyota");

        print $txt1;
        print "<br>";
        print "在 $txt2 学习 PHP";
        print "我车的品牌是 {$cars[0]}";
        ?>
        ```
    - `print_r` example
        - print_r 显示关于一个变量的易于理解的信息,如果给出的是 string、integer 或 float，将打印变量值本身。
        - 如果给出的是 array，将会按照一定格式显示键和元素。object与数组类似。
        - 使用时必须加上括号:print_r()。
        - 小提示:print_r()会将把数组的指针移到最后边。使用 reset() 可让指针回到开始处。
        - example
        ```
        <?php
        $txt1="Learn PHP";
        $cars=array("Volvo","BMW","Toyota");

        print_r($txt1);
        print_r($cars);
        ?>
        ```

7. Variable
    - __没有声明变量的命令__
    - PHP 会根据变量的值，自动把变量转换为正确的数据类型。
    - 四种变量类型：
        - local
        - global
            - 在函数内调用函数外定义的全局变量，我们需要在函数中的变量前加上 global 关键字：
                ```
                <?php
                $x=10; // 变量类型global
                function foo()
                {
                global $x=15;
                }

                foo();
                echo $x; // 输出 15
                ?>
                ```
           - PHP 将所有全局变量存储在一个名为 `$GLOBALS[index]` 的数组中。 index 保存变量的名称。
           这个数组可以在函数内部访问，也可以直接用来更新全局变量。
               ```
               function myTest()
               {
               $GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];
               }
               ```
        - static
            - 当一个函数完成时，它的所有变量通常都会被删除。然而，有时候您希望某个局部变量不要被删除。
            要做到这一点，请在您第一次声明变量时使用 static 关键字
            然后，每次 __调用该函数时__ ，该变量将会保留着函数前一次被调用时的值。
            注释：__该变量仍然是函数的局部变量__ 。
        - parameter
    - String（字符串）, Integer（整型）, Float（浮点型）, Boolean（布尔型）, Array（数组）, Object（对象）, NULL（空值）
        - show date type`void var_dump($expsn)` example: $x=1;var_dump($x);//int(1)
        - 整型可以用三种格式来指定：十进制， 十六进制（ 以 0x 为前缀）或八进制（前缀为 0）
        - float: $x = 10.365;$x = 2.4e3;$x = 8E-5;
        - NULL 是数据类型为 NULL 的值。同样可用于数据空值和NULL值的区别。
        可以通过设置变量值为 NULL 来清空变量数据：
            ```
            <?php
            $x="Hello world!";
            $x=null;
            var_dump($x); // NULL
            ?>
            ```

8. Constant
    - `define(string constant_name, mixed value, case_sensitive = true)`
    - example
        ```
        <?php
        define("PI", 3.14);
        echo PI;
        ?>
        ```

9. When importing flies, the differences between "require()" and "include()" are:
    - require : if not here, exit
    - include : if not here, na, continue

---
* PHP config file: php.ini

* \ to escape
; _CDATA_ can also help you in PHP _____?

* !== & ===
    - e.g. $handle=fopen("xxx","r") !== False
    - !== checks value and type=> 0!==False => True

chmod:
701 711 .html;
600 .css, .php;
