/**
 * StateManager
 * ------------
 * Utility class for managing loading states in Angular components.
 * Allows tracking and updating the current state: 'idle', 'loading', 'success', or 'error'.
 *
 * Usage example:
 *   const state = new StateManager();
 *   state.loading();      // sets state to 'loading'
 *   state.setSuccess();   // sets state to 'success' (only if currently 'loading')
 *   state.setError();     // sets state to 'error'
 *   state.isLoading();    // returns true if state is 'loading'
 *   state.isSuccess();    // returns true if state is 'success'
 *   state.isError();      // returns true if state is 'error'
 *
 * LoadState type:
 *   'idle'    - initial state, no activity
 *   'loading' - data is being loaded
 *   'success' - data loaded successfully
 *   'error'   - an error occurred during loading
 */

export type LoadState = 'idle' | 'loading' | 'success' | 'error';

export class StateManager {
  private _state: LoadState = 'idle';

  loading(): void {
    this._state = 'loading';
  }

  state(): LoadState {
    return this._state;
  }

  setSuccess(): void {
    if (this._state === 'loading') {
      this._state = 'success';
    }
    return;
  }

  setError(): void {
    this._state = 'error';
  }

  isLoading(): boolean {
    return this._state === 'loading';
  }

  isSuccess(): boolean {
    return this._state === 'success';
  }

  isError(): boolean {
    return this._state === 'error';
  }
}
