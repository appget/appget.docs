# Commands

:::tip Commands
All of the commands below share the following arguments

`-v` or `--verbose`Log more detailed information, useful for diagnosing issues.

`--help` prints out a list of available arguments and parameters for the command

:::
## install

`install` is the primary command of AppGet, you can use it to install any of the [available packages](https://appget.net/packages).

#### Format:

`install {package-id}:{tag}`

#### Arguments:

`-i` or `--interactive`: Start the installer in *interactive mode*. This allows you to step through the installer manually and select any of the available options. By default AppGet starts installers in *passive mode*.

`-s` or `--silent`: Start the installer in *silent mode*. This mode tries to hide as much of the installer interface as possible including all progress and status windows.

:::tip
If AppGet can't find the exact package ID you tried to install, it'll automatically trigger a search and provides you with suggestions. This means you don't have to know the exact ID of the package; you just try to install it and see what AppGet suggests if no exact matches are found.
:::

#### Examples:

`appget install google-chrome`

`appget install git -s`

`appget install visual-studio-code --interactive --verbose`


## search
Search AppGet's [package repository](https://appget.net/packages).

#### Format:
`search {term}`

#### Examples:
`appget search code`

`appget search google -v`

## list

Display a list of all currently installed packages that are known to AppGet.  The list will include both outdated and up-to-date packages.

:::tip Keep in Mind
Currently AppGet can't match 100% of packages available in the library. That's why some of your installed packages might be missing from this list even though they are available in the AppGet library. we are constantly working to improving the matching algorithm.
:::

#### Examples:

`appget list`



## view

View the package manifest used when installing the package. The output is the raw content of the manifests as available in [GitHub](https://github.com/appget/appget.packages/tree/master/manifests).

#### Format:
`view {term}`

#### Examples:
`appget view firefox`

`appget view git --verbose`



## outdated

Check all applications that are currently installed on the system for available updates (This works even for application that weren't installed by AppGet)



#### Example:

`appget outdated `



## update-all

Batch update of all out-dated applications on the system. To see which applications are going to be updated you can use `appget outdated` command.

:::tip
Since some of the applications might require elevated privileges to update we recommend running `appget updated-all` from a command line that has been started as administrator. This helps avoid having grant elevated privileges to multiple installers.
:::

#### Example:

`appget update-all `



## clean

Clean AppGet's cache and temporarily folders. Currently `C:\ProgramData\AppGet\InstallerCache` and ` C:\ProgramData\AppGet\Temp` 

#### Example:

`appget clean`



## create

Create a new manifest for a missing application.  AppGet will automatically try and figure out most of the values needed but might ask you to fill or confirm anything it isn't sure about.

#### Format:

`create {download_url}`

#### Example:

`appget create "https://github.com/atom/atom/releases/download/v1.27.1/AtomSetup.exe" `

:::tip
Always wrap the URL in "" to avoid issues with URLs that contain spaces or special characters.
:::



## help

Prints a list of available commands and a short description.

#### Examples:

`appget help`
