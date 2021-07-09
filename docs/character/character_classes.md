# 特殊单字符

| 符号 | 含义 |
| :----: | :----: |
| . | 任意字符(除换行外) |
| \d | 和 \d 相反 |
| \D | 任意非数字 |
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
    {type: "match", text: "_"},
    {type: "skip", text: "-"},
  ]'
>
  <SolutionLink text="\w" />
</Exercise>

<Exercise 
  title="练习 3：匹配非数字"
  :data='[
    {type: "match", text: "a"},
    {type: "match", text: "_"},
    {type: "match", text: "-"},
    {type: "skip", text: "1"},
  ]'
>
  <SolutionLink text="\D" />
</Exercise>