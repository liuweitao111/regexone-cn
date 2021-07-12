# 特殊字符 4：断言
有的时候我们对要匹配的文本的位置有一定的要求。正则中提供了一些结构，只用于匹配位置，而不是文本内容本身，这种结构就是**断言**。常见的断言有三种：单词边界、行的开始或结束以及环视。
## 边界
| 符号 | 含义 |
| :----: | :----: |
| \b | 匹配单词边界 |
| \B | 匹配非单词边界 |
| ^ | 匹配行的开始 |
| $ | 匹配行的结束 |

在上一节中，“匹配一百以内的数字”这个问题的参考答案是`\d{1,2}`。但是这个答案去匹配`123`，也是会验证成功的。因为`\d{1,2}`可以匹配`123`中的`12`。所以我们可以使用`^\d{1,2}$`来解决这个问题。

<Exercise 
  title="试一试：匹配一百以内的数字"
  :data='[
    {type: "match", text: "10"},
    {type: "match", text: "0"},
    {type: "match", text: "99"},
    {type: "skip", text: "123"},
  ]'
>
  <SolutionLink text="^\d{1,2}$" />
</Exercise>

<Exercise 
  title="练习 1：匹配单词"
  :data='[
    {type: "match", text: "successful"},
    {type: "skip", text: "unsuccessful"},
  ]'
>
  <SolutionLink text="^successful" />
</Exercise>

<Exercise 
  title="练习 2：匹配单词"
  :data='[
    {type: "match", text: "fu"},
    {type: "match", text: "tofu"},
    {type: "match", text: "snafu"},
    {type: "skip", text: "futz"},
  ]'
>
  <SolutionLink text="fu$" />
</Exercise>

## 环视
| 符号 | 含义 |
| :----: | :----: |
| (?<=y)x | 匹配前面是 y 的 x |
| (?<!y)x | 匹配前面不是 y 的 x |
| x(?=y) | 匹配后面是 y 的 x |
| x(?!y) | 匹配后面不是 y 的 x |
**环视**比较难记，可以记住这个小口诀(**左尖括号代表看左边，没有尖括号是看右边，感叹号是非的意思**)，来辅助记住**环视**着四个符号。

<Exercise 
  title="练习 3：匹配单词, 使用环视"
  :data='[
    {type: "match", text: "fu"},
    {type: "match", text: "tofu"},
    {type: "match", text: "snafu"},
    {type: "skip", text: "futz"},
  ]'
>
  <SolutionLink text="fu(?!\w)" />
</Exercise>

有的时候使用**环视**可以表达不匹配某某的功能。例如，`\d+`表示匹配 1 都多次数字，则`^(?!\d+)`表示不匹配数字。**注意前面要加`^`**

<Exercise 
  title="试一试：不匹配数字"
  :data='[
    {type: "match", text: "fu"},
    {type: "skip", text: "123"},
  ]'
>
  <SolutionLink text="^(?!\d+)" />
</Exercise>