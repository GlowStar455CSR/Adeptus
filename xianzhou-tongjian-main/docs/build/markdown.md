# Markdown 基本语法
此页面的设置旨在让无 Markdown 基本知识的纯良米友快速编辑内容。

## Markdown 标题
Markdown 标题有两种格式。

### 使用 = 和 - 标记一级和二级标题
= 和 - 标记语法格式如下：

```markdown
我展示的是一级标题
=================

我展示的是二级标题
-----------------
```

显示效果如下：

![p1](https://www.runoob.com/wp-content/uploads/2019/03/01986C87-7E19-4497-878E-AE996AFC088E.jpg)


### 使用 # 号标记
使用 # 号可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。
```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```
显示效果如下：
![p2](https://www.runoob.com/wp-content/uploads/2019/03/md2.gif)

## Markdown 段落
不同于普通txt文本的是，你如果直接在文件内敲击回车换行，**Markdown 并不会遵循你的意愿换行**。  
那么该怎么做呢？  
下面是一个示范：
```markdown
我是第一个段落。   
我是第二个段落。
```
显示的效果：   
我是第一个段落。   
我是第二个段落。

这个示例在每个段落最后敲击了至少三个空格以换行。

也许你看不见。那下面还有一个：
```markdown
仙家军万岁！

仙不灭！
```
显示的效果：   
仙家军万岁！

仙不灭！

多换一行，这样即可简单粗暴的分段落。

## Markdown 区块
Markdown 区块引用是在段落开头使用 `>` 符号 ，然后后面紧跟一个空格符号：
> 我是一个段落

段落里面可以套段落，例如：
> 我是一级
>> 我是二级
>>> 我是三级

## Markdown 链接
链接可以方便的让米友转跳到其他子标题或其他页面下。   
链接的语法格式如下：
```markdown
[螃蟹博客](https://heycrab.xyz)
```
显示的效果：
[螃蟹博客](https://heycrab.xyz)

## Markdown 图片
为了悬挂一些猴猴，我们肯定是需要图片的！   
你可以在网上搜寻一个图床来使用。   
以下是一个示例：
```markdown
![好可爱的三月七！](https://heycrab3-oversea-file-delivery.s3.ap-east-1.amazonaws.com/xianzhoutongjian/1314613.jpg)
```
显示的效果：
![好可爱的三月七！](https://heycrab3-oversea-file-delivery.s3.ap-east-1.amazonaws.com/xianzhoutongjian/1314613.jpg)

::: tip Tips!
只有当图片未能成功显示时，中括号里面的文字才会出现，作为图片的alts（注解）使用。
:::

## Markdown 强调
强调语法可以用来给文字加粗或者斜体。
### 加粗
要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。  
例如：
```markdown
**仙不灭！**
```
显示的效果：   
**仙不灭！**

::: tip Tips!
你也可以把星号换成下划线，效果都一样的，随你便。
:::

### 斜体
要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）或下划线（underscore）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。   
例如：
```markdown
*仙不灭！*
```

显示的效果：   
*仙不灭！*

::: tip Tips!
同样，你也可以把星号换成下划线，效果都一样的，随你便。
:::

### 粗体+斜体
只需要在前后各输入三个星号或下划线。例如：
```markdown
***仙不灭！***
```
显示的效果：   
***仙不灭！***

::: tip Tips!
同样²，你也可以把星号换成下划线，效果都一样的，随你便。
:::

## Markdown 分割线
要写新的猴猴却又不想开新页面？很简单！用下划线！
```markdown
123
***
456
```
显示的效果：   
123
***
456

怎么样，是不是很神奇？

::: tip Tips!
也可以使用破折号（-）或者下划线（_）代替星号使用
:::

## 插入B站视频
::: tip Tips!
这是螃蟹自己封装的组件，在别的Wiki你是见不到的，不要在别的Wiki使用这个语法，可能会被当成XSS攻击而被封禁。
:::

想插入B站视频？很简单！只需要BV号，并且在页面底端复制粘贴这段代码即可使用！   
### 代码
```vue
<script lang="ts" setup>
import BiliPlayer from '../../components/iframe/BiliPlayer.vue'
</script>
```
无需过多干涉。
### 使用
导入之后，就可以使用了，例如：
```vue
<BiliPlayer bvid="BV1dW4y1d7Pm"/>
```
渲染的效果：   
<script lang="ts" setup>
import BiliPlayer from '../../components/iframe/BiliPlayer.vue'
</script>
<BiliPlayer bvid="BV1dW4y1d7Pm"/>

::: warning 再次提醒!
这是螃蟹自己封装的组件，在别的Wiki你是见不到的，不要在别的Wiki使用这个语法，可能会被当成XSS攻击而被封禁。
:::