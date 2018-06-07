# Package Manifest Overview

Rather than using scripts AppGet uses `YAML` files to define application packages. The manifest file provides all information required to install a package by AppGet. We believe this is dramatically more secure and much easier to maintain that the alternatives.

All available packages are hosted in our official [GitHub Repository](https://github.com/appget/appget.packages). You can review and propose changes to any of the manifests using a pull-request.

For example, [vlc.yaml](https://github.com/appget/appget.packages/blob/master/manifests/vlc/vlc.yaml)

```yaml
id: vlc
name: VLC media player
version: 3.0.3
home: https://videolan.org/
license: GNU Lesser General Public License v2.1+
installMethod: NSIS
installers:
- location: https://get.videolan.org/vlc/3.0.3/win32/vlc-3.0.3-win32.exe
  sha256: 65bf42b15a05b13197e4dd6cdf181e39f30d47feb2cb6cc929db21cd634cd36f
- location: https://get.videolan.org/vlc/3.0.3/win64/vlc-3.0.3-win64.exe
  sha256: 59940804b6a89f0c83b576247dd90f2c5a22b8c7f040ebf82813c59968828035
  architecture: x64
```

##  Root Fields

`id` (Required) The unique ID of the package. [See Package ID](#package-id)

`name`  (Required)  Full marketing name of the application [See Package Name](#package-name)

`version` Version of the application

`home` Fully qualified product homepage URL where users can see vendor provided information about the application

`repo` Fully qualified URL that points to the software repository hosting the source of the application; usually on GitHub, GitLab, BitBucket, SourceForge, etc.

`license` Software license under which the application has been released and distributed

`installMethod`  (Required) The install method used by the package. Supported values are:

 * `MSI` MSI or Windows Installer
 * `Inno` [Inno Setup](http://www.jrsoftware.org/isinfo.php) by JRSoftware
 * `Squirrel`  [Squirrel](https://github.com/Squirrel/Squirrel.Windows)
 * `Wix`  [Wix Toolset](http://wixtoolset.org/)
* `NSIS` [Nullsoft Scriptable Install System](http://nsis.sourceforge.net/Main_Page)
* `InstallBuilder` [BitRock InstallBuilder](https://installbuilder.bitrock.com/)
* `Custom` none of the above

## Installers

`installers` list contains all installers available for the application. Each manifest must have at least one installer. But can have more to support multiple CPU architectures or different versions of Windows.

### Installer Fields

`location` Fully qualified URI that points to the installer. *Currently only HTTP and HTTPS protocols are supported but support for more protocols are planned.*

`architecture` CPU architecture supported by this installer. Supported values are: `x86`, `x64`. If architecture isn't specified `x86` will be assumed

`sha256` Used to validate the integrity and correctness of the downloaded file

`minWindowsVersion` Minimum version of Windows required for the application to install/work correctly.

*Table below describes the list of supported values for `minWindowsVersion`*

| Manifest Value | Desktop       | Server                 |
| :------------- | ------------- | ---------------------- |
| `6.0`          | Windows Vista | Windows Server 2008    |
| `6.1`          | Windows 7     | Windows Server 2008 R2 |
| `6.2`          | Windows 8     | Windows Server 2012    |
| `6.3`          | Windows 8.1   | Windows Server 2012 R2 |
| `10.0`         | Windows 10    | Windows Server 2016    |



## Package ID

The “Package ID” is the primary identifier for an application in AppGet. It’s also the value users will use to install or interact with the package.

::: warning Keep in Mind
Package ID is not meant EVER to change, take extra care to pick an appropriate package name that follows the convention and rules below.
:::

Here are some things to keep in mind when trying to create an ID for a new package

- Only allowed to contain letters, numbers and dash. Things like `+` should be spelled out, for example `notepad-plus-plus`
- Only lowercase letters are allowed
- Vendor name is usually omitted, unless application name is too generic. For example use `adobe-reader` instead of `reader`
- Don't include the version of the App in the ID unless the version is part of the Product Name. This exception usually comes in the form of year, for example `office-2017` `visual-studio-community-2017`
- Keep the edition of the app in the ID if more than one edition is available, e.g. `docker-community-edition`
- Keep the release channel of the app in the ID except for the main channel. example, `chrome` should install the regular version of chrome while `chrome-canary` should install the Canary release channel. Same rule and apply to LTS releases as well, for example `node` and `node-lts`
- Inevitably, there are a small number of exceptions not covered by the rules. Don’t hesitate to [contact the community](https://github.com/appget/appget.packages/issues) if you need any clarification.



## Package Name

::: tip Relax :)

Package name is not nearly as important as the Package ID since it's only used for display purposes and can be updated without breaking anything.

:::

- Start with the English marketing name of the Application, such as `Google Chrome`, `Microsoft Office`, `Dropbox`. The easiest way to find this name is too look up the application in Wikipedia; the Article title is usually the name we are looking for.
- Remove the  version numbers
- Don't include hardware designations such as “for x86”, “32-bit”
- Pay attention to details, for example: `Git Hub` vs `GitHub` vs `github`



## Tags and Versions

Even though tags and versions might seem similar they serve very different purposes. You can think of **Tags** and **Versions** in the same way you think of **ID** and **Name**

**Version** is mostly used for display purposes. It lets the user know which version of the application will be installed by the manifest. In the future, it will also be used to allow you to upgrade already existing packages. On the other hand **Tags** are used to install a specific version of an application when available. 



# Tags

AppGet uses tags similar to the way that docker repository uses tags using the `package-id:tag` syntax. When interacting with packages omitting the tag assumes the default `latest` tag. for example `appget install node` and `appget install node:latest` have the same effect.

Tags aren't meant to be used for release channels (LTS, nightly, beta, preview etc.). Release channels should be appended to the ID of the package [(See Package ID)](#package-id) and are considered separate packages. For example `chrome` and `chrome-canary` are considered two different packages. However different release channels can have their own underlying version tags, for example `node-lts:8.11` and `node:10.1`

Tags should only be used when being able to install and stay on a specific major release is **both common AND desirable.**



When should a tag be used:

- If newer versions of an application introduce **major** breaking change or drop of **major** functionality
- If for **mission critical** reasons staying on a specific version of an application is common. This is commonly used for development platforms e.g. Node, Python etc.
- For licensing purposes, For example, if newer versions of an app require a new/upgraded license/key
