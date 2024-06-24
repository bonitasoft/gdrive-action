/**
 * Unit tests for the action's entrypoint, src/index.ts
 */
import * as main from '../src/main'

// Mock the action's entrypoint
const runMock = jest.spyOn(main, 'runUpload').mockImplementation()

describe('upload', () => {
  it('calls runUpload when imported', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('../src/upload')

    expect(runMock).toHaveBeenCalled()
  })
})
