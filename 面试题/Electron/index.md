# Electron

## 通信

- 渲染进程 to 主要进程
```js
// 渲染发送
ipcRenderer.invoke('apiName', args);

// 主进程监听
ipcMain.handle('apiName', () => {});
```

- 主要进程 to 渲染进程
```js
// 主要进程发送
bw.webContents.send('apiName', {});

// 渲染进程接受
ipcRenderer.on('apiName', () => {

})
```

- 渲染进程 to 渲染进程

```js
// 渲染进程
ipcRenderer.invoke('emit', { eventName: 'api' });

// 主要监听
ipcMain.handler('emit', {
  bw.webContents.send(eventName, args);
});

// 渲染进程接受
ipcRenderer.on('api', () => {})
```

## browserWindow
```js
const mainWindow = new BrowserWindow({
  height: 600,
  webPreferences: {
    preload: path.join(__dirname, "hybrid", "preload", "index.js"),
    sandbox: false,
    webSecurity: false,
    contextIsolation: false,
    nodeIntegration: true,
  },
  width: 800,
});
mainWindow.loadFile(path.join(__dirname, "../index.html"));
mainWindow.webContents.openDevTools(); // 调试面板
```

## 功能
### 截图
```js
import * as fsJepack from 'fs-jetpack';
bw.webContents.capturePage(finalRect).then(async (img) => {
  const data = img.toPNG();
  fsJepack.write('path', data);
})
```
### 护眼
```js
bw.webContents.executeJavaScript(
  `
    //  创建 style
    document.getElementsByTagName('head').item(0).appendChild(style);
    var div = document.createElement("div");
    div.id="eyeProtection";
    div.className="EyeproModeDom EyeproModeShow";
    document.body.appendChild(div);
    document.body.insertBefore(div, document.body.firstElementChild);
  `
).catch(() => {})
```

## system
### 获取音量
  ```js
    import * as loudness from 'loudness';
    const mute = await loudness.getMuted();
    const volume = await loudness.getVolume();
    loudness.setVolume(volume);
  ```
### 网络
```js
import * as si from 'systeminformation';
si.inetChecksite(url)
si.networkInterfaces()

```
### 网络状态
```js
import {net} from 'electron';
net.isOnline()
```
### cpu usage
  ```js
    import * as os from 'os';
    const cpus = os.cpus();
    for (let cpu in cpus) {
      let times = cpus[cpu].times;
      user += times.user;
      nice += times.nice;
      sys += times.sys;
      idle += times.idle;
      irq += times.irq;
    }
    total += user + nice + sys + idle + irq;
  ```