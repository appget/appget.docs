# Package Manifest Overview

AppGet uses `YAML` files to define application packages. Currently all available packages are hosted in our official [GitHub Repository](https://github.com/appget/appget.packages).

##  Root Fields

`id` (Required) The unique ID of the package.

`name`  (Required)  Full marketing name of the application.

`version` Exact version of the application.

`home` Full qualified product home page URL where users can see basic information about the application.

`Repo` Fully qualified URL that points to the software repository hosting the source of the application, usually on Github, GitLab, Sourceforge etc.

`License` Name of the software license under which the application has been released.

`installMethod`  (Required) The install method used by the package. One of the following values must be used:

 * `MSI` MSI or Windows Installer
 * `Inno` [Inno Setup](http://www.jrsoftware.org/isinfo.php) by JRSoftware
 * `Squirrel`  [Squirrel](https://github.com/Squirrel/Squirrel.Windows)
 * `Wix`  [Wix Toolset](http://wixtoolset.org/)
* `NSIS` [Nullsoft Scriptable Install System](http://nsis.sourceforge.net/Main_Page)
* `InstallBuilder` [BitRock InstallBuilder](https://installbuilder.bitrock.com/)




## Installers

`Installers` List contains list of all installers available to install the application. Each manifest must have at least one installer. But can contain more to support multiple CPU architectures or different versions of Windows.

### Installer Fields
`Location` Fully qualified link to directly download the URL. *Currently only HTTP/HTTPS protocols are supported but support for more protocols are planded.*

`Architecture` CPU architecture supported by this installer. One of the following values must be used: `x86`, `x64`. If this value is emmited default value of `x86` will be assumed.

`Sha256|Sha1|Md5` Used to validate integrety and correctness of the downloaded file

`MinWindowsVersion` Minimum version of Windows required for the application to install/work correctly.  

*Table below describes the list of supported values and versions of Windows* 

| Manifest Value | Desktop       | Server                 |
| :------------- | ------------- | ---------------------- |
| `6.0`          | Windows Vista | Windows Server 2008    |
| `6.1`          | Windows 7     | Windows Server 2008 R2 |
| `6.2`          | Windows 8     | Windows Server 2012    |
| `6.3`          | Windows 8.1   | Windows Server 2012 R2 |
| `10.0`         | Windows 10    | Windows Server 2016    |