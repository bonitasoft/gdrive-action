# Google Drive Upload Action

## Usage

### Inputs

| Name | Description | Required |
| - | - | - |
| `credentials` | Google API credentials in base64 format. | `true` |
| `parent-folder-id` | The parent folder ID in Google Drive. | `true` |
| `source-filepath` | The path of the local file to upload. | `true` |
| `target-filepath` | The remote file path in Google Drive of the uploaded file relative to the given parent folder. Use parent folder root with source filename when not set. | `false` |
| `overwrite` | Overwrite remote file on Google Drive if it does already exist. | `false` (default: `true`) |
| `create-checksum` | Create and upload a sha-256 checksum file next to the uploaded file. | `false` (default: `false`) |

### Outputs

| Name | Description |
| - | - |
| `file-id` | The ID of the uploaded file. |

## Examples

```yaml
steps:
  - name: Checkout
    id: checkout
    uses: actions/checkout@v4

  - name: Create dummy file
    run: |
      mkdir -p output/files
      echo 'Hello World' > output/files/hello.txt

  - name: Upload file to Google Drive
    id: gdrive-upload
    uses: bonitasoft/gdrive-action/upload@v1
    with:
      credentials: ${{ secrets.GDRIVE_CREDENTIALS }} # credentials stored as a GitHub secret
      parent-folder-id: ${{ vars.GDRIVE_FOLDER_ID }} # folder id stored as a GitHub variable
      source-filepath: output/files/hello.txt
      target-filepath: test/hello_1.txt
      overwrite: true
      create-checksum: true

  - name: Print Output
    id: output
    run: echo "${{ steps.gdrive-upload.outputs.file-id }}"
```
