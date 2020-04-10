# Mint UI Unit01

# 1.组件库基础

## 1.1 什么是组件库？

组件(`Component`)是企业为提升开发效率而开发、对于相关的样式及交互的封装，其提供了简单的调用方式和接口，让开发者可以便捷使用其提供的功能来完成业务需求。实现了一次封装，多次调用。

## 1.2 组件库的优势

- 提升开发效率
- 便于团队协同开发
- 简化调试步骤
- 提升项目的可维护性

## 1.3 组件库的分类

### • 移动端组件库

- `Mint UI`（饿了吗）-- http://mint-ui.github.io/#!/zh-cn
- `Vant UI`（有赞）-- https://youzan.github.io/vant/#/zh-CN/
- `Cube UI` （滴滴） -- https://didi.github.io/cube-ui/#/zh-CN

### • 桌面端组件库

- `Element UI`（饿了吗）-- https://element.eleme.cn/#/zh-CN
- `AT-UI`(凹凸) -- https://at-ui.github.io/at-ui/#/zh
- `View UI`（视图更新） -- https://www.iviewui.com

### • 移动端与桌面端的区别

- 屏幕尺寸不同（https://uiiiuiii.com/screen/）
- 操作方式不同
- 事件触发方式（`ontouchstart`、`ontouchend`等）
- 网络环境不同

## 1.4 组件的基本使用步骤

1. 创建组件文件，书写相应的标签--`template`、`script`、`style`
2. 在根组件或父组件文件内，导入创建的组件文件
3. 设置路由信息
4. 创建链接或绑定事件，以访问路由

# 2.`Mint UI`基础

## 2.1 安装

```shell

npm install --save mint-ui

```

> 提示：脚手架安装的依赖信息存储在`package.json`文件中 

## 2.2 引入 `Mint UI`

在`main.js`中完成以下操作：

```javascript

//导入Mint UI
import MintUI from 'mint-ui';

//导入样式表文件
import "mint-ui/lib/style.min.css";

//通过Vue.ues()方法使用插件
Vue.use(MintUI);

```

## 2.3 `Mint UI`构成

- ` CSS`组件
- `JS`组件
- 表单组件

# 3.使用`Mint UI`

## 3.1 `css`组件

### • `Header`组件

`Header`组件用于实现顶部导航，其语法结构是：

```html

<mt-header title="标题信息" fixed>
	...
</mt-header>

```

> `title`属性用于设置标题信息，字符类型
>
> `fixed`属性用于控制是否固定在顶部，布尔类型
>
> `<mt-header>`子元素中可以通过`slot="left"`或`slot="right"`属性控制子元素显示的位置

### • `Reset.css`

每个浏览器对于`HTML`元素都有默认样式，但是这些默认样式在不同的浏览器中是不相同的，为了保证所有浏览器对`HTML`元素的默认样式是一致的，建议使用`reset.css`对`HTML`元素的默认样式进行重置。

### • `Button`组件

`Button`组件用于实现按钮，其语法结构是：

```html


<mt-button type="按钮样式" size="尺寸" icon="图标" disabled>
	...
</mt-button>


```

> 按钮样式有：`default`（默认）、`primary`（主要）、`danger`（危险）
>
> 按钮尺寸有：`small`（小的）、`normal`（标准）、`large`（大的）
>
> 图标类型有：`back`（返回）、`more`（更多）、自定义字体图标
>
> `disabled`属性用于控制按钮是否为禁用状态，布尔类型
>
> 可通过`slot="icon"`属性将图像作为按钮图标
>
> **使用自定义字体图标时需要注意选择器的优先级**

## 3.2 表单组件

### • `Field`组件

`Field`组件用于实现表单控件，其语法结构是：

```html

<mt-field type="输入框的类型" label="标签"
          placeholder="占位内容"
          state="检测状态"
          v-model="变量名称"
          :attr="原生属性"
          readonly
          disabled
          disableClear>
</mt-field>

```

> 输入框的类型有：
>
> - `text`，单行文本框
> - `password`，密码框
> - `textarea`，多行文本框
> - `number`，数字
> - `tel`，电话
> - `url`，URL地址
> - `date`，日期
> - `datetime-local`，日期和时间
>
> `state`属性表示输入框的状态，其值有：
>
> - `error`，表示错误
> - `success`，表示成功
> - `warning`，表示警告
>
> `:attr`属性用于控制表单控件的原生属性，对象类型，如：
>
> ```html
> 
> <mt-field type="password" 
>           label="密码" 
>           :attr="{autocomplete:'off',maxlength:'10'}">
> </mt-field>
> 
> ```
>
> `disabled`属性用于控制表单控件是否为禁用状态，布尔类型，默认为`false`
>
> `readonly`属性用于控制表单控件是否为只读状态，布尔类型，默认为`false`
>
> `disableClear`属性用于控制表单控件是否禁用`clear`按钮，布尔类型，默认为`false`

## 3.3  `JS` 组件

### • `toast`组件

`toast`组件用于显示短消息提示框，其语法结构是：

```javascript

//简捷写法
this.$toast('提示信息')

//标准写法

this.$toast({
    message:'提示信息',
    position:'位置(top|middle|bottom)',
    duration:'持续时间(单位为毫秒,默认为3000)',
    iconClass:'字体图标类名称'
})

```

# 4.作业

1. 完成用户注册、用户登录的页面组件
2. 通过`JavaScript`检测用户注册、登录时的行为