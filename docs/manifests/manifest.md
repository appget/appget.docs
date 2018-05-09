# Package Manifest

AppGet uses `YAML` files to define application packages. Currently all available packages are hosted in our official `GitHub` repository.

## Manifest Fields

``Id`` The unique application ID of the package. See `Package ID`.

``Name`` Full marketing name of the application. See `Package Name`.

``Version`` Exact version that this package will install. See `Package Version`.

``ProductUrl`` Product home page where users can see basic information about this application.

``InstallMethod`` The install method used by this package, One of the following values must be used:

 * ``Zip`` if there is no installer included. Package is just a zip file that needs to be extracted.
 * ``MSI`` MSI or Windows Installer. These packages have an `.msi` file extension
 * ``Inno`` `Inno`_ setup installer
 * ``ClickOnce`` These packages usually have a `.application` extention
 * ``NSIS`` or Nullsoft Scriptable Install System


``Installers`` List of different install packages available for download. Each package must have at least one installer. But can contain more to support multiple CPU architectures or different versions of Windows.

## Installer Fields


``Location`` Where installer could be downloaded from. HTTP is the only protocol currently supported, but we plan to add support for more protocols soon

``Architecture`` CPU architecture supported by this installer. One of the following values must be used: Any, x86, x64, Itanium, ARM

``Sha256|Sha1|Md5`` Use one of the preceding field to provide a verification hash for the installer

``MinWindowsVersion`` Minimum version of Windows required for this application to work correctly. Valid Values are: XpSp3, Vista, VistaSp1, VistaSp2, Seven, SevenSp1, Eight, EightOne, Ten


## Examples
--------
See examples in `GitHub`

.. _Yaml: http://en.wikipedia.org/wiki/YAML
.. _GitHub: https://github.com/AppGet/AppGet.Packages
.. _Package Name: /authors/naming.html
.. _Package ID: /authors/naming.html
.. _Package Version: /authors/versions.html
.. _Inno: http://www.jrsoftware.org/isinfo.php


