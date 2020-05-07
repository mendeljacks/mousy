const convertToWindowsStore = require('electron-windows-store')
const path = require('path')

convertToWindowsStore({
    containerVirtualization: false,
    inputDirectory: `${path.join(__dirname, "/mousy-win32-x64")}`,
    outputDirectory: `${path.join(__dirname, "/outdir")}`,
    packageVersion: '1.0.0.0',
    packageName: 'Mousy mouse',
    packageDisplayName: 'Mousy',
    packageDescription: 'Highlight mouse location',
    packageExecutable: 'app/mousy.exe',
    assets: `${path.join(__dirname, "/resource")}`,
    // manifest: `${path.join(__dirname, "/outdir/pre-appx/AppXManifest.xml")}`,
    deploy: false,
    publisher: 'CN=Mendel Jacks',
    windowsKit: 'C:\\Program Files (x86)\\Windows Kits\\10\\bin\\10.0.18362.0\\x64',
    // devCert: 'C:\\Users\\mende\\AppData\\Roaming\\electron-windows-store\\mendeljacks\\mendeljacks.pfx',
    // certPass: 'mousy',
    // desktopConverter: 'C:\\desktop-converter-tools',
    expandedBaseImage: false, // 'C:\\base-image.wim',
    // makeappxParams: ['/l'],
    // signtoolParams: ['/p'],
    // makePri: true,
    // createConfigParams: ['/a'],
    // createPriParams: ['/b'],
    finalSay: function () {
      return new Promise((resolve, reject) => resolve()).catch(err => {
        debugger
      })
    }
 })