# imgLazyLoader

## 使用方法

### 引入

```html
<script type="text/javascript" src="imgLazyLoader.js"></script>
```

### 使用方法

提供图片的懒加载，提升网站性能，将 `img` 的 `class` 设为 `zc-lazy-img` 并且设置 `img` 的 `data-src` 为图片路径，不要设置 img 的 `src` 属性即可。

执行以下代码进行加载

```javascript
imgLazyLoader.init()
```

## API

### imgLazyLoader.init(className?, interval?)

`className` 为设置懒加载图片的类，默认为 `zc-lazy-img`

`interval` 为滚动事件回调间隔，默认为 250

## 待办

完善代码结构