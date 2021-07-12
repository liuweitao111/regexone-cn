# 转义

在前面的内容中，我们讲了很多**特殊字符**，相信你一定都还记得。如果现在我们要查找比如星号（*）、加号（+）、问号（?）本身，而不是**特殊字符**的功能，这时候就需要对其进行**转义**，直接在前面加上反斜杠就可以了

<Exercise
  title="练习 1：匹配 *"
  :data='[
    {type: "match", text: "****"},
    {type: "match", text: "**"},
    {type: "match", text: "******"},
  ]'
>
  <SolutionLink text="\*+" />
</Exercise>