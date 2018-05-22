# Package Manifest Overview

Rather than using installation scripts AppGet uses `YAML` files to define application packages. Manifest file provides all information required to install a package by AppGet. We believe this is dramatically more secure and much easier to maintain that the alternative.

All available packages are hosted in our official [GitHub Repository](https://github.com/appget/appget.packages).

For example, [vlc.yaml](https://github.com/appget/appget.packages/blob/master/manifests/vlc/vlc.yaml)

```yaml
id: vlc
name: VLC media player
version: 3.0.2
home: https://videolan.org/
license: GNU Lesser General Public License v2.1+
installMethod: NSIS
installers:
- location: https://get.videolan.org/vlc/3.0.2/win32/vlc-3.0.2-win32.exe
  sha256: 30160a607e5ec2e4a2718ea2e37764647f6cfc9c7eb31f58f9f873521726695a
- location: https://get.videolan.org/vlc/3.0.2/win64/vlc-3.0.2-win64.exe
  sha256: a40f651bb2f5a9088637b7b43bb73c16b96192b7ceac2d21cef556ed94bfc84d
  architecture: x64

```





##  Root Fields

`id` (Required) The unique ID of the package. [See Package ID](#package-id)

`name`  (Required)  Full marketing name of the application [See Package Name](#package-name)

`version` Version of the application

`home` Fully qualified product home page URL where users can see basic information about the application

`repo` Fully qualified URL that points to the software repository hosting the source of the application, usually on GitHub, GitLab, SourceForge etc.

`license` Name of the software license under which the application has been released

`installMethod`  (Required) The install method used by the package. One of the following values must be used:

 * `MSI` MSI or Windows Installer
 * `Inno` [Inno Setup](http://www.jrsoftware.org/isinfo.php) by JRSoftware
 * `Squirrel`  [Squirrel](https://github.com/Squirrel/Squirrel.Windows)
 * `Wix`  [Wix Toolset](http://wixtoolset.org/)
* `NSIS` [Nullsoft Scriptable Install System](http://nsis.sourceforge.net/Main_Page)
* `InstallBuilder` [BitRock InstallBuilder](https://installbuilder.bitrock.com/)




## Installers

`installers` List contains contains all installers available to install the application. Each manifest must have at least one installer. But can contain more to support multiple CPU architectures or different versions of Windows.

### Installer Fields

`location` Fully qualified link to directly download the URL. *Currently only HTTP/HTTPS protocols are supported but support for more protocols are planed.*

`architecture` CPU architecture supported by this installer. One of the following values must be used: `x86`, `x64`. If this value is omitted default value of `x86` will be assumed

`sha256|sha1|md5` Used to validate the integrity and correctness of the downloaded file

`minWindowsVersion` Minimum version of Windows required for the application to install/work correctly

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
Package ID is not meant to EVER change, take extra care to pick an appropriate package name that follows the convention and rules bellow.
:::

Here are some things to keep in mind when trying to create an ID for a new package

- Only allowed to contain letters, numbers and dash. Things like `+` should be spelled out, for example `notepad-plus-plus`
- Only lowercase letters are allowed
- Usually don't contain the vendor name unless app name is too generic. For example use `adobe-reader` instead of `reader`
- Don't include the version of the App in the ID unless the version is part of the Product Name. This exception usually comes in the form of year, for example `office-2017` `visual-studio-community-2017`
- Keep the edition of the app in the ID if more than one edition is available, e.g. `docker-community-edition`
- Keep the release channel of the app in the ID except for the main channel. example, `chrome` should install the regular version of chrome while `chrome-canarry` should install the Canary release channel. Same rule and apply to LTS releases as well, for example `node` and `node-lts`
- Inevitably, there are a small number of exceptions not covered by the rules. Don’t hesitate to [contact the community](https://github.com/appget/appget.packages/issues) if you need any clarification.



## Package Name

::: tip Relax :)

Package name is not nearly as important as the Package ID since it's only used for display purposes and can be updated which out breakage at anytime

:::

- Start with the English marketing name of the Application, such as `Google Chrome`, `Microsoft Office`, `Dropbox`. Easiest way to find this name is too look up the application in Wikipedia, Article title is usually the name we are looking for.
- Remove the  version numbers
- Don't include hardware designations such as “for x86”, “32-bit”
- Pay attention to details, for example: `Git Hub` vs `GitHub` vs `github`



## Tags and Versions

Even thought tags and versions might seem similar they server very different purposes.



**Tags** are used to select a specific releases when installing packages.





# Tags

AppGet uses tags similar to the way that docker repository uses tags using the following syntax `package-id:tag` . When interacting with packages omitting the tag uses the default `latest` tag. for example `appget install node` and `appget install node:latest` have the same effect.

Don't use tags for release channels (LTS, nightly, beta, preview etc.). Release channels should be appended to the ID of the package [(See Package ID)](#package-id) and are considered separate packages.  For example `chrome` and `chrome-canary` are considered two different packages. However different release channels can have their own underlying version tags, for example `node-lts:8.11` and `node:10.1`

Tags should only be used when being able to install and stay on a specific major release is **both common AND desirable.**



When should a tag be used:

- If newer versions of an application introduce **major** breaking change or drop of **major** functionality
- If for **mission critical** reasons staying on specific version of a package is common, most commonly used for development platforms e.g. Node, Python etc.
- For licensing reasons, if newer versions of an app require a new/upgraded license/key



## Package Versioning

AppGet tries to follow the spirit of `Semantic Versioning`_. However we try to take a more realistic approach to Semantic Versioning rather than an idealistic one. If you have any questions feel free to `contact the maintainers`_

::: tip Note
These rules only apply to applications that don't support silent background updates. *e.g. Google Chrome, Dropbox*.
For these applications you shouldn't specify a version in the manifest or as part of the manifest name.
:::

## Manifest File Name

Manifest file name is constructed by joining the `App ID`_ with the major version or least of the application separated by a period.

| App ID          | Version          | Manifest File Name    |
| --------------- | ---------------- | --------------------- |
| `vlc`           | `2.1.5`          | `vlc.2.yaml`          |
| `subline-text`  | `2.0.2`          | `sublime-text.2.yaml` |
| `google-chrome` | *Silent Updates* | `google-chrome.yaml`  |

This allows us to maintain a separate manifest for major versions of applications without having to create and maintain a new manifest for more frequent and less significant minor releases.

## Manifest Version Field

`Version` field specified in the manifest should match the exact version of the application that would be downloaded by that package.

This field is used to detect updates for users that have the package installed.



| App Name              | Version          | Manifest File Name |
| --------------------- | ---------------- | ------------------ |
| VLC                   | `2.1.5`          | `2.1.5`            |
| Microsoft Office 2013 | `15.0`           | `15.0`             |
| Google Chrome         | *Silent Updates* | *Don't Set*        |



