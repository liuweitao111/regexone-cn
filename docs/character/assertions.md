# 断言
## 边界
| 符号 | 含义 |
| :----: | :----: |
| \b | 匹配单词边界 |
| \B | 匹配非单词边界 |
| ^ | 匹配行的开始 |
| $ | 匹配行的结束 |

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
  <SolutionLink text="fu$ 或 fu\b" />
</Exercise>

## 环视
| 符号 | 含义 |
| :----: | :----: |
| (?<=y)x | 匹配前面是 y 的 x |
| (?<!y)x | 匹配前面不是 y 的 x |
| x(?=y) | 匹配后面是 y 的 x |
| x(?!y) | 匹配后面不是 y 的 x |


<Exercise 
  title="练习 1：匹配单词, 使用环视"
  :data='[
    {type: "match", text: "fu"},
    {type: "match", text: "tofu"},
    {type: "match", text: "snafu"},
    {type: "skip", text: "futz"},
  ]'
>
  <SolutionLink text="fu(?!\w)" />
</Exercise>
