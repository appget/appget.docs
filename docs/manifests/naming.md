# Naming In AppGet

This document describes detailed rules and exceptions when naming packages in AppGet.

## App Name

-  Start with the English marketing name of the Application, such as `Google Chrome`, `Microsoft Office`, `Dropbox`. Easiest way to find this name is too look up the application in Wikipedia, Article title is usually the name we are looking for.

-  Remove the  version numbers or release channel designations such as “alpha”, “beta” or “release candidate”. Terms which distinguish different capabilities or codebases such as “Community Edition”, “Enterprise” are accepted. 
-  *Note: Numbers that are not incremental release counters, but part of product name `Microsoft Office 2012` should stay as part of the name.*
-  Don't include hardware designations such as “for x86”, “32-bit”.
-  Pay attention to details, for example: `Git Hub` vs `GitHub` vs `github`
-  Inevitably, there are a small number of exceptions not covered by the rules. Don’t hesitate to [contact the maintainers](https://github.com/appget/appget.packages/issues) if you need any clarification.

## Package ID


The “Package ID” is the primary identifier for an application in AppGet. It’s also the string people will use to install or  interact with the package.

::: WARNING
Package ID is not meant to EVER change, take extra care to pick an appropritate package name that follows the convention and rules bellow.
:::

To get from the App’s canonical name to the Package ID:

-  Drop the vendor name unless app name is too generic. *eg. Adobe Reader*
-  Convert all letters to lower case
-  Expand the `+` symbol into a separated English word: `-plus-`.
   *eg. notepad-plus-plus*
-  Hyphens stay hyphens
-  Spaces become hyphens
-  Digits stay digits
-  Delete any character which is not alphanumeric or hyphen
-  Collapse a series of multiple hyphens into one hyphen

### Examples

These illustrate most of the naming rules:


| Marketing name                    | Canonical App Name               | Package ID                  |
|-----------------------------------|----------------------------------|-----------------------------|
| Adobe Reader                      | Adobe Reader                     | `adobe-reader`            |
| VLC                               | VLC                              | `vlc`                     |
| Sublime Text 2                    | Sublime Text                     | `sublime-text`            |
| Microsoft Office 2012             | Microsoft Office 2012            | `office-2012`             |
| Microsoft SQL Server 2012 R2      | Microsoft SQL Server 2012 R2     | `sql-server-2012-r2`      |

