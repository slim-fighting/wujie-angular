# ngx-wujie

Angular 微前端组件，基于 wujie 框架。

## 安装

```bash
npm install ngx-wujie wujie
```

## 使用方法

### 1. 导入模块

```typescript
import { NgxWujieComponent } from 'ngx-wujie';

@Component({
  // ...
  imports: [NgxWujieComponent]
})
```

### 2. 在模板中使用

```html
<wujie-angular name="react-app" url="http://localhost:3000"> </wujie-angular>
```






### NgxWujieComponent

| 属性 | 类型   | 必填 | 说明       |
| ---- | ------ | ---- | ---------- |
| name | string | 是   | 微应用名称 |
| url  | string | 是   | 微应用地址 |


## 构建

```bash
ng build ngx-wujie
```

## 发布

```bash
cd dist/ngx-wujie
npm publish
```
