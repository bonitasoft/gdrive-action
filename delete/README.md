# Google Drive Delete Action

## Usage

### Inputs

| Name | Description | Required |
| - | - | - |
| `credentials` | Google API credentials in base64 format. | `true` |
| `parent-folder-id` | The parent folder ID in Google Drive. | `true` |
| `target-filepath` | The remote file path in Google Drive of the uploaded file relative to the given parent folder. Use parent folder root with source filename when not set. | `true` |
| `ignore-missing` | Ignore if the target file does not exist. | `false` |

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

  - name: Delete file from Google Drive
    id: gdrive-delete
    uses: bonitasoft/gdrive-action/delete@v1
    with:
      credentials: ${{ secrets.GDRIVE_CREDENTIALS }} # credentials stored as a GitHub secret
      parent-folder-id: ${{ vars.GDRIVE_FOLDER_ID }} # folder id stored as a GitHub variable
      target-filepath: test/hello_1.txt
      ignore-missing: true # Does not fail the step if target file does not exists

  - name: Print Output
    id: output
    run: echo "${{ steps.gdrive-upload.outputs.file-id }}"
```
