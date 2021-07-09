# 量词

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
  <SolutionLink text="\d{2}" />
</Exercise>
