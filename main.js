const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'icons/electro-gpt.icns'), // Путь к иконке
    webPreferences: {
      partition: "persist:chatgpt-session" // Сохранение сессии между запусками
    }
  });

  mainWindow.loadURL("https://chatgpt.com/");
});
