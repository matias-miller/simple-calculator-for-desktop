const { app, BrowserWindow } = require('electron');

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 400,
        height: 260,
        maxWidth: 600,
        maxHeight: 280,
        minWidth: 350,
        minHeight: 260,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false // Note: For better security, use contextIsolation: true and a preload script
        }
    });

    // Load the index.html of the app.
    // Change this to your production path when deploying
    mainWindow.loadURL('http://localhost:3000');

    // Open the DevTools. (optional)
    // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});