# Package Versioning


AppGet tries to follow the spirit of `Semantic Versioning`_. However we try to take a more realistic approach to Semantic Versioning rather than an idealistic one. If you have any questions feel free to `contact the maintainers`_

::: tip Note
These rules only apply to applications that don't support silent background updates. *eg. Google Chrome, Dropbox*.
For these applications you shouldn't specify a version in the manifest or as part of the manifest name.
:::


## Manifest File Name

Manifest file name is constructed by joining the `App ID`_ with the major version or least of the application separated by a period.

| App ID                  | Version                 | Manifest File Name          |
|-------------------------|-------------------------|-----------------------------|
| `vlc`                   | `2.1.5`                 | `vlc.2.yaml`                |
| `subline-text`          | `2.0.2`                 | `sublime-text.2.yaml`       |
| `google-chrome`         | *Silent Updates*        | `google-chrome.yaml`        |

This allows us to maintain a separate manifest for major versions of applications without having to create and maintain a new manifest for more frequent and less significant minor releases.


## Manifest Version Field

`Version` field specified in the manifest should match the exact version of the application that would be downloaded by that package.

This field is used to detect updates for users that have the package installed.




| App Name                | Version                 | Manifest File Name          |
|-------------------------|-------------------------|-----------------------------|
| VLC                     | `2.1.5`                 | `2.1.5`                     |
| Microsoft Office 2013   | `15.0`                  | `15.0`                      |
| Google Chrome           | *Silent Updates*        | *Don't Set*                 |




.. _Semantic Versioning: http://semver.org/
.. _App ID: naming.html#app-id
.. _contact the maintainers: https://github.com/Appget/Appget/issues
