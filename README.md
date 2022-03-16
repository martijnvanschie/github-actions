# GitHub composite actions

## Get Dotnet Versions

### Usage

Add the following step to your job

```yaml
- name: Get version from tag
  id: dotnet-versions
  uses: ./.github/actions/get-dotnet-versions
  with: 
    version: '1.2.3-beta.1'
```

The following step displays the versions returned by the action

```yaml
- name: Echo all version outputs
  run: |
    echo version-assembly = ${{ steps.dotnet-versions.outputs.version-assembly }} 
    echo version-file = ${{ steps.dotnet-versions.outputs.version-file }}
    echo version-informational = ${{ steps.dotnet-versions.outputs.version-informational }}
    echo version-package = ${{ steps.dotnet-versions.outputs.version-package }}
    echo buildnumber = ${{ steps.dotnet-versions.outputs.buildnumber }}
```

### Versioning

This project follow the below versioning guidelines.

| Version              | Format                                      | Description |
| -------------------- | ------------------------------------------- | ----------- |
| AssemblyVersion      | `major.minor.0.0`                           | Scoped to only major and minor version changes. Indicates backward compatibility. |
| FileVersion          | `major.minor.patch.build`                   | Includes a patch and build numer, indicating the exact version of the application. |
| InformationalVersion | `major.minor.patch[-pre-release]`           | Includes a pre-release identifier. This is the informational version used to communicate. |
| PackageVersion       | `major.minor.patch[-pre-release]+commit-id` | Includes the commit id. This is the most specific version and has a direct reference to the github commit. |

[Versioning and .NET Libraries](https://docs.microsoft.com/en-us/dotnet/standard/library-guidance/versioning)

[Semantic Versioning 2.0.0](https://semver.org/)