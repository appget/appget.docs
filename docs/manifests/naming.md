# Package ID and Application Name

## Package ID


The “Package ID” is the primary identifier for an application in AppGet. It’s also the value users will use to install or interact with the package.

::: warning Keep in Mind
Package ID is not meant to EVER change, take extra care to pick an appropriate package name that follows the convention and rules bellow.
:::

Here are some things to keep in mind when trying to create an ID for a new package

-  Only allowed to contain letters, numbers and dash. Things like `+` should be spelled out, for example `notepad-plus-plus`
-  Only lowercase letters are allowed
-  Usually don't contain the vendor name unless app name is too generic. For example use `adobe-reader` instead of `reader`
-  Don't include the version of the App in the ID unless the version is part of the Product Name. This exception usually comes in the form of year, for example `office-2017` `visual-studio-community-2017`
-  Keep the edition of the app in the ID if more than one edition is available, eg. `docker-community-edition`
-  Keep the release channel of the app in the ID except for the main channel. example, `chrome` should install the regular version of chrome while `chrome-canarry` should install the Canary release channel. Same rule and apply to LTS releases as well, for example `node` and `node-lts`
-  Inevitably, there are a small number of exceptions not covered by the rules. Don’t hesitate to [contact the community](https://github.com/appget/appget.packages/issues) if you need any clarification.



## App Name

::: tip Relax :)

App name is not nearly as important as the Package ID since it's only used for display purposes and can be updated which out breakage at anytime

:::

- Start with the English marketing name of the Application, such as `Google Chrome`, `Microsoft Office`, `Dropbox`. Easiest way to find this name is too look up the application in Wikipedia, Article title is usually the name we are looking for.
- Remove the  version numbers 
- Don't include hardware designations such as “for x86”, “32-bit”.
- Pay attention to details, for example: `Git Hub` vs `GitHub` vs `github`