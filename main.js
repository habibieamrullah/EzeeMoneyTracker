const { app, BrowserWindow, Menu } = require('electron')

function createWindow () {
	// Create the browser window.
	let win = new BrowserWindow({ width: 1024, height: 720 })

	var menu = Menu.buildFromTemplate([{
		label: 'Menu',
		submenu: [
		{
			label:'All Accounts',
			click(){
				win.webContents.send("allaccounts")
			}
		},
		{
			label:'New Account',
			click(){
				win.webContents.send("createnew")
			}
		},
		{
			label:'Categories',
			click(){
				win.webContents.send("categories")
			}
		},
		{ type:'separator' },
		{ label:'Exit',
			click(){
				app.quit();
			}
		}]
	},
	{
		label: 'Settings',
		submenu: [{
			label:'Reset This App',
			click(){
				win.webContents.send("resetapp")
			}
		}],
	},
	{
		label: 'About',
		submenu: [
		{
			label:'Online Help',
			click(){
				win.webContents.send("about")
			}
		},
		{
			label:'About Ezee Money Tracker',
			click(){
				win.webContents.send("about")
			}
		},
		],
	}
	])
	Menu.setApplicationMenu(menu); 
	// and load the index.html of the app.
	win.loadFile('index.html')
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})