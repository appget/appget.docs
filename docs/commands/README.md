# Commands

:::tip Commands
All of the commands below share the following arguments

`-v` or `--verbose`Log more detailed information, useful for diagnosing issues.

`--help` prints out list of available arguments and parameters for the command

:::
## Install

`install` is the primary command of AppGet, you can use it to install any of the [available packages](https://github.com/appget/appget.packages/tree/master/manifests).

#### Format:

`install {package-id}`

#### Arguments:

`-i` or `--interactive`: Start the installer in *interactive mode*. This allows you to step through the installer manually and select any of the available options. By default AppGet starts installers in *passive mode*.

`-s` or `--silent`: Start the installer in *silent mode*. This mode tries to hide as much of the installer interface as possible including all progress and status windows.


:::tip
If AppGet can't find the exact package name you tried to install, it'll automatically trigger a search and provides you with suggestions. This means if you don't have to know the exact name of the package; you just try to install it and see what AppGet suggests.
:::

#### Examples:
`appget install google-chrome`

`appget install git -s`

`appget install visual-studio-code --interactive --verbose`


## Search
Search AppGet's [package repository](https://github.com/appget/appget.packages/tree/master/manifests).

#### Format:
`search {term}`

#### Examples:
`appget search code`

`appget search google -v`


## View
View the package manifest used when installing the package. The output is the raw content of the manifests as available in [GitHub](https://github.com/appget/appget.packages/tree/master/manifests).

#### Format:
`view {term}`

#### Examples:
`appget view firefox`

`appget view git --verbose`


<!-- ## Create -->

## Help
Prints a list of available commands and a short description.

#### Examples:
`appget help`
