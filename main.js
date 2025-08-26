const { app, BrowserWindow } = require('electron')
const path = require('node:path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      webSecurity: false,
      devTools: false,
      allowRunningInsecureContent: true,
      experimentalFeatures: true
    }
  })

  mainWindow.loadFile('poshos/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
