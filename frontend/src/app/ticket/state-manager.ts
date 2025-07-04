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
