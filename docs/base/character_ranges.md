# 特殊字符 1：范围
在上一节中，我们学习了一些用来表示单个字符的**特殊字符**。例如，`\d`可以匹配 0 到 9 的数字。那如果我们只想匹配 0 到 5 的数字，该怎么处理呢？

在**正则表达式**中，**范围**用来表示匹配字符的范围。匹配 0 到 5 的数字可以用`[0-5]`来匹配。

<Exercise 
  title="试一试：匹配0-5的数字"
  :data='[
    {type: "match", text: "0"},
    {type: "match", text: "3"},
    {type: "match", text: "5"},
    {type: "skip", text: "9"},
  ]'
>
  <SolutionLink text="[0-5]" />
</Exercise>

**范围**一共有 4 中表示方式：
| 符号 | 含义 |
| :----: | :----: |
| x\|y | x 或 y |
| [xyz] | 匹配 x、y 或 z |
| [x-z] | x 到 z 之间的任意字符 |
| [^xyz] | 不包含 x、y、z |

<Exercise 
  title="练习 1：匹配字符范围"
  :data='[
    {type: "match", text: "a"},
    {type: "match", text: "b"},
    {type: "match", text: "d"},
    {type: "skip", text: "x"},
    {type: "skip", text: "y"},
  ]'
>
  <SolutionLink text="[a-d]" />
</Exercise>

<Exercise 
  title="练习 2：匹配字符范围"
  :data='[
    {type: "match", text: "a"},
    {type: "match", text: "A"},
    {type: "match", text: "D"},
    {type: "match", text: "e"},
    {type: "skip", text: "x"},
    {type: "skip", text: "Y"},
  ]'
>
  <SolutionLink text="[A-Da-e]" />
</Exercise>

<Exercise 
  title="练习 3：匹配单词"
  :data='[
    {type: "match", text: "cat"},
    {type: "match", text: "car"},
  ]'
>
  <SolutionLink text="cat|car" />
</Exercise>
