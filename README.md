# AirubbyUi

airubby-ui是自己工作中开发的一些组件库.

##使用方法

1、Run`npm install airubby-ui --save`

2、在app.module.ts中引入airubby-ui
<pre>
import {AirubbyUIModule} from 'airubby-ui'
imports: [
    AirubbyUIModule
],
</pre>

##progress组件
+ 使用方法
```javascript
<app-progress frontBg="#09c" backBg="#ccc" value='65' type="zebra"></app-progress>
```
+ 参数说明
	+ frontBg前景色
	+ backBg背景色
	+ value 占整个百分比
	+ type展示类型，只有zebra 斑马线，默认为区域块
	+ 展示宽高随父元素改变