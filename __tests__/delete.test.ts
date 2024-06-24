/**
 * Unit tests for the action's entrypoint, src/index.ts
 */
import * as main from '../src/main'

// Mock the action's entrypoint
const runMock = jest.spyOn(main, 'runDelete').mockImplementation()

describe('delete', () => {
  it('calls runDelete when imported', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('../src/delete')

    expect(runMock).toHaveBeenCalled()
  })
})
