# 分组

| 符号 | 含义 |
| :----: | :----: |
| (x) | 匹配 'x' 并且记住匹配项，其中括号被称为捕获括号 |
| (?:x) | 匹配 'x' 但是不记住匹配项 |
| \n | 返回最后的第n个子捕获匹配的子字符串 |

<Exercise 
  title="练习 1：提取图片文件名和后缀"
  :data='[
    {type: "capture", text: "test.png", captureData: {results: ["test", "png"]}},
    {type: "capture", text: "test123.jpeg", captureData: {results: ["test123", "jpeg"]}},
    {type: "capture", text: "aaa.jpeg", captureData: {results: ["aaa", "jpeg"]}},
    {type: "skip", text: "aaa.pdf"},
  ]'
>
  <SolutionLink text="(\w+).(png|jpeg)" />
</Exercise>

<Exercise 
  title="练习 2：提取图片的文件名"
  :data='[
    {type: "capture", text: "test.png", captureData: {results: ["test"]}},
    {type: "capture", text: "test123.jpeg", captureData: {results: ["test123"]}},
    {type: "capture", text: "aaa.jpeg", captureData: {results: ["aaa"]}},
    {type: "skip", text: "aaa.pdf"},
  ]'
>
  <SolutionLink text="(\w+).(?:png|jpeg)" />
</Exercise>

<Exercise 
  title="练习 3：查找重复的单词"
  :data='[
    {type: "capture", text: "I have a cat cat.", captureData: {results: ["cat"]}},
    {type: "capture", text: "I have a dog dog.", captureData: {results: ["dog"]}},
    {type: "skip", text: "I have a dog"},
  ]'
>
  <SolutionLink text="(\w+) \1" />
</Exercise>

<Exercise 
  title="练习 4：匹配嵌套组"
  :data='[
    {type: "capture", text: "Jan 1987", captureData: {results: ["Jan 1987", "1987"]}},
    {type: "capture", text: "May 1969", captureData: {results: ["May 1969", "1969"]}},
    {type: "capture", text: "Aug 2011", captureData: {results: ["Aug 2011", "2011"]}},
  ]'
>
  <SolutionLink text="((:?[A-Za-z]+) (\d+))" />
</Exercise>
