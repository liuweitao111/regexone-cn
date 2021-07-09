# 其他

<Exercise 
  title="练习 1：匹配合法的{}"
  :data='[
    {type: "match", text: "{}"},
    {type: "match", text: "{{}{}}"},
    {type: "match", text: "{{{}}{}}{}{{}}"},
    {type: "skip", text: "{{}{}"},
    {type: "skip", text: "{{}}}{}"},
  ]'
>
  <SolutionLink text="^({({({})*})*})*$" />
</Exercise>

<Exercise 
  title="练习 2：匹配x的个数是合数的字符串"
  :data='[
    {type: "match", text: "xxxx"},
    {type: "match", text: "xxxxxx"},
    {type: "match", text: "xxxxxxxx"},
    {type: "match", text: "xxxxxxxxxx"},
    {type: "skip", text: "xx"},
    {type: "skip", text: "xxx"},
    {type: "skip", text: "xxxxxxx"},
    {type: "skip", text: "xxxxxxxxxxx"},
  ]'
>
  <SolutionLink text="^(xx+?)\1+$" />
</Exercise>

<Exercise 
  title="练习 2：匹配x的个数是质数的字符串"
  :data='[
    {type: "match", text: "xx"},
    {type: "match", text: "xxx"},
    {type: "match", text: "xxxxxxx"},
    {type: "match", text: "xxxxxxxxxxx"},
    {type: "skip", text: "xxxx"},
    {type: "skip", text: "xxxxxx"},
    {type: "skip", text: "xxxxxxxx"},
    {type: "skip", text: "xxxxxxxxxx"},
  ]'
>
  <SolutionLink text="^(?!^(xx+?)\1+$)" />
</Exercise>