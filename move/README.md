# Google Drive Move Action

GitHub Action that move files between Google Drive folders.

## Usage

### Inputs

| Name | Description | Required |
| - | - | - |
| `credentials` | Google API credentials in base64 format. | `true` |
| `source-parent-folder-id` | The source parent folder ID in Google Drive. | `true` |
| `element-name` | The name of the element to move in GDrive source-parent-folder-id. | `true` |
| `target-parent-folder-id` | The target parent folder ID in Google Drive. | `true` |
| `target-filepath` | The target file path in Google Drive of the moved file relative to the given target-parent-folder-id. Use parent folder root with source element-name when not set. | `false` |

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

  - name: Move file on Google Drive
    id: gdrive-move
    uses: bonitasoft/gdrive-action@v1
    with:
      credentials: ${{ secrets.GDRIVE_CREDENTIALS }} # credentials stored as a GitHub secret
      source parent-folder-id: ${{ vars.SOURCE_GDRIVE_FOLDER_ID }} # folder id stored as a GitHub variable
      element-name: file_or_folder_name
      target-parent-folder-id: ${{ vars.TARGET_GDRIVE_FOLDER_ID }} # folder id stored as a GitHub variable
      target-filepath: destination/relative/path/file_or_folder_name

  - name: Print Output
    id: output
    run: echo "${{ steps.gdrive-upload.outputs.file-id }}"
```
