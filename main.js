const { app, BrowserWindow, Menu } = require('electron')

const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
	app.quit()
} else {
	app.on('ready', createWindow)
}

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
		submenu: [
		{
			label:'Themes',
			submenu: [
				{
					label : 'Default',
					click(){
						win.webContents.send("ctheme", 1)
					}
				},
				{
					label : 'Redish',
					click(){
						win.webContents.send("ctheme", 2)
					}
				},
				{
					label : 'Nature',
					click(){
						win.webContents.send("ctheme", 3)
					}
				},
				{
					label : 'Dark Knight',
					click(){
						win.webContents.send("ctheme", 4)
					}
				},
				{
					label : 'Kidmatrix',
					click(){
						win.webContents.send("ctheme", 5)
					}
				},
			]
		},
		{
			label:'Backup and Restore',
			click(){
				win.webContents.send("backrest")
			}
		},
		{
			label:'Reset This Program',
			click(){
				win.webContents.send("resetapp")
			}
		}],
	},
	{
		label: 'About',
		submenu: [
		{
			label:'Help',
			click(){
				win.webContents.send("help")
			}
		},
		{
			label:'Version Info',
			click(){
				win.webContents.send("vinfo")
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
	
	//prevent multiple instance
	/* Single Instance Check */
	
	//end
}

//app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})

