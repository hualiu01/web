# XML - Extensible Markup Language

1. Use xml to store small data instead of using DB
    - tools, like xPath, to query and parse xml exists everywhere
    - human readable
    - none proprietary

2. __special characters__, when you want to use special chars inside
of a value string surrounded by quotes:
    ```
    $ Ampersand − &amp;
    ' Single quote − &apos;
    > Greater than − &gt;
    < Less than − &lt;
    " Double quote − &quot;
    ```

3. Building xml elements:
    - xml decorator: `<?xml version='1.0' encoding='UTF-8'?>`
    - tools: One lib in PHP for xml is `simpleXML`:
    - attributes vs child:
    attr is easier to read and parse;
    while a child is extensible

4. SimpleXML([doc](https://www.w3cschool.cn/php/php-ref-simplexml.html)) example:
    ```
    example.html

    <?  $dom = simplexml_load_file("example.xml"); ?>

    <!DOCTYPE html ...>
    <html>
    <head><title></title></head>
    <body>
        <ul>
        <?
            foreach($dom->lecture as $lecture)
            {
                print($lecture->title);
                print("<br />");
                print($lecture["number"])
            }

            foreach($dom->format as $format)
            {
                $path = $format["path"]
                print("<a href='$path'>")   -------<=Notice: inside "", it has to be single quote
            }
        ?>
        </ul>
    </body>
    </html>
    ```

5. A more real-world example:
    - Remote Subscriber Service(RSS) source
        - 一个RSS文件就是一段规范的XML数据，该文件一般以rss，xml或者rdf作为后缀。
        - 发布一个RSS文件（一般称为RSS Feed）后，这个RSS Feed中包含的信息就能直接被其他站点调用，
        而且由于这些数据都是标准的XML格式，所以也能在其他的终端和服务中使用，
        如PDA、手机、邮件列表等。
        - 而且一个网站联盟（比如专门讨论旅游的网站系列）也能通过互相调用彼此
        的RSS Feed，自动的显示网站联盟中其他站点上的最新信息，这就叫着RSS的联合。这种联合就导致一个站点的内容更新越及时、RSS Feed被调用的越多，该站点的知名度就会越高，从而形成一种良性循环。
        - 而所谓RSS聚合，就是通过软件工具的方法从网络上搜集各种RSS Feed并在一个界面中提供给读者进行阅读。这些软件可以是在线的WEB工具，也可以是下载到客户端安装的工具
    - 源：
        ```
            example.html

            <?  $dom = simplexml_load_file("https://www.zhihu.com/rss"); ?>

            <!DOCTYPE html ...>
            <html>
            <head><title></title></head>
            <body>
            <ul>
                <? foreach($dom->channel->item as $item): ?>
                    <li><a href="<?= $item->link ?>"><?= htmlspacialchars($item->title) ?></a></li>
                <? endforeach ?>
            </ul>
            </body>
            </html>
        ```

---
in the world of XML, when you change child elements, your code should
not break.