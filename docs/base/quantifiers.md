# 特殊字符 3：量词

**量词**是用来描述匹配字符的个数的，例如`\d+`可以匹配 1 到多个数字。

<Exercise 
  title="试一试：\d+"
  :data='[
    {type: "match", text: "123"},
    {type: "match", text: "2123"},
    {type: "match", text: "311"},
    {type: "skip", text: "a"},
  ]'
>
  <SolutionLink text="\d+" />
</Exercise>

**量词**一共有 6 种，分别是：

| 符号 | 含义 |
| :----: | :----: |
| * | 0 到多次 |
| + | 1 到多次 |
| ？ | 0 到 1 次 |
| {m} | m 次 |
| {m,} | 至少 m 次 |
| {m,n} | m 到 n 次 |

<Exercise 
  title="练习 1：匹配单词"
  :data='[
    {type: "match", text: "color"},
    {type: "match", text: "colour"},
  ]'
>
  <SolutionLink text="colou?r" />
</Exercise>


<Exercise 
  title="练习 2：匹配一百以内的数字"
  :data='[
    {type: "match", text: "10"},
    {type: "match", text: "0"},
    {type: "match", text: "99"},
  ]'
>
  <SolutionLink text="\d{1,2}" />
</Exercise>


<Exercise 
  title="练习 3：匹配数字"
  :data='[
    {type: "match", text: "1000"},
    {type: "match", text: "0123"},
    {type: "match", text: "993333"},
  ]'
>
  <SolutionLink text="\d+" />
</Exercise>

## 贪婪 vs 懒惰

当正则表达式中包含 `*`、`+`、`?` 等表示重复的元字符时，默认会匹配**尽可能多**的字符，这被称为**贪婪匹配**。例如给定字符串 `abcab`，模式 `a.*b` 会匹配最长的以 `a` 开始、以 `b` 结束的字符串，也就是匹配到整个字符串而不是 `ab`。

与贪婪匹配相反的是**非贪婪匹配**，或者称为**懒惰匹配**，也就是匹配**尽可能少**的字符。语法是在上述元字符后面加上一个**问号 `?`**。在上面的例子中，模式 `a.*?b` 将匹配到 `ab`。

所有表示重复的元字符都可以转化为懒惰匹配模式：
* `*?`：重复任意次，但尽可能少重复
* `+?`：重复 1 次或更多次，但尽可能少重复
* `??`：重复 0 次或 1 次，但尽可能少重复
* `{n,m}?`：重复 n 到 m 次，但尽可能少重复
* `{n,}?`：重复 n 次或更多次，但尽可能少重复