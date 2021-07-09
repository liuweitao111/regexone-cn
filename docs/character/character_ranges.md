# 字符范围

| 符号 | 含义 |
| :----: | :----: |
| x\|y | x或y |
| [xyz] | 1 到多次 |
| [x-z] | x 到 z 之间的任意字符 |
| [^xyz] | 不包含x、y、z |

<Exercise 
  title="练习 1：匹配字符范围"
  :data='[
    {type: "match", text: "abc"},
    {type: "match", text: "aab"},
    {type: "match", text: "abac"},
    {type: "skip", text: "pem"},
    {type: "skip", text: "dug"},
  ]'
>
  <SolutionLink text="[abc]+" />
</Exercise>

<Exercise 
  title="练习 2：匹配字符范围"
  :data='[
    {type: "match", text: "cat"},
    {type: "match", text: "car"},
  ]'
>
  <SolutionLink text="ca[t|r]" />
</Exercise>


<Exercise 
  title="练习 3：匹配不包含o的单词"
  :data='[
    {type: "match", text: "access"},
    {type: "match", text: "never"},
    {type: "match", text: "car"},
    {type: "skip", text: "order"},
    {type: "skip", text: "allow"},
  ]'
>
  <SolutionLink text="ca[t|r]" />
</Exercise>

