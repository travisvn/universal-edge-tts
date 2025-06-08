# universal-edge-tts

**Note: This is an alias package for [`edge-tts-universal`](https://github.com/travisvn/edge-tts-universal)**

This package provides an alternative name for the `edge-tts-universal` library. All functionality is identical.

## Installation

```bash
npm install universal-edge-tts
```

## Usage

```javascript
// These are equivalent:
import { EdgeTTS } from 'universal-edge-tts';
import { EdgeTTS } from 'edge-tts-universal';

// CommonJS
const { EdgeTTS } = require('universal-edge-tts');
```

### Environment-specific imports

```javascript
// For browser environments
import { EdgeTTS } from 'universal-edge-tts/browser';

// For isomorphic usage (Node.js + Browser)
import { EdgeTTS } from 'universal-edge-tts/isomorphic';

// For web workers
import { EdgeTTS } from 'universal-edge-tts/webworker';
```

## Documentation

For complete documentation, API reference, and examples, see the [main package](https://github.com/travisvn/edge-tts-universal).

## Contributing

This is a proxy package that re-exports functionality from `edge-tts-universal`. All development should happen in the [main repository](https://github.com/travisvn/edge-tts-universal).

### Version Synchronization

This package automatically syncs its version with the main `edge-tts-universal` package. When a new release is created in the main repository, it triggers an automatic update here that:

- Updates the dependency version to match
- Creates a corresponding release
- Automatically publishes to npm

This ensures both packages are always in sync without manual intervention.

## License

AGPL-3.0 - see [LICENSE](LICENSE) file for details.
