# 特殊字符 1：字符类

在**正则表达式**中，有很多特殊符号来表示单个字符。例如，`\d`表示任意 0 到 9 的任意数字。下面的表格列出了常见的，可以匹配单个字符的**元字符**。

| 符号 | 含义 |
| :----: | :----: |
| . | 任意字符(除换行外) |
| \d | 任意一个数字 |
| \D | 和 \d 相反 |
| \w | 任意字母、数字、下划线 |
| \W | 和 \w 相反 |
| \s | 任意空白字符 |
| \S | 和 \s 相反 |

<Exercise 
  title="练习 1：匹配数字"
  :data='[
    {type: "match", text: "1"},
    {type: "match", text: "2"},
    {type: "match", text: "3"},
    {type: "skip", text: "a"},
  ]'
>
  <SolutionLink text="\d" />
</Exercise>

<Exercise 
  title="练习 2：匹配数字、字母、下划线"
  :data='[
    {type: "match", text: "1"},
    {type: "match", text: "a"},
    {type: "match", text: "_", note: "下划线"},
    {type: "skip", text: "-", note: "中划线"},
  ]'
>
  <SolutionLink text="\w" />
</Exercise>

<Exercise 
  title="练习 3：匹配非数字"
  :data='[
    {type: "match", text: "a"},
    {type: "match", text: "_", note: "下划线"},
    {type: "match", text: "-", note: "中划线"},
    {type: "skip", text: "1"},
  ]'
>
  <SolutionLink text="\D" />
</Exercise>